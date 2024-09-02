const {getEmployees, getEmployeeById} = require("../database/employees_query");

const getAllEmployees =(req, res)  => {

         getEmployees()
         .then((result)=>{
            if(result.length == 0)
                res.status(404).send({error: "not found!"});
            else
            res.status(200).send(result);
            
         })
         .catch((e)=>{
            res.status(404).json({error: "not found!"});
            res.end();
         });
};

const employeeDetail =(req, res)=>{
  
    const empId = req.params.empId;
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

module.exports = {getAllEmployees, employeeDetail};