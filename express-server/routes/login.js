var express = require('express');
const mongoose = require('mongoose');

var router = express.Router();
const User = require('../models/User');
const LoginHistory = require('../models/LoginHistory');

const jwt = require("jsonwebtoken");

router.get('/', function(req, res, next) {
    res.send('Hi there , I am login route!');
});

router.post('/', function(req,res,next){
    
    User.findOne({email:req.body.email, password:req.body.password }).exec()
        .then( doc => {
            if(doc){
                const loginHistory = new LoginHistory({
                    _id: new mongoose.Types.ObjectId(),
                    email: req.body.email,
                    login_time: Date.now()
                });
                loginHistory.save()
                            .then( result => {
                                console.log(result + " Login History Created");
                                const opts = {}
                                console.log(doc);
                                const email = doc.email;
                                opts.expiresIn = 12000;  //token expires in 200 min
                                const secret = "DB15AB53A15425F2C298ED2D3593A" //normally stored in process.env.secret
                                const token = jwt.sign({ email }, secret, opts);
                                return res.status(200).json({
                                    message: "Auth Passed",
                                    token
                                });
                                
                            })
                            .catch( error => {
                                console.log(error);
                            });
                

                



            }
            else {
                res.status(400).json({
                    message: "No valid Entry Found"
                })
            }

        })
        .catch( err => {
            console.log(err);
            res.status(500).json(err)
        });


});

module.exports = router;