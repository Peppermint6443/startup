const { WebSocketServer, WebSocket } = require('ws');

function peerProxy(httpServer) {
    // create the websocket server object
    const socketServer = new WebSocketServer({ server: httpServer });

    // connect to the service
    socketServer.on('connection', (socket) => {
        socket.isAlive = true;

        // forward messages to the service
        socket.on('message', function message(data) {
            socketServer.clients.forEach((client) => {
                if (client.readyState === WebSocket.OPEN) {
                    client.send(data);
                }
            });
        });

        // respond to pong messages by marking the connection alive
        socket.on('pong', () => {
            socket.isAlive = true;
        });
    });

    // ping message every once in a while to make sure clients are alive
    setInterval(() => {
        socketServer.clients.forEach(function each(client) {
            if (client.isAlive === false) return client.terminate();

            client.isAlive = false;
            client.ping();
        });
    }, 10000); // 10 seconds
}

module.exports = { peerProxy };