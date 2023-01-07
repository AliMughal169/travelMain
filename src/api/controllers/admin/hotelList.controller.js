
const hotels = require('../../models/hotelList.model')
// API to get support list

//   exports.get = async (req, res, next) => {
//     try {
//         const hotelList = await hotels.find({}, { __v: 0, createdAt: 0, updatedAt: 0 }).lean(true)
//         if (hotelList)
//             return res.json({ success: true, message: 'hotel List retrieved successfully', hotelList })
//         else
//             return res.json({ success: false, message: "hotel list not found" })
//     } catch (error) {
//         return next(error)
//     }
// }

exports.allHotels = async (req, res, next) => {
    const result = await hotels.find();
    res.status(200).send({ status: true, message: "All Hotels Fetched Successfully", result })
}

// exports.searchflight= async (req,res,next)=>{
// const query = req.query
// const result = await Flight.find(query);
// res.status(200).send({status: true, message: "Searched Flights Fetched Successfully", result})
// }

exports.addHotel = async (req, res, next) => {
    const payload = req.body;
    console.log(payload)
    let result = await hotels.create(payload);
    res.status(200).send({ status: true, message: "Hotel Added Successfully", result })
}

exports.updateHotel = async (req, res, next) => {
    const query = req.query
    const payload = req.body;
    console.log(query)
    let result = await hotels.updateOne(query.payload);
    res.status(200).send({ status: true, message: "Hotel Updated Successfully" })
}

exports.deleteHotel = async (req, res, next) => {
    const query = req.query
    //console.log(query)
    let result = await hotels.deleteOne(query);
    res.status(200).send({ status: true, message: "Hotel deleted Successfully", result })
}

