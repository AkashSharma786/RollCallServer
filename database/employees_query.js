const mongodb = require("mongodb");
const getEmpCollection = require("./db_controller");


let employees =  getEmpCollection()
.then((collection) => {
    employees = collection;
})
.catch((e)=>{console.log(e);});

async function getEmployees(){
    try {

        await employees;
        const emp = employees.find({} ,{ projection: {_id :0, EmployeeId: 1, fullName: 1, Email: 1, ContactNo : 1 } });
        if(emp == null){
            return {error: "Empty"};
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
        
        console.log(emp);
        if(emp == null){
            return {error: "not found"};
        }
        else{
            return emp;
        }
    }
    catch (e) {
        console.log("Error in getEmployeeById");
        //console.error(e);
    }
}



module.exports = {getEmployees, getEmployeeById};
