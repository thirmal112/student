var express = require('express'); 
var app=express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Student = require('./model');
const uri = 'mongodb://localhost:27017/mrus';
mongoose.connect(uri).then(
    () => console.log("db connected sucessfully") 
 ).catch(err => console.log(err))
const host = "127.0.0.1"; 
const port = 3000; 
app.listen(port,host,function(){ 
console.log('Server run on http://'+host+":"+port)
});