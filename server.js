var express = require('express');

var path = require('path');

var app = express();
var bodyParser = require('body-parser');
//this is for regular post requests
app.use(bodyParser.urlencoded());
//this is for post requests that want json back
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, './client')));
require('./config/routes.js')(app);
var server = app.listen(process.env.PORT || 8000, function(){
	console.log('Website on: 8000');
});