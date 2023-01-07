const express = require('express');
const controller = require('../../../controllers/admin/hotelList.controller');
const router = express.Router();

router.route('/allHotels').get(controller.allHotels)
router.route('/deleteHotel').delete(controller.deleteHotel)
router.route('/addHotel').post(controller.addHotel)
router.route('/updateHotel').put(controller.updateHotel)


module.exports = router;