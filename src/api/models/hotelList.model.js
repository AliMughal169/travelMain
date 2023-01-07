const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
    hotelName: { type: String, required: true },
    address: { type: String, requires: true },
    totalRooms: { type: Number, require: true },
    stars: { type: Number, require: true },
    isFull: { type: Boolean, required: true }
});
module.exports = mongoose.model("hotels", hotelSchema)
