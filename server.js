var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgon = require('morgan');
var path = require('path');

app.use(function(req,res,next){
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Method','GET,POST');
    res.setHeader('Access-Control-Allow-Headers','X-Requested-With,content-type, \
      Authorization');
    next();
});
app.use(morgon('dev'));
// app.use('/',function(req,res,next){
//     res.send('manifest.json',{root:path.join(__dirname,'./newFirebase')});
//     next();
// });
app.use('/',express.static(__dirname+'/newFirebase'));
app.use(bodyParser.json());
//app.use('/',express.static(__dirname,'./newFirebase/manifest.json'));
app.get('/',function (req,res) {
    res.sendFile('index.html',{root:path.join(__dirname,'./newFirebase')});
});
app.listen(4000,function () {
   console.log('listening on port 4000');
});