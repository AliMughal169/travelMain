const admin=require('../../models/admin.model')
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const exludedRoutes = ["/login"];



exports.authenticate=async (req,res,next)=>{
    if (req.url.includes("login"))
    {
        return next()
    }
    const token = req.headers.authorization.split(' ')[1]; 
    //Authorization: 'Bearer TOKEN'
    if(!token)
    {
        return res.status(200).send({success:false, message: "UnAuthorized"});
    }
    //Decoding the token
    console.log("token Recieved",token)
    const decodedToken = jwt.verify(token,process.env.JWT_SECRET_KEY );
    console.log(decodedToken.adminId)
    const response=await admin.findOne({_id:decodedToken.adminId})
    console.log(response)
    if (response.jwtToken==token)
    {
        console.log("token Matched")
        
        
        next()
    }
    else
    {
        console.log("Not token matched")
    
        res.status(200).json({success:false, message: "UnAuthorized"});
    }
}