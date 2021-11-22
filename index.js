const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/dissectKey', (req, res) => {
    var items = req.query.key.split('');
    var list1 = items.filter(item => /[A-Za-z]/.test(item));
    var list2 = items.filter(item => /[6-9]/.test(item));
    
    res.json({
        list1,
        list2 
    });
});

app.listen(port, () => {
  console.log(`Listening at port: ${port}`);
});