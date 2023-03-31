const guests = require("../../models/guests.model")

exports.allGuests = async (req, res, next) => {
    const query = req.query
    const result = await guests.find(query);
    res.status(200).send({ status: true, message: "All booked Hotels Fetched Successfully", result })
}
exports.deleteGuest = async (req, res, next) => {
    const query = req.query
    //console.log(query)
    let result = await guests.deleteOne(query);
    res.status(200).send({ status: true, message: "Hotel deleted Successfully", result })
}

