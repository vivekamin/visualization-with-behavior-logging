var express = require('express');
const mongoose = require('mongoose');

var router = express.Router();
const User = require('../models/LoginHistory');

router.get('/', function(req, res, next) {
    User.find({email:req.query.email})
        .select('email login_time logout_time _id')
        .exec()
        .then( docs => {
            const response = {
                count: docs.length,
                users: docs.map( doc => {
                    return {
                        email: doc.email,
                        login_time: doc.login_time, 
                        logout_time: doc.logout_time   
                    }
                })
            };
            //console.log(docs);
            res.status(200).json(response);
            
        })
        .catch( error => {
            console.log(error);
            res.status(500).json({
                error: error
            })
        });
});

module.exports = router;