var express = require('express');
var session = require('express-session');
var bodyParser=require('body-parser');
var mongoose=require('mongoose');
var pug = require('pug');
var bcrypt = require('bcryptjs');

var app = express();





// ------------------------------
//  listen for requests
// ------------------------------
app.listen(8080, function () {
        console.log('Listening on port 8080...');
});