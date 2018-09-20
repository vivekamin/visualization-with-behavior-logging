var express = require('express');
const mongoose = require('mongoose');

var router = express.Router();
const Tag = require('../models/TagSchema');



router.get('/', (req, res, next) => {
    Tag.find().exec()
        .then(docs => {
            const response = {
                count: docs.length,
                tags: docs.map(doc => {
                    return {
                        email: doc.email,
                        tag_name: doc.tag_name,
                        _id: doc._id,
                    }
                })
            };
            //console.log(docs);
            res.status(200).json(response);

        })
        .catch(err => {
            res.status(500).json(err)
            console.log(err);
        });
});



router.get('/:emailId', (req, res, next) => {
    const email = req.params.emailId;
    console.log(email)
    Tag.find({ email: email }).exec()
        .then(docs => {
            const response = {
                count: docs.length,
                tags: docs.map(doc => {
                    return {
                        email: doc.email,
                        tag_name: doc.tag_name,
                        _id: doc._id,
                    }
                })
            };
            //console.log(docs);
            res.status(200).json(response);

        })
        .catch(err => {
            res.status(500).json(err)
            console.log(err);
        });
});



router.post('/', (req, res, next) => {

    const tag = new Tag({
        _id: new mongoose.Types.ObjectId(),
        email: req.body.email,
        tag_name: req.body.tag_name
    });
    tag
        .save()
        .then(doc => {
            console.log(doc);
            res.status(200).json({
                message: "Tag Created",
                User: {
                    email: doc.email,
                    tag_name: doc.tag_name,
                    _id: doc._id,
                }
            });

        }).catch(error => {
            console.log(error);
            res.status(500).json({
                error: error
            });

        });


});
module.exports = router;
