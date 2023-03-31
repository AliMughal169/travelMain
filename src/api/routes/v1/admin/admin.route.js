const express=require('express')
const controller=require('../../../controllers/admin/admin.controller')
const router=express.Router()
const auth=require('../../../middlewares/Admin/auth')

router.route('/login').get(controller.login)
router.route('/varifyadmin').get(controller.verifyAdmin)

module.exports=router