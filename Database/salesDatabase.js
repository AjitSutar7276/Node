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
        const query1 = `insert into qutation_details(qutation_id,particular,qty,unit,rate)
                       values('${quatationId}','${data.quoDetails[ele].perticulars}','${data.quoDetails[ele].quantity}','${data.quoDetails[ele].unit.id}','${data.quoDetails[ele].rate}')`;
        const result1 =  getPromise(query1)
        return result1;
        // console.log(data.quoDetails[ele].materialcode.material_id);
    })
}


//////////////////////////////////////////Order-Book-Master//////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
exports.getPoIdDetails = async() =>{
    const query = `select * from po_id_master`;
    const result = getPromise(query);
    return result;
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