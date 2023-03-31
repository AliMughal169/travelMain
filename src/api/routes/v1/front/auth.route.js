const express = require('express');
const controller = require('../../../controllers/front/auth.controller');
const { profileUpload } = require('../../../utils/upload')
const router = express.Router();


router.route('/register').post(controller.register);
router.route('/profile').get(controller.getprofile);

module.exports = router;