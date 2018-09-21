var express = require('express');
const mongoose = require('mongoose');

var router = express.Router();
const Event = require('../models/EventSchema');



router.get('/', (req, res, next) => {
    Event.find().exec()
        .then(docs => {
            const response = {
                count: docs.length,
                events: docs.map(doc => {
                    return {
                        email: doc.email,
                        event_name: doc.event_name,
                        event_relevance: doc.event_relevance,
                        event_count: doc.event_count,
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
    Event.find({ email: email }).exec()
        .then(docs => {
            const response = {
                count: docs.length,
                events: docs.map(doc => {
                    return {
                        email: doc.email,
                        event_name: doc.event_name,
                        event_relevance: doc.event_relevance,
                        event_count: doc.event_count,
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
    console.log(req.body.event_count);
    const event = new Event({
        _id: new mongoose.Types.ObjectId(),
        email: req.body.email,
        event_name: req.body.event_name,
        event_relevance: req.body.event_relevance,
        event_count:req.body.event_count
    });

    event
        .save()
        .then(result => {
            console.log(result);
            res.status(200).json({
                message: "Event Created",
                User: {
                    email: result.email,
                    event_name: result.event_name,
                    event_count:result.event_count,
                    _id: result._id,
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
