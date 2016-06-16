/**
 * Created by AlphTech-Don on 6/14/2016.
 */
// this is an api function
// use is to control your data

var User = require('../models/user');
var jwt = require('jwt-simple');
var config = require('../../config');



var secretKey=config.secretKey;


module.exports =function (app,express) {

    var api = express.Router();

    //use a post function to save a user's information
    api.post('/signup',function (req,res) {
       
        console.log(req.body)
        var user = new User({
           name : req.body.name,
           username:req.body.username,
           password:req.body.password

       })

        user.save(function (err) {
            if (err){
                res.send(err);
            }else {
                res.json({message:'User has been created!!'});
                console.log('user is created');
            }
        })
    });

    
    
    api.get('/signup',function (req,res) {
        var path= require('path')
        res.sendFile(path.resolve('public/app/views/signup.html'));
    })
    
    
    
    api.get('/loginPage',function (req,res) {
        console.log("user require a login page");
        var path= require('path')
        res.sendFile(path.resolve('public/app/views/loginPage.html'));

    })
    

    //use find function to read all the data from database.
    
  
    api.post('/login',function (req,res) {

        console.log('come to login');
        console.log(req.body);
        User.findOne({
            username: req.body.username
        }).select('password').exec(function (err,user) {
            if (err) throw err;

            if (!user){
                console.log('no such user');
                res.send({message: "user doesn't exist"});
            }else if (user){
                    console.log("compare password");
                var validPassword = user.comparePassword(req.body.password);
                
                if (!validPassword){
                    res.send({message: "Invalid Password"});
                }else {
                    //token
                    /*
                    console.log(user._id);
                    User.findOne({_id:user._id},function (err,result) {
                        if (err){
                            console.log(err)
                        }else {
                            console.log(result);
                            res.json(result);
                        }
                    })
                    */
                    var token=jwt.encode(user,secretKey);
                  
                    res.json({
                        success: true,
                        message:"successfully login!",
                        token : token
                    });
                    
                }
            }
        });

    });


    
    
    api.use(function (req,res,next) {
        
        console.log("Some one just get the app");

        var token = req.body;
        console.log(token);

        if (token){
            console.log('find user')
        User.find(function (err,users) {
            if (err){
                res.send(err);
            }else {
                console.log("this is user info")
                res.json(users);
                next();
            }
        });
        }else {
            console.log('login first');
        }
        
       
    });

    api.get('/',function (req,res) {
        console.log("get home");
        res.send('you get to home');
       /*
       var path= require('path');
        res.sendFile(path.resolve('public/app/views/home.html'));
        */
    })


//after login will use below function
/*
    api.use(function (req,res,next) {
       console.log("Someone just get the app");

        // var token=req.body.token || req.param('token') || req.headers['x-access-token'];

        if (token){
            jsonwebtoken.verify(token,secretKey,function (err,decoded) {
                if (err){
                    res.status(403).send({success: false,message:"Failed to authenticate user"});
                }else {

                    req.decoded= decoded;
                    next();

                }
            })
        }else {
            res.status(403).send({success: false,message:"No token provided"});
        }

    });

    api.get('/',function (req,res) {
        res.json("hello");
        
    });

    api.route('/')

        .post(function (req,res) {
            var story=new Story({
                creator: req.decoded.id,
                content : req.body.content
            });

          story.save(function (err) {
              if (err){
                  res.send(err);
                  return
              }
              res.json({message:"new story created!"})
          });
        })

        .get(function (req,res) {

    })

    api.get('/me',function (req,res) {
        res.json(req.decoded);
    })
*/


    return api


}