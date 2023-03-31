const express=require('express')
const controller=require('../../../controllers/admin/flights.controller')
const router=express.Router();
const auth=require('../../../middlewares/Admin/auth')

router.route('/allflights').get( controller.allflights);
router.route('/addflight').post(controller.addflight)
router.route('/updateflight').put(controller.updateflight)
router.route('/deleteflight').delete(controller.deleteflight)
router.route('/searchflight').get(controller.searchflight)

module.exports=router
