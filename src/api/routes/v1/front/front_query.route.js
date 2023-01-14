const express=require('express')
const controller=require('../../../controllers/front/front_queries.controller')
const router =express.Router();

router.route('/addquery').get(controller.addQueries)
module.exports=router;