const express = require('express');
const salesController = require('../controller/salesController');
const router = express.Router();
const salesControllerObj = new salesController();

///////////////////////////////////Party_Master_rounting///////////////////////////////
router.post('/submitPartyData',salesControllerObj.submitPartyData);
router.get('/getPartyData',salesControllerObj.getPartyData);
router.get('/editPartyData/:id',salesControllerObj.editPartyData);
router.get('/deletePartyData/:id',salesControllerObj.deletePartyData);

//////////////////////////////////Quotation_Master_Rounting////////////////////////////

router.get('/getQuotationData',salesControllerObj.getQuotationData);
router.get('/getMaterailData',salesControllerObj.getMaterailData);
router.post('/submitQutationData',salesControllerObj.submitQutationData);


////////////////////////////////Order-Book-Master//////////////////////////////////////

router.get('/getPOdetails',salesControllerObj.getPoIdDetails)
module.exports = router;