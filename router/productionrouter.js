const express = require('express');
const productionController = require('../controller/productionController');
const router = express.Router();
const productionControllerObj = new productionController();

router.get('/getPODetailsCompany/:id',productionControllerObj.getPoDetails);
router.get('/getJobWorkDetails/:id',productionControllerObj.getJobWorkDetails);

module.exports = router;