const jwtStrategy = require('passport-jwt').Strategy;
const extractJwt = require('passport-jwt').ExtractJwt;
const User = require('../models/user');
const config = require('../config/database');
module.exports = function () {
    let options = {};
    options.jwtFromRequest = extractJwt.fromAuthHeader();
    options.secretOrKey = config.secret;
}