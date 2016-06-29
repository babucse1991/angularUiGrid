var express = require('express')
  , app = express();
var bodyParser = require('body-parser');
var http = require('http');
var server = http.createServer(app);
var path = require('path');
var session = require('express-session');
	
var port = process.env.PORT || 8080; 

server.listen(port);

app.set('views', __dirname + '/public');

app.use(express.static(__dirname + '/public')); 

exports = module.exports = app;     

console.log('http://localhost:'+port);
