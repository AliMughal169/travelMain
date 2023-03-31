const user=require('../../models/user.model')
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const exludedRoutes = ["/unauth/login","/unauth/signup","v1/user/hotels","v1/user/flights","v1/user/hotelDetail","v1/user/flightDetail"];



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
    const response=await user.findOne({_id:decodedToken.adminId})
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