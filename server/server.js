const express = require('express');
const app = express();

const PORT = 3000;

app.use(express.static('public'));

app.use('/api/board', require('./route/board'));
app.use('/api/comment', require('./route/comment'));

app.get('/', (req, res) => {
    res.send({success: true});
})

app.listen(PORT, () => {
    console.log(`Server Start, port is ${PORT}`);
})