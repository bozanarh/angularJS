# My nodeJS server simulator

Use this to simulate server response back to the client

### Requirements
- installed nodeJS

### Set up
- install dependecies by running:
 npm install

### Run it
 node app.js
- it will listen on port# 7001
- open broswer and point it to: localhost:7001
  You should see HelloWorld jason's msg

### Expand it 

#### GET call
 - as an example see hello.js
 - if you want to return different kind of data:
    - add new file, following the structure
    - add require in the app.js 
    - bind that to new path you will provide
 - test from curl: 
    - _curl -H Content-Type:application/json -H Accept:application/json  -X GET  http://localhost:7001/_

### POST call
 - test from curl:
    - _curl -d '[{"a":"1"}, {"b":"2"}, {"c":"3"}]' -H "Content-Type: application/json" -X POST http://127.0.0.1:7001/_

### PUT call
 - test from curl:
    - _curl -d '[{"a":"1"}, {"b":"2"}, {"c":"3"}]' -H "Content-Type: application/json" -X PUT http://127.0.0.1:7001/_ 


