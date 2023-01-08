const rooms= require('../../models/rooms.model');

exports.getroom=async (req,res,next)=>{
    const query = req.query
    const result = await rooms.find(query);
    res.status(200).send({status: true, message: "All booked Hotels Fetched Successfully", result})
}