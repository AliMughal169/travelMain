const express=require('express')
const controller=require('../../../controllers/admin/admin.controller')
const router=express.Router()


router.route('/login').get(controller.login)
router.route('/varifyadmin').get(controller.verifyAdmin)

module.exports=router