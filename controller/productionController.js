
const productionDatabase = require('../Database/productionDatabase');
const app = require('../server');

class productionController {

  async getPoDetails(req,res)
  {
      let id = req.params.id;
      let result = await productionDatabase.getPODetails(id);
      res.send(result);
  }

  async getJobWorkDetails(req,res)
  {
      let id = req.params.id;
      let result = await productionDatabase.getJobWorkDetails(id);
      res.send(result);
  }
}

module.exports = productionController;