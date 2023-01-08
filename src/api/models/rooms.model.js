const mongoose= require('mongoose');

const roomsSchema = new mongoose.Schema({
hotelId:{type: mongoose.Schema.Types.ObjectId, required: true},
category:{type: String, required:true},
capacity:{type: Number, required: true},
roomNumber:{type: Number, required:true},
price:{type:Number, required:true},
desc:{type: String, required: true},
isBooked:{type: Boolean , required:true, default:1}

})
module.exports= mongoose.model('room', roomsSchema)
