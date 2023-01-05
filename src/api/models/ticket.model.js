const mongoose=require('mongoose')
const ticketSchema=new mongoose.Schema({
    flightId:{type:mongoose.Types.ObjectId,required:true},
    userId:{type:mongoose.Types.ObjectId,required:true},
    passengerId:{type:mongoose.Types.ObjectId,required:true},
    seatNumber:{type:Number,required: true},
    purchaseDate:{type:Date,required:true},
    ticketType:{type:String,required:true},
    class:{type:String,required:true},
    maxKg:{type:Number,required:true},
    price:{type:Number,required:true}
})
module.exports=mongoose.model("Ticket",ticketSchema)