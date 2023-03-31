const express=require('express')
const controller=require('../../../controllers/admin/queries.controller')
const router =express.Router();

router.route('/allqueries').get(controller.allQueries)
router.route('/deleteQuery').delete(controller.removeQuery)
module.exports=router;