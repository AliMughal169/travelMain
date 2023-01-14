const express=require('express')
const controller=require('../../../controllers/front/front_ticket.controller')
const router=express.Router()

router.route('/deleteticket').delete(controller.deleteticket)
router.route('/updateticket').put(controller.updateticket)
router.route('/searchticket').get(controller.searchticket)
module.exports=router