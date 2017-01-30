var mongoose = require('mongoose');
var Terminal = require('./terminal');

var AirportSchema = new mongoose.Schema( {
  name: String,
  country: String,
  terminals: [TerminalSchema],
  opened: Date
});

var Airport = mongoose.model('Airport', AirportSchema);

module.exports = Airport;
