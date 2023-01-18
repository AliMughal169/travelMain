
const Flight=require('../../models/flight.model')
 const moment=require('moment')
exports.allflights= async (req,res,next)=>{
    const result = await Flight.find();
    res.status(200).send({status: true, message: "All Flights Fetched Successfully", result})
}

exports.searchflight= async (req,res,next)=>{
  const query = req.query
  const result = await Flight.find({departureCity: query.departureCity,arrivalCity: query.arrivalCity,isFull:false});
  
  if (result.length>0)
  {
    var final_res=[]
    for (const key in result) {
      if(moment(result[key].departureDateTime).format('YYYY-MM-DD')==query.departureDate)
      {
        final_res.push(result[key])
      }
      
    }
    if (final_res.length>0)
      {
        return res.status(200).send({status: true, message: "Searched Flights Fetched Successfully", final_res})
      }
    
  }
  
    res.status(200).send({status: false, message: "No Such Flight Found"})
  
  
}
