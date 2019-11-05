const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const multer = require('multer');
const path = require('path');
const masterrouter = require('./router/masterrouter');
const salesrouter  = require('./router/salesrouter');
const productionrouter = require('./router/productionrouter');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

const DIR = './upload';
let storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, DIR);
    },
    filename: (req, file, cb) => {
      cb(null, file.fieldname + '-' + Date.now() + '.' + path.extname(file.originalname));
    }
});

let upload = multer({storage: storage});

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "get, post, delete");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  app.get('/api', function (req, res) {
    res.end('file catcher example');
  });
   
  app.post('/api/upload',upload.single('photo'), function (req, res) {
      if (!req.file) {
          console.log("No file received");
          return res.send({
            success: false
          });
      
        } else {
          console.log('file received');
          console.log(req.file)
          return res.send(req.file.filename)
        }
  });
app.use('',masterrouter);
app.use('',salesrouter);
app.use('',productionrouter);
app.get('/',function(req,res){
    // res.end('file catcher examaple');
    res.sendFile(__dirname + '/index.html');
});
app.get('/report',function(req,res){
  res.sendFile(__dirname + '/report.html');
});
app.get('/download',function(req,res){
  res.sendFile(__dirname + '/download.html');
})
app.listen(3000,()=>{
    console.log('Server is running on port no. 3000');
});

exports.app = app;