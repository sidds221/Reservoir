var express = require('express');
var app     = express();
var port    = process.env.port||8080;
var mongoose= require('mongoose');
var config  = require('./config/database');
var path    = require('path');
mongoose.Promise = global.Promise;

app.use(express.static(__dirname+'/client/dist/'))
mongoose.connect(config.uri,function(err){
    if(err){
        console.log("no connection");
    }
    else{
        console.log("connected  " + config.db);
    }
});

app.get('*',function(req,res){
    res.sendFile(path.join(__dirname+'/client/dist/index.html'))
});
app.listen(port,function(){
    console.log("8080");
});