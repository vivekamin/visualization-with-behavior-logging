var express = require('express');
const mongoose = require('mongoose');

var router = express.Router();
const User = require('../models/User');

/* GET users listing. */
router.get('/', function(req, res, next) {
  User.find()
        .select('email password _id')
        .exec()
        .then( docs => {
            const response = {
                count: docs.length,
                users: docs.map( doc => {
                    return {
                        email: doc.email,
                        password: doc.password,
                        _id: doc._id,    
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

router.post('/', (req, res, next) => {

  const user = new User({
      _id: new mongoose.Types.ObjectId(),
      email: req.body.email,
      password: req.body.password
  });

  user
      .save()
      .then( result => {
          console.log(result);
          res.status(200).json({
              message: "User Created",
              User:{
                  email: result.email,
                  
                  _id: result._id,
              }
          });
          
      }).catch( error => {
          console.log(error);
          res.status(500).json({
              error: error
          });
          
      });

 
});
module.exports = router;
