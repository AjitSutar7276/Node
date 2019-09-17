const mysql = require('mysql');
const dbConfig = require('../Dbconfig/DBConfig.js');
const config = dbConfig.dbConfig;

exports.getLoginData = async(data)=>{
    const query =`insert into unit_master(unit)values('${data.unit}')`;
    const result = getPromise(query);
    return result;
}

exports.getUnitMaster = async()=>{
    const query = `SELECT * FROM unit_master`;
    const result = getPromise(query);
    return result;
}

exports.deleteUnit = async(id) =>{
    const query = `delete from unit_master where id=${id}`;
    const result = getPromise(query);
    return result;
}

exports.updateUnit = async(id)=>{
    const query =`select * from unit_master where id='${id}'`;
    const result = getPromise(query);
    return result;
}

exports.updateData = async(data)=>{
    const query = `update unit_master set unit='${data.unit}'where id='${data.ID}'`;
    // console.log(query);
    const result = getPromise(query);
    return result;
}


//////////////////////////////////////////Shade-Master Database/////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////

exports.getShadeData = async()=>{
    const query =`select * from shade_master`;
    const result = getPromise(query);
    return result;
}
exports.insertShadeData = async(data)=>{
    const query = `insert into shade_master(shade_name,process_for)values('${data.shade}','${data.process}')`;
    const result = getPromise(query);
    return result;
}
exports.getShadeDetails = async(id)=>{
    const query = `select * from shade_master where id ='${id}'`;
    const result = getPromise(query);
    return result;
}
exports.deleteShadeData = async(id) =>{
    const query =`delete from shade_master where id='${id}'`;
    const result = getPromise(query);
    return result;
}
exports.updateShadeData = async(data)=>{
    const query = `update shade_master set shade_name='${data.shade}',process_for='${data.process}' where id='${data.id}'`;
    console.log(query);
    const result = getPromise(query);
    return result;
}

////////////////////////////////////////Below Code is Job_master Database///////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////

exports.getJobMasterData = async()=>{
    const query = `select * from job_master`;
    const result = getPromise(query);
    return result;
}

exports.submitData = async(data)=>{
    const query = `insert into job_master(art_no,job_name,hsn,description,open_stock,min_stock,max_stock,rate,cgst,sgst,igst)
                    values('${data.ArtNo}','${data.JobName}','${data.HSN}','${data.description}','${data.openStock}','${data.MinStock}','${data.MaxStock}','${data.Rate}','${data.cgst}','${data.sgst}','${data.igst}')`;
    const result = getPromise(query);
    return result;
}

exports.deleteJobData = async(id)=>{
    const query = `delete from job_master where id='${id}'`;
    const result = getPromise(query);
    return result;
}

exports.updateJobData = async(id)=>{
    const query = `select * from job_master where id='${id}'`;
    const result = getPromise(query);
    return result;
}

exports.updateJobDetails = async(data)=>{
    const query = `update job_master set art_no='${data.ArtNo}',job_name='${data.JobName}',hsn='${data.HSN}',description='${data.description}',open_stock='${data.openStock}',min_stock='${data.MinStock}',max_stock='${data.MaxStock}',rate='${data.Rate}',cgst='${data.cgst}',sgst='${data.sgst}',igst='${data.igst}' where id='${data.id}'`;
    const result = getPromise(query);
    return result;
}

////////////////////////////////Job_Process_Master//////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////

exports.getJobProcessMaster = async()=>{
    const query =`select * from job_process_master`;
    const result = getPromise(query);
    return result;
}

exports.submitJobData= async(data)=>{
    const query = `insert into job_process_master(process_name,process_place)values('${data.process_name}','${data.process_place}')`;
    const result = getPromise(query);
    return result;
}

exports.deleteJobProcess= async(id)=>{
    const query = `delete from job_process_master where id='${id}'`;
    const result = getPromise(query);
    return result;
}

exports.editJobProcess= async(id)=>{
    const query = `select * from job_process_master where id='${id}'`;
    const result = getPromise(query);
    return result;
}

exports.updateJobProcess = async(data)=>{
    const query = `update job_process_master set process_name='${data.process_name}',process_place='${data.process_place}' where id='${data.id}'`;
    const result = getPromise(query);
    return result;
}






function getPromise(query) {

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