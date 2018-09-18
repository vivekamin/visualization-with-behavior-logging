const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const User = require('../models/User');

const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'DB15AB53A15425F2C298ED2D3593A'; //normally store this in process.env.secret

module.exports = new JwtStrategy(opts, (jwt_payload, done) => {
    console.log("checking");
    User.findOne({email:jwt_payload.email }).exec()
        .then( doc => {
            if(doc){
                console.log("Authenticated");
                return done(null, true);
            }
            else {
                console.log("Un-Authenticated");
                return done(null, false);
            }

        })
        .catch( err => {
            console.log(err);
            return done(null, false);
        });


});