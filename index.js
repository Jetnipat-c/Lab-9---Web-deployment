var express = require('express');

var app = express();

app.get('/', (req, res) => 
    {
        console.log('Hello world')
        res.send('Hello world') 
    });

app.listen(80);