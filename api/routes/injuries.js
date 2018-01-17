const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    pool.connect((err, db, done) => {
        if (err) {
            console.log(err);
            res.status(500).send({'error': err});
            
        } else {
            db.query('SELECT title FROM injuries', (err, table) => {
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

router.get('/injuryInfo',  (req, res) => {
    const title = req.query.title;
    pool.connect( (err, db, done) => {
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
                    // console.log('injury info response');
                    // console.log(table.rows[0].treatments);
                    return res.status(200).send(table.rows[0])
                    // [ anonymous {
                    //     id: 1,
                    //     title: 'High Hamstring Tendonopathy',
                    //     description: 'Pain in the butt.',
                    //     treatments: 
                    //      { name: 'squats',
                    //        comments: [Object],
                    //        description: 'Do two sets of 20',
                    //        upvotes: '0' } } ]
                    
                }
                
            })
        }
    })
});

module.exports = router;