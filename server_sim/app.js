var express = require('express');
var msg = require("./data1.js");
var bodyParser = require('body-parser');
var port = 7001;

var app = express();
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


//For GET calls we are going to send back data we keep in data1
app.get('/', function (req, res) {
	console.log("GET /");
    res.json(msg.getData1());
});


//POST CALL, we sand back whatever we get
app.post('/', function (req, res) {
	console.log("POST /");
	console.dir(req.body);
	res.send(req.body);
});

//PUT call, get obj, do some modifications and send it back
app.put('/', function (req, res) {
	console.log("PUT /");
	var obj = req.body;
	console.dir(obj);
	console.dir(obj[0].a);
	obj[0].a = 'Hi';
	res.send(obj);
});


console.log("Listening on port: " + port);
app.listen(port);


