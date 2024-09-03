const {getEmployees, getEmployeeById} = require("../database/employees_query");

let  getAllEmployees =async (req, res)  => {

        
         try{
            const result = await getEmployees(0, 7 );
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