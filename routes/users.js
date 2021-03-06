const express = require('express');
const router = express.Router();
const User = require('../models/user');
const passport = require('passport');
const jwt = require('jsonwebtoken');

//Register
router.post('/register', (req, res, next) => {
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    });
    User.addUser(newUser, (err, user) => {
        if (err) {
            res.json({
                success: false,
                msg: 'Failed to register new user'
            });
        } else {
            res.json({
                success: true,
                msg: 'Successfully  registered new user'
            });
        }
    });
});
//Authenticate
router.post('/Authenticate', (req, res, next) => {
    res.send('Authenticate');
});
//Profile
router.get('/Profile', (req, res, next) => {
    res.send('Profile');
});

module.exports = router;