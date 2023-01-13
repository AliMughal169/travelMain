
const bookedHotels = require('../../models/bookedHotel.model')
const rooms = require('../../models/rooms.model')

// exports.deleteBookedHotel = async (req, res, next) => {
//   const query = req.query
//   console.log(query)
//   let result = await bookedHotels.deleteOne(query);
//   res.status(200).send({ status: true, message: "deleted booked Hotel Successfully", result })
// }

exports.allBookedHotel = async (req, res, next) => {
  const query = req.query
  const result = await bookedHotels.find(query)
  // console.log("query === ", query)
  console.log("result === ", result)
  res.status(200).send({ status: true, message: "All booked Hotels Fetched Successfully", result })
  

}

// exports.updateBookedHotel = async (req, res, next) => {
//   const query = req.query
//   const result = await bookedHotels.updateOne(query)
//   res.status(200).send({ status: true, message: "Updated bookedHotel Succesfully", result })
// }