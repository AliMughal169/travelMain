const mongoose=require('mongoose')

const passengerSchema=new mongoose.Schema({
    firstName:{type:String, required:true},
    lastName:{type:String, required:true},
    passportNumber:{type:String, required:true},
    passportExpiry:{type:Date, required:true},
    nationality:{type:String, required:true},
    gender:{type:String, required:true},
    age:{type:Number, required:true},
})

module.exports=mongoose.model("Passenger",passengerSchema)