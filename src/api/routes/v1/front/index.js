const express = require('express')
const authRoutes = require('./auth.route')
const flightRoutes = require('./front_flight.route')
const ticketRoutes = require('./front_ticket.route')
const queryRoutes = require('./front_query.route')

const passRoutes = require('./front_pass.route')

const router = express.Router()
const { cpUpload } = require('../../../utils/upload')
/**
 * GET v1/status
 */
router.use('/auth', authRoutes)
router.use('/flights', flightRoutes)
router.use('/tickets', ticketRoutes)
router.use('/query', queryRoutes)
router.use('/passenger', passRoutes)

module.exports = router
