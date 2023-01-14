
const Ticket=require('../../models/ticket.model')

exports.deleteticket= async (req,res,next)=>{
    const query=req.query
    console.log(query)
    let result = await Ticket.deleteOne(query);
    res.status(200).send({status: true, message: "deleted Ticket Successfully",result})
  }


  exports.searchticket=async (req,res,next)=>{
    const query = req.query
    if (!query)
    {
       return res.status(200).send({status: false, message: "Kindly Enter User ID To Find Tickets"})    
    }
    console.log(query)
    const result = await Ticket.find(query);
    res.status(200).send({status: true, message: "All Searched Tickets Fetched Successfully", result})
  }
exports.updateticket=async(req,res,next)=>{
  const query=req.query
  const result=await Ticket.updateOne(query)
  res.status(200).send({status:true,message:"Updated Ticket Succesfully",result})
}