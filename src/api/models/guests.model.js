const mongoose= require('mongoose');

const guestsSchema = new mongoose.Schema({
firstName:{type: String, required: true},
lastName:{type: String, required: true},
phone:{type: Number, required: true},
age:{type: Number, required: true},
passport:{type: String, required: true}

})
module.exports=mongoose.model('guest', guestsSchema)