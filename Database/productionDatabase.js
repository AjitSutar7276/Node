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