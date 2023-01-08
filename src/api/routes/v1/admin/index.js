const express = require('express')
const settingsRoutes = require('./settings.route')
const contactRoutes = require('./contact.route')
const flightroutes = require('./flights.route')
const ticketroutes = require('./tickets.route')
const passengerRoutes = require('./passenger.route.js')
const hotelListRoutes = require('./hotelList.route')
<<<<<<< HEAD
=======
const bookedHotelRoutes= require('./bookedHotel.route')
const rooms=require("./rooms.route")
const guests=require("./guests.route")

>>>>>>> 50527946c756357fcaaebc7928a3768807e8c6f5
const router = express.Router()

/**
 * GET v1/admin
 */

router.use('/settings', settingsRoutes)
router.use('/contacts', contactRoutes)
router.use('/flights', flightroutes);
router.use('/tickets', ticketroutes)
router.use('/passenger', passengerRoutes)
router.use('/hotelList', hotelListRoutes)
<<<<<<< HEAD
=======
router.use('/hotelBookings', bookedHotelRoutes)
router.use('/rooms', rooms)
router.use('/guests',guests)

>>>>>>> 50527946c756357fcaaebc7928a3768807e8c6f5
module.exports = router

