
const Flight=require('../../models/flight.model')

exports.allflights= async (req,res,next)=>{
    const result = await Flight.find();
    res.status(200).send({status: true, message: "All Flights Fetched Successfully", result})
}

exports.searchflight= async (req,res,next)=>{
  const query = req.query
  const result = await Flight.find(query);
  res.status(200).send({status: true, message: "Searched Flights Fetched Successfully", result})
}
