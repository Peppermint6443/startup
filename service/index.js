// ================================================================
//                         Initialization
// ================================================================
// package requirement
const express = require('express');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const uuid = require('uuid');

// initialize things
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(express.static('public'));

const port = process.argv.length > 2 ? process.argv[2] : 3000;
const authCookieName = 'token';

// set up the router path
let apiRouter = express.Router();
app.use('/api', apiRouter);

// create the data structures to be used
let users = [];
let rolls = [];
let roll_histories = [];

// ================================================================
//                         API Endpoints
// ================================================================

// create a catch all endpoint
// app.get('*', (_req, res) => {
//     res.send({ msg: 'Startup service!' });
// });

// create a new user
apiRouter.post('/auth/create', async (req, res) => {
    if (await findUser('email', req.body.email)) {                                  // function
        res.status(409).send({ msg: 'Existing user' });
    } else {
        const user = await createUser(req.body.email, req.body.password);           // function

        setAuthCookie(res, user.token);                                             // function
        res.send({ email: user.email });
    }
});

// login a user
apiRouter.post('/auth/login', async (req, res) => {
    const user = await findUser('email', req.body.email);                           // function

    // proceed if there is a user
    if (user) {
        if (await bcrypt.compare(req.body.password, user.password)) {
            //create and set the user's token
            user.token = uuid.v4();

            // set the cookie
            setAuthCookie(res, user.token);                                         // function

            // return the user's email
            res.send({ email: user.email });
            return;
        }
    }
    res.status(401).send({ msg: 'Invalid Login' });
});

// logout a user
apiRouter.delete('/auth/logout', async (req, res) => {
    // find the user
    const user = await findUser('token', req.cookies[authCookieName]);              // function

    // delete the user's token
    if (user) {
        delete user.token;
    }

    // clear the cookie
    res.clearCookie(authCookieName);
    res.status(204).send({ msg: 'Logged out' });
});

// function to verify a user is authorized
const verifyAuth = async (req, res, next) => {
    const user = await findUser('token', req.cookies[authCookieName]);

    // if the user is not found, return unauthorized
    if (user) {
        next();
    } else {
        res.status(401).send({ msg: 'Unauthorized' });
    }
}

// get rolls
apiRouter.get('/rolls', verifyAuth, (_req, res) => {
    const userRolls = rolls.filter(roll => roll.email === _req.email);
    res.send(userRolls);
});

// add a new roll
apiRouter.post('/addroll', verifyAuth, (req, res) => {
    rolls = addRoll(req.body);                                                      // function     
    res.send(rolls);
});

// get roll history for a single roll
apiRouter.get('/rollhistory', verifyAuth, (req, res) => {
    const rollHistory = roll_histories.filter(roll => roll.roll_id === req.body.roll_id);
    res.send(rollHistory);
});

// delete a roll
apiRouter.delete('/roll/delete', verifyAuth, (req, res) => {
    rolls = deleteRoll(req.body.roll_id);                                           // function
    res.send(rolls);
});

// add a new roll history
apiRouter.post('/addrollhistory', verifyAuth, (req, res) => {
    roll_histories = addRollHistory(req.body);                                      // function
    res.send(roll_histories);
});

// error handling
app.use(function (err, req, res, next) {
    res.status(500).send({ type: err.name, message: err.message });
});

// return to applications default page if path is unknown
app.use((req, res) => {
    res.sendFile('index.html', { root: 'public' });
});

// ================================================================
//                           Functions
// ================================================================
// function to create a user
async function createUser(email, password) {
    // encrypt the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // create the user
    const user = {
        email: email,
        password: hashedPassword,
        token: uuid.v4(),
    };

    // add user to array
    users.push(user);

    return user;
}

// function to find a user
async function findUser(field, value) {
    if (!value) return null;

    // find the user
    return users.find((u) => u[field] === value);
}

// function to set the auth cookie
function setAuthCookie(res, authToken) {
    res.cookie(authCookieName, authToken, {
        secure: true,
        httpOnly: true,
        sameSite: 'strict',
    });
}

// function to add a roll
function addRoll(newRoll) {
    rolls.push(newRoll);
    return rolls;
}

// function to add a roll history
function addRollHistory(newRollHistory) {
    roll_histories.push(newRollHistory);
    return roll_histories;
}

// function to delete a roll
function deleteRoll(roll_id) {
    rolls = rolls.filter(roll => roll.roll_id !== roll_id);
    roll_histories = roll_histories.filter(roll => roll.roll_id !== roll_id);
    return rolls;
}


// start the server and listen for requests
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});