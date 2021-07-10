const express = require('express');
const app = express();
const bodyParser = require('body-parser')

const PORT = 3000;

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/board', require('./route/board'));
app.use('/api/comment', require('./route/comment'));

app.get('/', (req, res) => {
    console.log(req.body)
    res.send({success: true});
})

app.listen(PORT, () => {
    console.log(`Server Start, port is ${PORT}`);
})