const mysql = require('mysql');
const dbConfig = require('../Dbconfig/DBConfig.js');
const config = dbConfig.dbConfig;

exports.getPODetails = async(id) =>{
    const query = `SELECT * FROM po_id_master WHERE party_id =${id}`;
    const result = getPromise(query);
    return result;
}

exports.getJobWorkDetails = async(id)=>{
    const query = `SELECT * FROM po_details as p INNER JOIN job_master as j on j.id = p.job_no WHERE po_no = ${id}`;
    const result = getPromise(query);
    return result;
}

exports.SubmitJodWorddata = async(data)=>{
    let companyID = data.comName.party_id;
    let POID      = data.PONo.po_id;
    let jobID     = data.jobID;
    let productionCost = data.productionCost;
    let surfaceCost    = data.sufaceCost;
    let fittingCost    = data.fittingCost;
    let packingCost    = data.packingCost;
    
    Object.keys(data.jobworklist).forEach(ele=>{
        const query1 = `insert into job_work_details(company_id,po_id,jobwork_id,material_id,qty,surface_id,productionCost,surfaceCost,fittingCost,packingCost)
                       values('${companyID}','${POID}','${jobID}','${data.jobworklist[ele].jodid}','${data.jobworklist[ele].QTY}','${data.jobworklist[ele].surfaceid}','${productionCost}','${surfaceCost}','${fittingCost}','${packingCost}')`;   
        const result1 =  getPromise(query1)
        return result1;
        // console.log(data.quoDetails[ele].materialcode.material_id);
    })
    Object.keys(data.processData).forEach(ele=>{
        const query2 = `insert into job_process_details(company_id,po_id,job_id,process_id,time)values('${companyID}','${POID}','${jobID}','${data.processData[ele].processID}','${data.processData[ele].processTime}')`;
        const result2 = getPromise(query2);
        // return result2
    })
}

exports.getRawMaterialDataList = async(id)=>{
    const query = `select RawDetails from job_master where id='${id}'`;
    const result = getPromise(query);
    console.log(result);
    return result;
}
exports.GetRawDetailsData = async(data)=>{
    const query = `SELECT * FROM raw_material_master WHERE material_id in (${data})`;
    const result = getPromise(query);
    return result;
}

exports.getJobPendingData = async(data)=>{
    const query = `select * from po_id_master as po 
    INNER JOIN job_process_details as jd on jd.po_id = po.po_id
    INNER JOIN po_details as pd on pd.job_no = jd.job_id
    INNER JOIN job_process_master as jp on jp.id = jd.process_id
    INNER JOIN job_master as jm on jm.id = jd.po_id
    WHERE '${data.date}' between po_date and delivery_date and jd.process_id = ${data.processid}`;

    const result = getPromise(query);
    return result;
}

exports.SubmitJobProducation = async(data)=>{
    var prodId = 0;
    const query = `insert into job_producation_details(start_time,lunch_time,end_time,date,Lunch,emp_id,process_id)values('${data.STime}','${data.Lunchtime}','${data.EndTime}','${data.Date}','${data.LunTime}','${data.Employeeid.id}','${data.process.id}')`;
    const result = await getPromise(query);
    prodId = result.insertId;
    Object.keys(data.JobWorkDetails).forEach(ele=>{
        const query = `insert into job_production_work_details(prod_id,po_id,job_no,allocated_hr,allocated_qty)values('${prodId}','${data.JobWorkDetails[ele].po_id}','${data.JobWorkDetails[ele].job_no}','${data.JobWorkDetails[ele].hours}','${data.JobWorkDetails[ele].qty}')`;
        const result2 = getPromise(query);
        return result2;
    })
 

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