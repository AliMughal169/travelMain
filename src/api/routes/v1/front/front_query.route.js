const express = require('express')
const controller = require('../../../controllers/front/front_queries.controller')
const router = express.Router();

router.route('/addquery').post(controller.addQueries)
module.exports = router;