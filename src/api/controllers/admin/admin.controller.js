const admin=require('../../models/admin.model')
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
exports.login=async(req,res,next)=>{
    try {
        var query=req.query
        var result=await admin.findOne({email:query.email})
        if (result.password==query.password)
        {
            
            let jwtSecretKey = process.env.JWT_SECRET_KEY;
            let data = {
                time: Date(),
                userId: result._id,
            }
            const token = jwt.sign(data, jwtSecretKey,{expiresIn:"1h"});
        
            var setToken=await admin.updateOne({_id:result._id},{jwtToken:token})
            res.status(200).send({status:true,message:"Admin Found",result})
        }
        else 
        {
            res.status(200).send({status:true,message:"No Admin Found",result})
        }
    } catch (error) {
        res.status(400).send({status:false, message:"Some Error occured",error})
    }
}
exports.verifyAdmin=async(req,res,next)=>{
    // var query=req.query
    // var adminData=await admin.findOne({_id:query._id})
    const token = req.headers.authorization.split(' ')[1]; 
    //Authorization: 'Bearer TOKEN'
    if(!token)
    {
        res.status(200).json({success:false, message: "Error!Token was not provided."});
    }
    //Decoding the token
    const decodedToken = jwt.verify(token,process.env.JWT_SECRET_KEY );
    res.status(200).json({success:true, data:{userId:decodedToken.userId}});   
}