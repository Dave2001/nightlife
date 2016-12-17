var express = require('express');
var session = require('express-session');
var bodyParser=require('body-parser');
var mongoose=require('mongoose');
var pug = require('pug');
var bcrypt = require('bcryptjs');
var Yelp = require('yelp');

require('dotenv').config();

console.log("CONSUMER_KEY: " + process.env.CONSUMER_KEY);

var app = express();

var yelp = new Yelp({
  consumer_key: 'consumer-key',
  consumer_secret: 'consumer-secret',
  token: 'token',
  token_secret: 'token-secret',
});

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

mongoose.connect('mongodb://localhost/nightlife');  // connect to the db

var UserSchema = new mongoose.Schema({
  id: ObjectId,
  firstName: String,
  lastName: String,
  email: { type: String, unique: true},
  password: String
});

var User = mongoose.model('User', UserSchema);

app.set('view engine', 'pug');  // use pug as the engine

app.locals.pretty = true;  // dont minify the html source code

app.use('/static',express.static('public'));
//app.use(express.static('public'));

//  run the req through this middleware to make it available via req.body 
app.use(bodyParser.urlencoded({extended: true}));


// See http://www.yelp.com/developers/documentation/v2/search_api
yelp.search({ term: 'food', location: 'Montreal' })
.then(function (data) {
  console.log(data);
})
.catch(function (err) {
  console.error(err);
});


// ------------------------------
//  Render the home page.
// ------------------------------
app.get('/', function(req, res) {
  res.render('index.pug');
});

app.get('/test', function(req, res) {
  console.log(__dirname);
  res.sendFile(__dirname + '/public/test.html');
});

// ------------------------------
//  listen for requests
// ------------------------------
app.listen(8080, function () {
        console.log('Listening on port 8080...');
});