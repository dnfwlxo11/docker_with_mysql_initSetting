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

        const [rows, fields] = await conn.query('SELECT * FROM BOARD');

        res.send(rows[0]);
    }

    result();
}),

router.post('/createContent', (req, res) => {
    
})

module.exports = router;