const express = require('express')
const router = express.Router();

const mysql = require('mysql2/promise');
const Query = require('./queries/commentQuery')

const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: 13000,
    database: 'boards'
}

const pool = mysql.createPool(dbConfig);

router.get('/getComments', (req, res) => {
    const result = async () => {
        const conn = await pool.getConnection();

        try {
            const [rows, fields] = await conn.query(Query.selectComments());

            conn.end();
            res.send(rows);
        } catch (err) {
            console.log(err)
            conn.end();
            res.send({ success: false, err })
        }
    }

    result();
}),

router.post('/createComment', (req, res) => {
    const result = async () => {
        const conn = await pool.getConnection();

        try {
            const [rows, fields] = await conn.query(Query.insertComment(req.body));

            conn.end();
            res.send(rows[0]);
        } catch (err) {
            console.log(err)
            conn.end();
            res.send({ success: false, err })
        }

    }

    result();
})

router.post('/deleteComment', (req, res) => {
    const result = async () => {
        const conn = await pool.getConnection();

        try {
            const result = await conn.query(Query.deleteComment(req.body));

            conn.release();
            res.send({ success: true });
        } catch (err) {
            console.log(err)
            conn.end();
            res.send({ success: false, err })
        }
    }

    result();
})

module.exports = router;