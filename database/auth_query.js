const mongodb = require("mongodb");
const {getEmployeesCollection, getComany} = require("./db_controller");

async function login(username, password) {
    try {
        console.log(username);
        console.log(password);
        const employees = await getEmployeesCollection();
        const emp = await employees.findOne(
            {
                $and: [{ $or: [{ Email: username }, { EmployeeId: username }] },
                { password: password }]
            },
            { projection: { _id: 0, Attendence: 0, password: 0 } });
        return emp;
    }
    catch (e) {
        console.log("Error in login");
        //console.error(e);
    }
}

async function register(data) {
    const company = await getComany();
    await company.insertOne(data);


    console.log(data);


}



module.exports = { login, register };