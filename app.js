var express = require('express');
var http = require('http');
var https = require('https');
var bodyParser = require('body-parser');

var app = express();


app.use(express.static(__dirname + '/static'));



app.listen(4444, function(){
	console.log('server is runing , prot is 4444');
})