const express = require('express');
const masterController = require('../controller/masterController');
const router = express.Router();
const masterControllerObj = new masterController();

router.post('/insertUnit',masterControllerObj.getLoginDetails);
module.exports = router;
