const express = require('express');
const masterController = require('../controller/masterController');
const router = express.Router();
const masterControllerObj = new masterController();

///////////////////////Unit-master///////////////////////////
router.post('/insertUnit',masterControllerObj.getLoginDetails);
router.get('/getunit',masterControllerObj.getUnitMaster);
router.post('/deleteUnit/:id',masterControllerObj.deleteUnit);
router.post('/update/:id',masterControllerObj.updateUnit);
router.post('/updateData',masterControllerObj.updateData);


//////////////////////shade-master//////////////////////////
router.get('/getShade',masterControllerObj.getShadeData);
router.post('/insertShade',masterControllerObj.insertShade);
router.get('/getShadeData/:id',masterControllerObj.getShadeDetails);
router.get('/deleteShade/:id',masterControllerObj.deleteShade);
router.post('/updateShadeData',masterControllerObj.updateShadeData);


/////////////////////**Job-Master**/////////////////////////
router.get('/getJobMaster',masterControllerObj.getJobMasterData);
router.post('/SubmitJob',masterControllerObj.submitMasterData);
router.get('/deleteJob/:id',masterControllerObj.deleteJob);
router.get('/updateDatas/:id',masterControllerObj.updateDatas);
router.post('/updateJobDatas',masterControllerObj.updateJobData);

/////////////////////**Job_Process_Master**//////////////////
router.post('/getJobProcessMaster',masterControllerObj.getJobProcessMaster);
router.post('/SubmitJobData',masterControllerObj.SubmitJobData);
router.get('/deleteJobProcess/:id',masterControllerObj.deleteJobProcess);
router.get('/editJobProcess/:id',masterControllerObj.editJobProcess);
router.post('/updateJobProcess',masterControllerObj.updateJobProcess);


////////////////////**Surface_Treatement_master **//////////////
router.get('/getSurfaceData',masterControllerObj.getSurfaceData);
router.post('/SubmitData',masterControllerObj.submitSurfaceDATA);
router.get('/deleteSurface/:id',masterControllerObj.deleteSurface);
router.get('/editSurface/:id',masterControllerObj.editSurface);
router.post('/UpdateSurface',masterControllerObj.UpdateSurface);
module.exports = router;
