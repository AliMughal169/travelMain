const express=require('express')
const controller=require('../../../controllers/front/front_flight.controller')
const router=express.Router();

router.route('/allflights').get( controller.allflights);
router.route('/searchflight').get(controller.searchflight)

module.exports=router
