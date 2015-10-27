var express = require('express');
var msg1 = require("./data1.js");
var msg2 = require("./data2.js");
var bodyParser = require('body-parser');
var port = 7001;

var app = express();
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


//For GET calls we are going to send back data we keep in data1
app.get('/', function (req, res) {
	console.log("GET /");
    res.header('Access-Control-Allow-Headers' , 'Content-Type' );
    res.header('Access-Control-Allow-Methods' , 'GET' );
    res.header('Access-Control-Allow-Origin' , '*' );
    res.json(msg1.getData1());
});

app.get('/api/v1/models', function (req, res) {
	console.log("GET /api/v1/models/");
    res.header('Access-Control-Allow-Headers' , 'Content-Type' );
    res.header('Access-Control-Allow-Methods' , 'GET' );
    res.header('Access-Control-Allow-Origin' , '*' );
    res.json(msg2.getData());
});


//POST CALL, we sand back whatever we get
app.post('/', function (req, res) {
	console.log("POST /");
	console.dir(req.body);
    res.header('Access-Control-Allow-Headers' , 'Content-Type' );
    res.header('Access-Control-Allow-Methods' , 'POST' );
    res.header('Access-Control-Allow-Origin' , '*' );
	res.send(req.body);
});

//OPTIONS CALL, we sand back whatever we get
app.options('/api/v1/models', function (req, res) {
	console.log("OPTIONS /api/v1/models");
    res.header('Access-Control-Allow-Headers' , 'Content-Type' );
    res.header('Access-Control-Allow-Methods' , 'POST, GET, OPTIONS, PUT' );
    res.header('Access-Control-Allow-Origin' , '*' );
	console.dir(req.body);
	res.send(req.body);
});

//POST CALL, we sand back whatever we get
app.post('/api/v1/models', function (req, res) {
	console.log("POST /api/v1/models");
    res.header('Access-Control-Allow-Headers' , 'Content-Type' );
    res.header('Access-Control-Allow-Methods' , 'POST, GET, OPTIONS, PUT' );
    res.header('Access-Control-Allow-Origin' , '*' );
	console.dir(req.body);
	res.send(req.body);
});

//PUT CALL, we sand back whatever we get
app.put('/api/v1/models', function (req, res) {
	console.log("PUT /api/v1/models");
    res.header('Access-Control-Allow-Headers' , 'Content-Type' );
    res.header('Access-Control-Allow-Methods' , 'POST, GET, OPTIONS, PUT' );
    res.header('Access-Control-Allow-Origin' , '*' );
	console.dir(req.body);
	res.send(req.body);
});

//PUT call, get obj, do some modifications and send it back
app.put('/', function (req, res) {
	console.log("PUT /");
    res.header('Access-Control-Allow-Headers' , 'Content-Type' );
    res.header('Access-Control-Allow-Methods' , 'PUT' );
    res.header('Access-Control-Allow-Origin' , '*' );
	var obj = req.body;
	console.dir(obj);
	console.dir(obj[0].a);
	obj[0].a = 'Hi';
	res.send(obj);
});


console.log("Listening on port: " + port);
app.listen(port);


