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


    //////////////////////////////////Order-Book_Master//////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////

    async getPoIdDetails(req,res)
    {
        let result = await salesDatabase.getPoIdDetails();
        res.send(result);
    }
}

module.exports = salesController;