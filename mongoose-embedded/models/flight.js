var mongoose = require('mongoose');
var Terminal = require('./terminal');

var FlightSchema = new mongoose.Schema( {
  from: String,
  to: String,
  airline: String
});

var Flight = mongoose.model('Flight', FlightSchema);

module.exports = Flight;
