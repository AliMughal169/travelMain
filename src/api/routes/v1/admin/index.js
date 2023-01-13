const express = require('express')
const settingsRoutes = require('./settings.route')
const contactRoutes = require('./contact.route')
const flightroutes = require('./flights.route')
const ticketroutes = require('./tickets.route')
const passengerRoutes = require('./passenger.route.js')
const hotelListRoutes = require('./hotelList.route')
const bookedHotelRoutes = require('./bookedHotel.route')
const rooms = require("./rooms.route")
const guests = require("./guests.route")
<<<<<<< HEAD
const query=require("./query.route")
const admin=require('./admin.route')
=======
const query = require("./query.route")
>>>>>>> 1725bc95f452d918f86b9c93d3ec1b8853493ade
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
router.use('/bookedHotels', bookedHotelRoutes)
router.use('/rooms', rooms)
router.use('/guests', guests)
router.use('/queries',query)
router.use('/admin',admin)

module.exports = router

