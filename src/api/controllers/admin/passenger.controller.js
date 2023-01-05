
const Passenger=require('../../models/passenger.model')

exports.allpassengers=async(req,res,next)=>{
    
    const result = await Passenger.find();
    console.log(result)
    res.status(200).send({status: true, message: "Required passenger Fetched Successfully", result})
  
}