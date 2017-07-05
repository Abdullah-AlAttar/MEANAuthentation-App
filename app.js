const express = require('express'),
    path = require('path'),
    bodyParser = require("body-parser"),
    cors = require("cors"),
    passport = require("passport"),
    mongoose = require("mongoose"),
    config=require('./config/database'),
    app = express();

mongoose.connect(config.database);
mongoose.connection.on('connected', () => {
    console.log('Connected to database'+ config.database);
});
mongoose.connection.on('error', (err) => {
    console.log('error connecting to  database'+ config.database+"Error: "+err);
});
const port = 3000;
const users = require('./routes/users');
app.use(cors());
app.use(bodyParser.json());
app.use('/users', users);
// passport stuff
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));

//Index Route
app.get('/', (req, res) => {
    
    res.send('Why are you here go away please');
});

//Starting Server
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
    
