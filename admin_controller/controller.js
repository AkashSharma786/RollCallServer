const {getEmployees, getEmployeeById, addEmployee, updateEmployee, deleteEmployee} = require("../database/employees_query");
const {isValidContact, isValidEmail} = require("../utils/validator");

let  getAllEmployees =async (req, res)  => {

        
         try{
            const result = await getEmployees(0, 2 );
            if(result.length == 0)
                res.status(404).send({error: "not found!"});
            else
            res.status(200).send(result);
            
         }catch (e){
           console.log(e);
            
            res.status(500).json({error: "Internal Server Error"});
            res.end();
         }
};
 
const employeeDetail = async (req, res)=>{
  
    const empId = req.params.empId;
    const {from, to} = req.query;

    console.log(Object.keys(req.query).length);
    console.log(empId, from, to);

    getEmployeeById(empId).then((result)=>{
   
        if(result == null)
            res.status(404).send({error: "not found!"});
        else
            res.status(200).send(result);
        
    })
    .catch((e)=>{
       console.log(e);
       res.status(500).send({error: "Internal Server Error"});
    })
   

}

const getAttendances = async (req, res) => {
    const {from, to} = req.query;
    console.log(from, to);
   
    res.send('All Attendence');
}

const addEmployeeReq = async (req, res)=>{

    const { name, employeeId, email, contact,
        avatar, address, officeId, password} = req.body;


    isValid = (name != undefined && employeeId != undefined &&
               email != undefined && contact != undefined &&
               avatar != undefined && address != undefined &&
               officeId != undefined && password != undefined);
    
    isValidRequest = (isValid && isValidContact(contact) && isValidEmail(email));

    if(isValidRequest){

        addEmployee(req.body).then((result)=>{
            res.status(201).send({message: "Employee Added!"});
        })
        .catch((e)=>{
            console.log(e);
            res.status(500).send({error: "Internal Server Error"});
        })
    } 
    else{
        res.status(400).send({error: "Bad Request"});
    }

        
}

const updateEmployeeReq = async (req, res) => {
    console.log(req.body);
    const {employeeId, name, email, contact, avatar, address, officeId, password} = req.body;

    
    isValid = (name != undefined || employeeId != undefined ||
               email != undefined || contact != undefined ||
               avatar != undefined || address != undefined ||
               officeId != undefined || password != undefined);
    
    console.log(typeof(req.body));
    console.log(Object.keys(req.body));
    
    res.status(200).send({message: "Employee Updated!"});

    
   
}

const deleteEmployeeReq = async (req, res) => {
    console.log(req.body);
    const {employeeId} = req.body;
    if(employeeId != undefined){
        deleteEmployee(employeeId).then((result)=>{
            res.status(200).send({message: "Employee Deleted!"});
            console.log(result);
        })
        .catch((e)=>{
            console.log(e);
            res.status(500).send({error: "Internal Server Error"});
        })
    }
    else{
        res.status(400).send({error: "Bad Request"});
    }
    

}



module.exports = {getAllEmployees, employeeDetail, getAttendances, addEmployeeReq, updateEmployeeReq, deleteEmployeeReq};