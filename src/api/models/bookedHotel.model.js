const mongoose = require('mongoose');

const bookedHotelSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, required: true },
    hotelId: { type: mongoose.Schema.Types.ObjectId, required: true },
    roomId: { type: mongoose.Schema.Types.ObjectId, required: true },
    checkIn: { type: Date, required: true },
    checkOut: { type: Date, required: true },
    guestName: { type: String, required: true },
    bookingDate: { type: Date, required: true }

})

module.exports = mongoose.model('bookedHotel', bookedHotelSchema)