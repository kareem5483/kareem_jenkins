const express = require('express');
const app = express();

const port = process.env.port || 8000;

app.get('/', (req, res) => {
    res.send('hello from the home page');
});

app.get('/products', (req, res) => {
    res.send([
        {
            id: '201',
            name: 'apple'
        },
        {
            id: '202',
            name: 'pineapple'
        }
    ])
});

app.listen(port, () => {
    console.log(`listning at port number ${port}`);
});