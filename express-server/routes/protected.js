var express = require('express');
const mongoose = require('mongoose');

var router = express.Router();

router.get('/', function(req, res, next) {
    res.send('Hi there , I am protected!');
});