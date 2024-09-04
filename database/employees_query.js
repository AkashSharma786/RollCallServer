const mongodb = require("mongodb");
const {getEmployeesCollection }= require("./db_controller");


let employees =  getEmployeesCollection()
.then((collection) => {
    employees = collection;
})
.catch((e)=>{console.log(e);});



async function getEmployees( id  = 0, includeField = 8) {

    try {

        await employees;
        let emp;
        switch (includeField) {
            
            case 1:
                emp = employees.find({} ,{ projection: {_id :id, fullname : 1} });
                break;
            case 2:
                emp = employees.find({} ,{ projection: {_id :id, fullname : 1, employeeId : 1} });
                break;
            case 3:
                emp = employees.find({} ,{ projection: {_id :id, fullname : 1, employeeId : 1, email : 1} });
                break;
            case 4:
                emp= employees.find({} ,{ projection: {_id :id, fullname : 1, employeeId : 1, email : 1, contactNo : 1} });
                break;
            case 5:
                emp =   employees.find({} ,{ projection: {_id :id, address :0, officeId : 0 , password : 0} });
                break;
            case 6:
                emp = employees.find({} ,{ projection: {_id :id,  officeId : 0 , password : 0} });
                break;
            case 7:
                console.log("Called");
                emp = employees.find({} ,{ projection: {_id :id, password : 0} });
                break;
            default:
                emp = employees.find({}, { projection: {_id : id}});
           
        }

       return emp.toArray();
    }
    catch (e) {
        console.log("Error in getEmployees");
       // console.error(e);
    }

}

 
async function getEmployeeById(id){
    try {
        await employees;
        const emp = await employees.findOne({EmployeeId: id}, { projection: {_id :0, Attendence :0, password : 0} });
        
            return emp;
        
    }
    catch (e) {
        console.log("Error in getEmployeeById");
        //console.error(e);
    }
}

async function addEmployee(data){
    try {
        await employees;
        await employees.insertOne(data);
    }
    catch (e) {
        console.log("Error in addEmployee");
        //console.error(e);
    }
}

async function updateEmployee(id, data){
    try {
        await employees;
        await employees.updateOne({EmployeeId: id}, { $set: data });
    }
    catch (e) {
        console.log("Error in updateEmployee");
        //console.error(e);
    }
}

async function deleteEmployee(id){
    try {
        await employees;
        await employees.deleteOne({EmployeeId: id});
    }
    catch (e) {
        console.log("Error in deleteEmployee");
        //console.error(e);
    }
}


module.exports = { getEmployees, getEmployeeById};
