const mongoose = require('mongoose');

const flightsSchema = new mongoose.Schema({
  flightNumber: {type: String,required: true},
  airlineName: {type: String,required: true},
  departureCity:{type: String,required: true},
  departureDateTime:{type: Date,required: true},
  arrivalCity:{type: String,required: true},
  arrivalDateTime:{type: Date,required: true},
  totalCapacity:{type: Number,required: true, default:0},
  businessCapacity:{type: Number,required: true , default:0},
  economyCapacity:{type: Number,required: true , default:0},
  businessPrice:{type: Number,required: true , default:0},
  economyPrice:{type: Number,required: true , default:0},
  isFull:{type: Boolean,required: true},
});
module.exports =mongoose.model("Flight",flightsSchema)

