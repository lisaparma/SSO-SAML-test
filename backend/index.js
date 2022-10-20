var express = require("express");
var session = require('express-session');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

var app = express();

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(session({secret: 'secret', resave: false, saveUninitialized: true,}));

var server = app.listen(4300, function () {
    console.log('Listening on port %d', server.address().port)
});

// Configure SAML
require('./src/passport')(app);

// Configure routes
require('./src/routes')(app);