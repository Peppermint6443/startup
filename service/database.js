const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;

const client = new MongoClient(url);
const db = client.db('startup');
const userCollection = db.collection('users');
const rollsCollection = db.collection('rolls');
const rollHistoryCollection = db.collection('rollHistory');

(async function testConnection() {
    try {
        await db.command({ ping: 1 });
        console.log(`Connected to database`);
    } catch (ex) {
        console.log(`Unable to connect to database because ${ex.message}`);
        process.exit(1);
    }
})();

function getUser(email) {
    return userCollection.findOne({ email: email });
}

function getUserbyToken(user_token) {
    return userCollection.findOne({ token: user_token });
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

async function getRolls(user_email) {
    // fix in case the user doesn't have any rolls
    if (!user_email) return [];
    // console.log(`got past not having a user`);
    result = await rollsCollection.find({ owner: user_email}).toArray();
    return result;
}

async function addRollHistory(rollHistory) {
    return await rollHistoryCollection.insertOne(rollHistory);
}

async function getRollHistory(roll) {
    return await rollHistoryCollection.find({ roll: roll }).toArray();
}

async function deleteRoll(roll_id) {
    return await rollsCollection.deleteOne({ roll_id: roll_id });
}

module.exports = {
    getUser,
    getUserbyToken,
    addUser,
    updateUser,
    addRoll,
    getRolls,
    addRollHistory,
    getRollHistory,
    deleteRoll,
};