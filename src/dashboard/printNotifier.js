class EventMessage {
    constructor(from, type, value) {
      this.from = from;
      this.type = type;
      this.value = value;
    }
  }

class EventNotifier {
    events = [];
    handlers = [];

    constructor() {
        let port = window.location.port;
        const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';

        // create the websocket item
        this.socket = new WebSocket(`${protocol}://${window.location.hostname}:${port}/ws`);

        // create the socket message handlers
        this.socket.onopen = (event) => {
            this.receiveEvent(new EventMessage('Roll Call', 'system', 'connected'));
        };
        this.socket.onclose = (event) => {
            this.receiveEvent(new EventMessage('Roll Call', 'system', 'disconnected'));
        };
        this.socket.onmessage = async (msg) => {
            try {
                const event = JSON.parse(await msg.data.text());
                this.receiveEvent(event);
            } catch {}
        };
    }

    broadcastEvent(from, type, value) {
        const event = new EventMessage(from, type, value);
        this.socket.send(JSON.stringify(event));
    }

    addEvent(handler) {
        this.handlers.push(handler);
    }
    removeEvent(handler) {
        this.handlers = this.handlers.filter((h) => h !== handler);
    }
    receiveEvent(event) {
        this.events.push(event);
        this.events.forEach((e) => {
            this.handlers.forEach((h) => {
                h(e);
            });
        });
    }
}

const PrintNotifier = new EventNotifier();
export { PrintNotifier };