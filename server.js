const express = require('express');
const bodyParser = require('body-parser');

const path = require('path');
const masterrouter = require('./router/masterrouter');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

const DIR = './upload';
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "get, post, delete");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.use('',masterrouter);
app.get('/',function(req,res){
    res.end('file catcher examaple');
})
app.listen(3000,()=>{
    console.log('Server is running on port no. 3000');
});

exports.app = app;