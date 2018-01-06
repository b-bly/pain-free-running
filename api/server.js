const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const injuries = require('./routes/injuries');
const PORT = 5000;
const app = express();

// allows certain cross-origin requests (DELETE fails without this)
app.use(cors());

//body parser creating req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/injuries', injuries);

app.listen(PORT, () => console.log('listening on port ', PORT));