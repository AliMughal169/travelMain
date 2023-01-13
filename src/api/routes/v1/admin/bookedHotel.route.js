const express = require("express")
const controller = require("../../../controllers/admin/bookedHotel.controller")
const router = express.Router();


router.route("/allBookedHotel").get(controller.allBookedHotel)
// router.route("/updateBookedHotel").put(controller.updateBookedHotel);
// router.route("/deleteBookedHotel").delete(controller.deleteBookedHotel)


module.exports = router;