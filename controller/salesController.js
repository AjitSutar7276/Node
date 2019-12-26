const salesDatabase = require('../Database/salesDatabase');
const app = require('../server');

class salesController {

    async submitPartyData (req,res)
    {
        let data = req.body;
        let result = await salesDatabase.submitPartyData(data);
        res.send(result);
    }

    async getPartyData(req,res)
    {
        let result = await salesDatabase.getPartyData();
        res.send(result);
    }

    async editPartyData(req,res)
    {
        let result = await salesDatabase.editPartyData(req.params.id);
        res.send(result);
    }

    async deletePartyData(req,res)
    {
        let result = await salesDatabase.deletePartyData(req.params.id);
        res.send(result);
    }

    async updatePartyData(req,res)
    {
        let result = await salesDatabase.updatePartyData(req.body);
        res.send(result);
    }

    ////////////////////////////////Quotation-Master-Controller///////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////
    async getQuotationData(req,res)
    {
        let result = await salesDatabase.getQuotationData();
        res.send(result);
    }
    async getMaterailData(req,res)
    {
        let result = await salesDatabase.getMaterailData();
        res.send(result);
    }
    async submitQutationData(req,res)
    {
        let data = req.body;
        let result = await salesDatabase.submitQutationData(data);
        res.send(result);
    }

    async getQuotationDetailsData(req,res)
    {
        let result = await salesDatabase.getQuotationDetailsData();
        res.send(result);
    }

    //////////////////////////////////Order-Book_Master//////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////

    async getPoIdDetails(req,res)
    {
        let result = await salesDatabase.getPoIdDetails();
        res.send(result);
    }

    async getQuoDataForPO(req,res)
    {
        let result = await salesDatabase.getQuoDataForPO(req.params.id);
        res.send(result);
    }

    async getPOQuoData(req,res)
    {
        let result = await salesDatabase.getPOQuoData(req.params.id);
        res.send(result);
    }

    async getJobDataForPoData(req,res)
    {
        let result = await salesDatabase.getJobDataForPoData(req.params.id);
        res.send(result);
    }

    async submitDataOrder(req,res)
    {
        let data = req.body;
        let result = await salesDatabase.submitDataOrder(data);
        res.send(result);
    }

    async getPODetailsData(req,res)
    {
        let result = await salesDatabase.getPODetailsData();
        res.send(result);
    }
}

module.exports = salesController;