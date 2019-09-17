const masterDatabase = require('../Database/masterDatabase');
const app = require('../server');
class masterController {

    //////////////////////////////////Unit-Master/////////////////////////////
    /////////////////////////////////////////////////////////////////////////
    async getLoginDetails(req,res)
    {
        // console.log('get data');
        let unit = req.body;
        const logindata = await masterDatabase.getLoginData(unit);
        res.send(logindata);
    }

    async getUnitMaster(req,res)
    {
        const unitMaster = await masterDatabase.getUnitMaster();
        res.send(unitMaster);
    }

    async deleteUnit(req,res)
    {
        let unitid = req.params.id;
        const unit = await masterDatabase.deleteUnit(unitid);
        res.send(unit);
    }

    async updateUnit(req,res)
    {
        let unitid = req.params.id;
        const unit = await masterDatabase.updateUnit(unitid);
        res.send(unit);
    }

    async updateData(req,res)
    {
        let unitData = req.body;
        const unit = await masterDatabase.updateData(unitData);
        res.send(unit);
    }


    ///////////////////////////////////Below Code is Shade Master///////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////

    async getShadeData(req,res)
    {
        const shadeData = await masterDatabase.getShadeData();
        res.send(shadeData);
    }
    async insertShade(req,res)
    {
        const data = req.body;
        const insertShade = await masterDatabase.insertShadeData(data);
        res.send(insertShade);
    }
    async getShadeDetails(req,res)
    {
        const id = req.params.id;
        const getDetails = await masterDatabase.getShadeDetails(id);
        res.send(getDetails);
    }
    async deleteShade(req,res)
    {
        const id = req.params.id;
        const deleteRecord = await masterDatabase.deleteShadeData(id);
        res.send(deleteRecord);
    }
    async updateShadeData(req,res)
    {
        const data = req.body;
        const updateShadeData = await masterDatabase.updateShadeData(data);
        res.send(updateShadeData);
    } 


    ////////////////////////////////Below Code is Job Master/////////////////////////
    ////////////////////////////////////////////////////////////////////////////////

    async getJobMasterData(req,res)
    {
        const getJobMaster = await masterDatabase.getJobMasterData();
        res.send(getJobMaster);
    }
    async submitMasterData(req,res)
    {
        const data = req.body;
        const submitData = await masterDatabase.submitData(data);
        res.send(submitData);
    }
    async deleteJob(req,res)
    {
        const id = req.params.id;
        const deleteData = await masterDatabase.deleteJobData(id);
        res.send(deleteData);
    }

    async updateDatas(req,res)
    {
        const id = req.params.id;
        const updatedata = await masterDatabase.updateJobData(id);
        res.send(updatedata);
    }

    async updateJobData(req,res)
    {
        const data = req.body;
        const updatedata = await masterDatabase.updateJobDetails(data);
        res.send(updatedata);
    }

    /////////////////////////////////////////////////////////////////////////////
    ///////////////////////////Job_Process_Master///////////////////////////////
    ////////////////////////////////////////////////////////////////////////////
    async getJobProcessMaster(req,res)
    {
        const getJPData = await masterDatabase.getJobProcessMaster();
        res.send(getJPData);
    }
    async SubmitJobData(req,res)
    {
        const data = req.body;
        const submitdata = await masterDatabase.submitJobData(data);
        res.send(submitdata);
    }
    async deleteJobProcess(req,res)
    {
        const id = req.params.id;
        const data = await masterDatabase.deleteJobProcess(id);
        res.send(data);
    }
    async editJobProcess(req,res)
    {
        const id = req.params.id;
        const data = await  masterDatabase.editJobProcess(id);
        res.send(data);
    }
    async updateJobProcess(req,res)
    {
        const data = req.body;
        const details = await masterDatabase.updateJobProcess(data);
        res.send(details);
    }
}

module.exports = masterController