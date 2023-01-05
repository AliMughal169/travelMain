const express=require('express')
const controller=require('../../../controllers/admin/tickets.controller')
const router=express.Router()

router.route('/alltickets').get(controller.alltickets)
router.route('/deleteticket').delete(controller.deleteticket)
router.route('/updateticket').put(controller.updateticket)
router.route('/searchticket').get(controller.searchticket)
module.exports=router