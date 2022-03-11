const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const jeason = require('./card-ability');

app.get('/dissectKey', (req, res) => {
    var items = req.query.key.split('');
    var list1 = items.filter(item => /[A-Za-z]/.test(item));
    var list2 = items.filter(item => /[6-9]/.test(item));
    
    res.json({
        list1,
        list2 
    });
});

app.get('/jeason', (req, res) => {
    res.json(jeason);
});

app.listen(port, () => {
  console.log(`Listening at port: ${port}`);
});