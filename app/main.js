const http = require('http');

var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');
var mongoose    = require('mongoose');

var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function(){
    // CONNECTED TO MONGODB SERVER
    console.log("Connected to mongod server");
});

mongoose.connect('mongodb://localhost/mongodb_tutorial');
