const express = require('express');
const productionController = require('../controller/productionController');
const router = express.Router();
const productionControllerObj = new productionController();

router.get('/getPODetailsCompany/:id',productionControllerObj.getPoDetails);
router.get('/getJobWorkDetails/:id',productionControllerObj.getJobWorkDetails);
router.post('/SubmitJodWorddata',productionControllerObj.SubmitJodWorddata);
router.get('/getRawMaterialDataList/:id',productionControllerObj.getRawMaterialDataList);
router.post('/GetRawDetailsData',productionControllerObj.GetRawDetailsData);
router.post('/getJobPendingData',productionControllerObj.getJobPendingData);
router.post('/SubmitJobProducation',productionControllerObj.SubmitJobProducation);
module.exports = router;