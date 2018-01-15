const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const passport = require('./strategies/sql.localstrategy');
const sessionConfig = require('./modules/session.config');

//route
const injuries = require('./routes/injuries')
const userRouter = require('./routes/user');
const login = require('./routes/login');
const register = require('./routes/register');

const PORT = 5000;
const app = express();

// allows certain cross-origin requests (DELETE fails without this)
app.use(cors());

//body parser creating req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration
app.use(sessionConfig);

// Start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

//routes
app.use('/injuries', injuries);
app.use('/user', userRouter);
app.use('/register', register);
app.use('/login', login);

app.listen(PORT, () => console.log('listening on port ', PORT));