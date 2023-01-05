const express = require('express')
const settingsRoutes = require('./settings.route')
const contactRoutes = require('./contact.route')
const flightroutes=require('./flights.route')
const ticketroutes=require('./tickets.route')
const passengerRoutes=require('./passenger.route.js')
const router = express.Router()

/**
 * GET v1/admin
 */

router.use('/settings', settingsRoutes)
router.use('/contacts', contactRoutes)
router.use('/flights',flightroutes);
router.use('/tickets',ticketroutes)
router.use('/passenger',passengerRoutes)
module.exports = router
