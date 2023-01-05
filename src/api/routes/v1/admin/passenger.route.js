const express=require('express')
const controller=require('../../../controllers/admin/passenger.controller')
const router=express.Router();

router.route('/findpassenger').get(controller.allpassengers)
module.exports=router