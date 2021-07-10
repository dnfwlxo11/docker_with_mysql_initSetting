const express = require('express')
const router = express.Router();
const mysql = require('mysql2/promise');
const Query = require('./queries/boardQuery')


const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: 13000,
    database: 'boards'
}

const pool = mysql.createPool(dbConfig);

router.get('/getContents', (req, res) => {
    const result = async () => {
        const conn = await pool.getConnection();

        const [rows, fields] = await conn.query(Query.selectContents());

        conn.release();
        res.send(rows[0]);
    }

    result();
}),

router.post('/createContent', (req, res) => {
    const result = async () => {
        const conn = await pool.getConnection();

        const [rows, fields] = await conn.query(Query.insertContent(req.body));

        conn.release();
        res.send(rows[0]);
    }

    result();
})

router.post('/deleteContent', (req, res) => {
    const result = async () => {
        const conn = await pool.getConnection();

        try {
            const result = await conn.query(Query.deleteContent(req.body));

            conn.release();
            res.send({ success: true });
        } catch (err) {
            console.log(err)
            conn.release();
            res.send({ success: false, err })
        }
    }

    result();
})

module.exports = router;