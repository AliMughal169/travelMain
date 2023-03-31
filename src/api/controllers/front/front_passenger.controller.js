
const Passenger=require('../../models/passenger.model')


exports.addPassenger=async(req,res,next)=>{
    try {
        const payload = req.body;
        if (!payload)
        {
            return res.status(200).send({status: false, message: "kindly enter Data for Passenger"})
        }
        console.log(payload)
        let result = await Passenger.create(payload);
        res.status(200).send({status: true, message: "Passenger Added Successfully",result})
    
    } catch (error) {
        res.status(200).send({status: false, message: "Some Error Occured", error})
        next
    }
}

exports.deletePassenger= async (req,res,next)=>{
    const query=req.query
    console.log(query)
    let result = await Passenger.deleteOne(query);
    res.status(200).send({status: true, message: "deleted Ticket Successfully",result})
  }


  exports.searchPassenger=async (req,res,next)=>{
    const query = req.query
    if (!query)
    {
       return res.status(200).send({status: false, message: "Kindly Enter Ticket ID To Find Passenger"})    
    }
    console.log(query)
    const result = await Passenger.find(query);
    res.status(200).send({status: true, message: "All Searched Passenger Fetched Successfully", result})
  }
exports.updatePassenger=async(req,res,next)=>{
  const query=req.query
  const result=await Passenger.updateOne(query)
  res.status(200).send({status:true,message:"Updated Passenger Succesfully",result})
}