const admin=require('../../models/admin.model')
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
exports.login=async(req,res,next)=>{
    try {
        var query=req.query
        console.log("querrry",query)
        var result=await admin.findOne({email:query.email})
        console.log(result)
        if (result.password==query.password)
        {
            console.log("password matched")
            let jwtSecretKey = process.env.JWT_SECRET_KEY;
            let data = {
                time: Date(),
                adminId: result._id,
            }
            const token = jwt.sign(data, jwtSecretKey,{expiresIn:"50m"});
            console.log("generated Token",token)
            var setToken=await admin.updateOne({_id:result._id},{jwtToken:token})
            res.status(200).send({status:true,message:"Admin Found",token,result})
        }
        else 
        {
            res.status(200).send({status:true,message:"No Admin Found",result:false})
        }
    } catch (error) {
        res.status(400).send({status:false, message:"Some Error occured",error})
    }
}
exports.verifyAdmin=async(req,res,next)=>{
    
}