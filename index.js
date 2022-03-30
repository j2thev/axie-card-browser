const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const classicCards = require('./classic-cards');
const originCards = require('./origin-cards');

app.get('/dissectKey', (req, res) => {
    var items = req.query.key.split('');
    var list1 = items.filter(item => /[A-Za-z]/.test(item));
    var list2 = items.filter(item => /[6-9]/.test(item));
    
    res.json({
        list1,
        list2 
    });
});

app.get('/classic-cards', (req, res) => {
    res.json(classicCards);
});

app.get('/origin-cards', (req, res) => {
    res.json(originCards);
});

app.listen(port, () => {
  console.log(`Listening at port: ${port}`);
});