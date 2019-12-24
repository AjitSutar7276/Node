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

exports.submitJOBData = async(data)=>{
    // console.log(data);
    console.log(data.RawDetails.itmeName1);
    var rawDetailsdata;
    Object.keys(data.RawDetails).forEach(ele=>{
        if(data.RawDetails[ele].itmeName1.material_id != undefined)
        {
            rawDetailsdata += data.RawDetails[ele].itmeName1.material_id +',';
        }
        console.log(data.RawDetails[ele].itmeName1.material_id);   
    })
    const query = `insert into job_master(art_no,job_name,RawDetails,hsn,description,open_stock,min_stock,max_stock,rate,cgst,sgst,igst)
                    values('${data.ArtNo}','${data.JobName}','${rawDetailsdata}','${data.HSN}','${data.description}','${data.openStock}','${data.MinStock}','${data.MaxStock}','${data.Rate}','${data.cgst}','${data.sgst}','${data.igst}')`;
    
    // console.log(query);
    const result = getPromise(query);
    // let jobID = result.insertId;
    // Object.keys(data.RawDetails).forEach(ele=>{
    //     const query = `insert into raw_material_master(itme_name,job_id,item_type,unit,hsn,weight,feet,pur_rate,sale_rate,thinkness)values('${data.RawDetails[ele].itmeName1}','${jobID}','0','${data.RawDetails[ele].unit1}','${data.RawDetails[ele].HSN1}','${data.RawDetails[ele].weight1}','${data.RawDetails[ele].sqFeet1}','${data.RawDetails[ele].PurRate1}','${data.RawDetails[ele].SalesRate1}','${data.RawDetails[ele].Thickness1}')`;
    //     const result1 = getPromise(query);
    //     console.log(query)
    // });
    // if(data.Checked == true)
    // {
    //     const query =`insert into raw_material_master(itme_name,item_type,unit,hsn,used_in,category,weight,feet,pur_rate,sale_rate,op_stock,thinkness,minLevel,maxLevel,cgst,sgst,igst,imgPath)values('${data.itemName}','${data.itmeType.id}','${data.unit}','${data.HSN}','${data.Used_in}','${data.category.id}','${data.weight}','${data.feet}','${data.pur_rate}','${data.sale_rate}','${data.thinkness}')`;
    // }
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

exports.getRawMaterialDataid = async(id)=>{
    const query = `select * from raw_material_master where material_id='${id}'`;
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


//////////////////////////////////////Surface_Treatement_Master///////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
exports.getSurfaceData = async()=>{
    const query = `select * from surface_tre_master`;
    const result = getPromise(query);
    return result;
}

exports.submitData = async(data)=>{
    const query = `insert into surface_tre_master(surface_treatment,unit_in,purchase_rate,sale_rate)values('${data.surfaceName}','${data.unit}','${data.pur_rate}','${data.sale_rate}')`;
    const result = getPromise(query);
    return result;
}

exports.deleteSurface = async(id) =>{
    const query =`delete from surface_tre_master where id = '${id}'`;
    const result = getPromise(query);
    return result;
}

exports.editSurface= async(id) =>{
    const query = `select * from surface_tre_master where id='${id}'`;
    const result = getPromise(query);
    return result;
}

exports.updateSurface = async(data) =>{
    const query = `update surface_tre_master set surface_treatment='${data.surfaceName}',unit_in='${data.unit}',purchase_rate='${data.pur_rate}',sale_rate='${data.sale_rate}' where id='${data.id}'`;
    const result = getPromise(query);
    return result;
}


///////////////////////////////////////////////Below_Code_Machine_Master_Database/////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

exports.getMachineData = async() =>{
    const query = `select * from machine_master`;
    const result  = getPromise(query);
    return result;
}

exports.submitMasterData = async(data) =>{
    const query =`insert into machine_master(machine_name,description,make,capacity,process,purchase_date,warranty,img_path)
    values('${data.Machine_name}','${data.Description}','${data.Make}','${data.capacity}','${data.process}','${data.pur_date}','${data.Warranty}','upload/${data.imagePath}')`;
    const result  = getPromise(query);
    return result;
}

exports.deleteMachineData = async(id) =>{
    const query = `delete from machine_master where machine_id='${id}'`;
    const result = getPromise(query);
    return result;
}

exports.editMachineData = async(id) =>{
    const query = `select * from machine_master where machine_id='${id}'`;
    const result = getPromise(query);
    return result;
}

exports.updateMachineData = async(data) =>{
    const query = `update machine_master set machine_name='${data.Machine_name}',description='${data.Description}',make='${data.Make}',capacity='${data.capacity}',process='${data.process}',purchase_date='${data.pur_date}',warranty='${data.Warranty}' where machine_id='${data.id}'`;
    console.log(query);
    const result = getPromise(query);
    return result;
}


//////////////////////////////////////////Raw-Material_master_database/////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

exports.getRawMaterailData = async() =>{
    const query = `select * from raw_material_master`;
    const result = getPromise(query);
    return result;
}

exports.submitRawMaterialData = async(data) =>{
    const query = `insert into raw_material_master(itme_name,item_type,unit,hsn,used_in,category,weight,feet,pur_rate,sale_rate,op_stock,thinkness,minLevel,maxLevel,cgst,sgst,igst,imgPath)values('${data.itemName}','${data.itmeType.id}','${data.unit}','${data.HSN}','${data.Used_in}','${data.category.id}','${data.weight}','${data.feet}','${data.pur_rate}','${data.sale_rate}','${data.op_stock}','${data.thinkness}','${data.minLevel}','${data.maxLevel}','${data.cgst}','${data.sgst}','${data.igst}','${data.imagePath}')`;
    const result = getPromise(query);
    return result;
}

exports.getCotegoryData = async() =>{
    const query = `select * from category_master`;
    const result = getPromise(query);
    return result;
}

exports.deleteRawData = async(id) =>{
    const query = `delete from raw_material_master where material_id='${id}'`;
    const result = getPromise(query);
    return result;
}


////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////Employee-Master-Code////////////////////////////////////////

exports.insertEmployee = async(data) =>{
    const query = `insert into employee_master(emp_code,emp_name,designation,mobile_no,address,join_date,salary)values('${data.eCode}','${data.eName}','${data.desig}','${data.mNo}','${data.address}','${data.joinDate}','${data.eSal}')`;
    const result = getPromise(query);
    return result;
}

exports.getEmployeeData = async() =>{
    const query =`select * from employee_master`;
    const result = getPromise(query);
    return result;
}

exports.deleteEmployee = async(id) =>{
    const query = `delete from employee_master where id='${id}'`;
    const result = getPromise(query);
    return result;
}

exports.getEmployeeDataEdit = async(id) =>{
    const query = `select * from employee_master where id='${id}'`;
    const result = getPromise(query);
    return result;
}

exports.updateEmployeeData = async(data)=>{
    const query = `update employee_master set emp_code='${data.eCode}',emp_name='${data.eName}',designation='${data.desig}',mobile_no='${data.mNo}',address='${data.address}',join_date='${data.joinDate}',salary='${data.eSal}' where id='${data.id}'`;
    console.log(query);
    const result = getPromise(query);
    return result;
}


///////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////Shift-master-code-////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////

exports.insertShiftData = async(data)=>{
    const query = `insert into shiftmaster(shift_name,s_time,e_time,nightShift,g_time,t_time,a_time)values('${data.sftName}','${data.sTime}','${data.eTime}','${data.shift}','${data.gTime}','${data.tTime}','${data.awTime}')`;
    const result = getPromise(query);
    return result;
}

exports.getShiftMaster = async()=>{
    const query = `select * from shiftmaster`;
    const result = getPromise(query);
    return result;
}

exports.deleteShiftMaster = async(id)=>{
    const query = `delete from shiftmaster where id='${id}'`;
    const result = getPromise(query);
    return result;
}

exports.editShiftMaster = async(id)=>{
    const query = `select * from shiftmaster where id='${id}'`;
    const result = getPromise(query);
    return result;
}

exports.updateShiftMaster = async(data)=>{
    const query = `update shiftmaster set shift_name='${data.sftName}',s_time='${data.sTime}',e_time='${data.eTime}',nightShift='${data.shift}',g_time='${data.gTime}',t_time='${data.tTime}',a_time='${data.awTime}' where id='${data.id}'`;
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