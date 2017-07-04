const express = require('express');
const router = express.Router();


//Register
router.get('/register', (req,res,next) => {
    res.send('REGISTER');
});

//Authenticate
router.post('/Authenticate', (req,res,next) => {
    res.send('Authenticate');
});
//Validate
router.get('/Validate', (req,res,next) => {
    res.send('Validate');
});
//Profile
router.get('/Profile', (req,res,next) => {
    res.send('Profile');
});



module.exports = router;