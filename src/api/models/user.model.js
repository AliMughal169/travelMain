const mongoose=require('mongoose')


const userSchema=mongoose.Schema({
    userName:{type:String , required:true,default:""},
    email:{type:String , required:true,default:""},
    address:{type:String , required:true,default:""},
    phone:{type:String , required:true,default:""},
    password:{type:String , required:true,default:""},
    jwtToken:{type:String ,default:""},
})

module.exports=mongoose.model("user",userSchema)