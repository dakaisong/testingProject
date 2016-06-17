/**
 * Created by AlphTech-Don on 6/14/2016.
 * 问题：登录首页后，ANGULAR路由无法显示页面
 * 已将路由交个angular
 * 关联文件包括index。html在public views里
 * controller。js 在public app controller里
 * 
 */
var express = require('express');
var bodyParser = require('body-parser');
var morgan=require('morgan');

var mongoose= require('mongoose');
var config=require('./config');
var ejs = require('ejs');

var app = express();

//use mongoose and coonfig document to connect online mlab database
mongoose.connect(config.database,function (err) {
    if(err){
        console.log(err);
    }else {
        console.log('Connect to database');
    }
})

//set the body parse is true then that we can able to get all the thing from html otherwise
//it only accept String and json
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev'));

// use the view in public

app.use(express.static(__dirname + '/public/app'));

//function use to call api don't miss (app,express)
var api=require('./app/routes/api')(app,express);
app.use('/api',api);

/*
app.get('/',function (req,res) {
    res.sendFile(__dirname + '/public/app/views/index.html');

});

*/

app.use(function (req,res) {
    console.log(req.path);
    if(req.path.indexOf('/api')>=0){
        res.send('server text')
    }else{
        res.redirect(__dirname + '/public/app/views/index.html')
    }
});
//give routing to angular.js
app.listen(config.port,function (err) {
    if(err){
        console.log(err);
    }else {
        console.log("Listening on port 3000");
    }
});

