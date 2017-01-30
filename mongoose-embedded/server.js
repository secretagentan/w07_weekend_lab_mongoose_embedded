var express = require('express');
var router = express.Router();
var logger = require('morgan');
var bodyParser = require('body-parser');
var Promise = require('mpromise');
// REQUIRE & CONNECT MONGOOSE
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongoose-embedded');
// var Schema = mongoose.Schema;

// REQUIRE MODEL FILES
var Airport = require('./models/airport');
var Terminal = require('./models/terminal');
var Flight = require('./models/flight');
var Passenger = require('./models/passenger')

var app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( { extended: false } ));

var flight1 = new Flight( {
  from: "CDG France",
  to: "JFK New-York, USA",
  airline: "American Airlines"
});

flight1.save( function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log('*** flight 1 saved ***')
  }
});

var flight2 = new Flight( {
  from: "Heathrow UK",
  to: "JFK New-York, USA",
  airline: "British Airways"
})

flight2.save( function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log('*** flight 2 saved ***')
  }
});

var airport1 = new Airport( {
  name: "JFK",
  country: "USA",
  opened: 1990
});

airport1.save( function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log('*** airport 1 saved ***')
  }
});
