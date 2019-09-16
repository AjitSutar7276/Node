const express = require('express');
const masterController = require('../controller/masterController');
const router = express.Router();
const masterControllerObj = new masterController();

router.post('/insertUnit',masterControllerObj.getLoginDetails);
router.get('/getunit',masterControllerObj.getUnitMaster);
router.post('/deleteUnit/:id',masterControllerObj.deleteUnit);
router.post('/update/:id',masterControllerObj.updateUnit);
router.post('/updateData',masterControllerObj.updateData);
module.exports = router;
