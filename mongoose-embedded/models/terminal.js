var mongoose = require('mongoose');
var Flight = require('./flight');

var TerminalSchema = new mongoose.Schema({
  name: String,
  flights: [FlightSchema],
  capacity: Number
});

var Terminal = mongoose.model('Terminal', TerminalSchema);

module.exports = Terminal;
