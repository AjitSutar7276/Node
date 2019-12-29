const mysql = require('mysql');
const dbConfig = require('../Dbconfig/DBConfig.js');
const config = dbConfig.dbConfig;

exports.submitPartyData = async(data) =>{
    const query = `insert into party_master(party_type,party_name,address,phone,mobile_1,mobile_2,fax,gst)values('${data.Customer}','${data.ptName}','${data.address}','${data.phone}','${data.mob1}','${data.mob2}','${data.fax}','${data.gst}')`;
    const result = getPromise(query);
    return result;
}

exports.getPartyData = async() =>{
    const query = `SELECT * from party_master as p INNER JOIN party_type_master as pm on pm.id = p.party_type`;
    const result = getPromise(query);
    return result;
}

exports.editPartyData = async(id)=>{
    const query = `SELECT * from party_master as p INNER JOIN party_type_master as pm on pm.id = p.party_type where p.party_id='${id}'`;
    const result = getPromise(query);
    return result;
}

exports.deletePartyData = async(id)=>{
    const query = `delete from party_master where party_id='${id}'`;
    const result = getPromise(query);
    return result;
}

exports.updatePartyData = async(data)=>{
    const query = `update party_master set party_type='${data.Customer}',party_name='${data.ptName}',address='${data.address}',phone='${data.phone}',mobile_1='${data.mob1}',mobile_2='${data.mob2}',fax='${data.fax}',gst='${data.gst}' where party_id='${data.id}'`;
    const result = getPromise(query);
    return result;
}

/////////////////////////////////////////////////Quotation-Master-Database//////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

exports.getQuotationData = async()=>{
    const query = `select * from qutation_id_master`;
    const result = getPromise(query);
    return result;
}

exports.getMaterailData = async()=>{
    const query = `select * from final_material_master`;
    const result = getPromise(query);
    return result;
}

exports.submitQutationData = async(data) =>{
    var rules = '';
    var quatationId = 0;
    Object.keys(data.TermsCondition).forEach(element=>{
        if(data.TermsCondition[element] == true)
        {
            rules +=element +',';
            console.log(data.TermsCondition[element])
        }
    })
    console.log(rules);
    const query = `insert into qutation_id_master(qutation_date,Party_id,termscondition,pack_amt,transport_amt)
                    values('${data.quo_date}','${data.name.party_id}','${rules}','${data.packCharge}','${data.transfortCharge}')`;
                    console.log(query)
    const result = await getPromise(query);
    quatationId = result.insertId;
    console.log(quatationId);
    Object.keys(data.quoDetails).forEach(ele=>{
        const query1 = `insert into qutation_details(qutation_id,materialcode,particular,qty,unit,rate)
                       values('${quatationId}','${data.quoDetails[ele].materialcode.id}','${data.quoDetails[ele].perticulars}','${data.quoDetails[ele].quantity}','${data.quoDetails[ele].unit.id}','${data.quoDetails[ele].rate}')`;
        const result1 =  getPromise(query1)
        return result1;
        // console.log(data.quoDetails[ele].materialcode.material_id);
    })
}


exports.getQuotationDetailsDatas = async() =>{
    const query= `SELECT * FROM qutation_id_master as q INNER JOIN party_master as p on p.party_id = q.Party_id`;
    const result = getPromise(query);
    return result;
}

exports.getQuotationDetailsData = async(id) =>{
    const query =`SELECT *,u.unit as unitname FROM qutation_id_master as qi INNER JOIN qutation_details as qa on qa.qutation_id = qi.qutation_id INNER join party_master as p on p.party_id = qi.Party_id INNER JOIN unit_master as u on u.id = qa.unit where qi.qutation_id = '${id}'`;
    const result = getPromise(query);
    return result;
}
//////////////////////////////////////////Order-Book-Master//////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
exports.getPoIdDetails = async() =>{
    const query = `select * from po_id_master`;
    const result = getPromise(query);
    return result;
}

exports.getQuoDataForPO = async(id) =>{
    const query = `select * from qutation_id_master where Party_id='${id}'`;
    const result = getPromise(query);
    return result;
}

exports.getPOQuoData = async(id) =>{
    const query = `SELECT *,j.id as jid,qd.rate as qrate  FROM qutation_details as qd left join job_master as j on qd.materialcode = j.id where qd.qutation_id = '${id}'`;
    const result = getPromise(query);
    return result;
}

exports.getJobDataForPoData = async(id) =>{
    const query = `select * from job_master where id = '${id}'`;
    const result = getPromise(query);
    return result;
}

exports.submitDataOrder = async(data)=>{

    // const po_no = 0;
    const query = `insert into po_id_master(po_date,party_id,qutation_id,prority,delivery_date)values('${data.date}','${data.name.party_id}','${data.quotationNo.qutation_id}','${data.priority}','${data.Deliverydate}')`;
    console.log(query);
    const result = await getPromise(query);
    var po_no = result.insertId;
    Object.keys(data.PoDataList).forEach(ele=>{
        const query1 = `insert into po_details (po_no,job_no,sizeandDescription,qty,rate,surfaceTreatement,exciseRate,vatRate)values('${po_no}','${data.PoDataList[ele].jid}','${data.PoDataList[ele].size}','${data.PoDataList[ele].qty}','${data.PoDataList[ele].rate}','${data.PoDataList[ele].surface.id}','${data.ExciseRate}','${data.vatRate}')`;
        console.log(ele);
        console.log(query1);
        const result1 = getPromise(query1)
        return result1;
        
    });
}

exports.getPODetailsData = async()=>{
    const query = `SELECT * FROM po_id_master as p INNER JOIN party_master as pd on pd.party_id = p.party_id`;
    const result = await getPromise(query);
    return result;s
}





function getPromise(query) 
{

    const dbConnection = mysql.createConnection(config);

    return new Promise((resolve, reject) => {

        dbConnection.connect((err) => {
            if (err) {
                console.log(err);
                reject('Connection error :' + err);
                dbConnection.end();
            } else {
                dbConnection.query(query, (err1, rows1, fields1) => {
                    // console.log('asdfsafsfasfasfsfsf');
                    if (err1) {
                        console.log(err1);
                        reject('Query1 execution error:' + err1);
                        dbConnection.end();
                    } else {
                        // console.log(rows1); 
                        resolve(rows1);
                        dbConnection.end();
                    }
                })

            }
        })
    })

}