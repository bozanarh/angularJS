var express = require('express');
var msg = require("./data1.js");

var app = express();

app.get('/', function (req, res) {
    //res.json({ message: 'hooray! welcome to our api!' });
    res.json(msg.getData1());
});

//app.listen(process.env.PORT || 8080);
app.listen(7001);
