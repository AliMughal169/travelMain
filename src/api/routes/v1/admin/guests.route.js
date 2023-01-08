const express= require('express');
const controller= require('../../../controllers/admin/guests.controller')
const router = express.Router();

router.route("/guests").get(controller.allGuests)
module.exports=router;