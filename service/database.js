const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${confib.hostname}`;
const client = new MongoClient(url);
const db = client.db('startup');
const userCollection = db.collection('users');
const rollsCollection = db.collection('rolls');
const rollHistoryCollection = db.collection('rollHistory');

(async function testConnection() {
    try {
        await db.command({ ping: 1 });
        console.log(`Connect to database`);
    } catch (ex) {
        console.log(`Unable to connect to database because ${ex.message}`);
        process.exit(1);
    }
})();

function getUser(email) {
    return userCollection.findOne({ email: email });
}

function getUserbyToken(token) {
    return userCollection.findOne({ token: token });
}

async function addUser(user) {
    await userCollection.insertOne(user);
}

async function updateUser(user) {
    await userCollection.updateOne({ email: user.email }, { $set: user });
}

async function addRoll(roll) {
    return await rollsCollection.insertOne(roll); 
}

async function getRolls(user) {
    intermediate = user.email;
    return await rollsCollection.find({ email: { intermediate }}).toArray();
}

async function addRollHistory(rollHistory) {
    return await rollHistoryCollection.insertOne(rollHistory);
}

async function getRollHistory(roll) {
    return await rollHistoryCollection.find({ roll: roll }).toArray();
}

module.exports = {
    getUser,
    getUserbyToken,
    addUser,
    updateUser,
    addRoll,
    getRolls,
    addRollHistory,
    getRollHistory
};