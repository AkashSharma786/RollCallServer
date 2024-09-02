const mongodb = require("mongodb");
const getEmpCollection = require("./db_controller");

async function login(username, password){
    try {
        console.log(username);
        console.log(password);
        const employees = await getEmpCollection();
        const emp = await employees.findOne({ $or :[ {Email: username}, {EmployeeId : username}], password: password}, { projection: {_id :0, Attendence :0, password : 0} });
        return emp;
    }
    catch (e) {
        console.log("Error in login");
        //console.error(e);
    }
}

module.exports = {login};