const express=require('express')
const controller=require('../../../controllers/front/front_passenger.controller')
const router=express.Router();

router.route('/add').get( controller.addPassenger);
router.route('/search').get(controller.searchPassenger)
router.route('/update').get(controller.updatePassenger)
router.route('/delete').get(controller.deletePassenger)

module.exports=router
