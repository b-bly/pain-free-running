const express = require('express');
const router = express.Router();
const path = require('path');
const pool = require('../modules/pool.js');
const encryptLib = require('../modules/encryption');

// Handles POST request with new user data
router.post('/', (req, res, next) => {

  const saveUser = {
    username: req.body.username,
    password: encryptLib.encryptPassword(req.body.password)
  };
  console.log('new user:', saveUser);

  pool.connect((err, client, done) => {
    if(err) {
      console.log("Error connecting: ", err);
      res.sendStatus(500);
    }
    client.query("INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id",
      [saveUser.username, saveUser.password],
        (err, result) => {
          client.end();

          if(err) {
            console.log("Error inserting data: ", err);
            res.sendStatus(500);
          } else {
              console.log('register success, data: ');
              console.log(result.rows[0]);
            res.status(201).send(result.rows[0]);
          }
        });
  });

});


module.exports = router;
