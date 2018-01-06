const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', function (req, res) {
    pool.connect(function (err, db, done) {
        if (err) {
            console.log(err);
            res.status(500).send({'error': err});
            
        } else {
            db.query('SELECT title FROM injuries', function (err, table) {
                done();
                if (err) {
                    return res.status(400).send({ error: err })
                
                } else {
                    return res.status(200).send(table.rows)
                }
            })
        }
    });
});

router.get('/injuryInfo', function (req, res) {
    console.log('injuriesInfo get, req.params: ');
    console.log(req.query);
    
    const title = req.query.title;
    pool.connect(function (err, db, done) {
        if (err) {
            console.log(err);
            res.status(500).send({'error': err});
            
        } else {
            const text = 'SELECT * FROM injuries WHERE title=$1';
            const values = [title];
            db.query(text, values, (err, table) => {
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