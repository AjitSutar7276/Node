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
    console.log(query);
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