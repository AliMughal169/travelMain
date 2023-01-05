
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

exports.addflight=async (req,res,next)=>{
    const payload = req.body;
    
    console.log(payload)
    // const result = await dbo.collection("users").insertOne(payload);
    let result = await Flight.create(payload);
    res.status(200).send({status: true, message: "Flight Added Successfully",result})
}

exports.updateflight=async (req,res,next)=>{
    const query=req.query
      const payload = req.body;
    console.log(query)
    let result = await Flight.updateOne(query,payload);
    res.status(200).send({status: true, message: "Update Flight Successfully"})
  }

exports.deleteflight=async (req,res,next)=>{
    const query=req.query
    console.log(query)
    let result = await Flight.deleteOne(query);
    res.status(200).send({status: true, message: "deleted Flight Successfully",result})
  }