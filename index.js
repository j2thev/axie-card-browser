const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const classicCards = require('./classic-cards');
const originCards = require('./origin-cards');

app.get('/classic-cards', (req, res) => {
    res.json(classicCards);
});

app.get('/origin-cards', (req, res) => {
    res.json(originCards);
});

app.listen(port, () => {
  console.log(`Listening at port: ${port}`);
});
