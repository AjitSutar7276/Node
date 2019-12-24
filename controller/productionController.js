
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

  async SubmitJodWorddata(req,res)
  {
    let data = req.body;
    let result = await productionDatabase.SubmitJodWorddata(data);
    res.send(result);
  }
  
  async getRawMaterialDataList(req,res)
  {
    let data = req.params.id;
    let result = await productionDatabase.getRawMaterialDataList(data);
    res.send(result);
  }

  async GetRawDetailsData(req,res)
  {
    let data = req.body;
    let result = await productionDatabase.GetRawDetailsData(data);
    res.send(result);
  }

  async getJobPendingData(req,res)
  {
    let data = req.body;
    let result = await productionDatabase.getJobPendingData(data);
    res.send(result);
  }

  async SubmitJobProducation(req,res)
  {
    let data = req.body;
    let result = await productionDatabase.SubmitJobProducation(data);
    res.send(result);
  }
}

module.exports = productionController;