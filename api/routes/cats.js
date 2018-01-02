const express = require('express');
const router = express.Router();

const pool = require('../modules/pool');

router.get('/cats', function (req, res) {
    pool.connect(function (err, db, done) {
        if (err) {
            console.log(err);
            res.status(500).send({'error': err});
            
        } else {
            db.query('SELECT * FROM cats', function (err, table) {
                done();
                if (err) {
                    return res.status(400).send({ error: err })
                
                } else {
                    return res.status(200).send(table.rows)
                }
            })
        }
    })
});

module.exports = router;