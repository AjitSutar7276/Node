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
}
module.exports = masterController