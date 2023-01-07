const express=require("express")
const controller= require("../../../controllers/admin/rooms.controller")
const router= express.Router();

router.route("/allrooms").get(controller.getroom)

module.exports=router;
