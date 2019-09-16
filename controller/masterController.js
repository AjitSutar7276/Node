const masterDatabase = require('../Database/masterDatabase');
const app = require('../server');
class masterController {
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
}
module.exports = masterController