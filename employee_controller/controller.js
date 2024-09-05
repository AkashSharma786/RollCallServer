const {checkin, checkout} = require("../database/attendance_query");

const checkinReq = async (req, res) => {
    const empId = req.baseUrl.split("/")[1];
    
   
   
    console.log(empId );

   checkin(empId).then((result)=>{
        console.log(result);
        res.status(200).send({message: "Checked in successfully!"});
        
    })
    .catch((e)=>{
        console.log(e);
        res.status(500).send({error: "Internal Server Error"});
    })
    

}

const checkoutReq = async (req, res) => {
    const empId = req.baseUrl.split("/")[1];
    console.log(empId);

    checkout(empId).then((result)=>{
        res.status(200).send({message: "Checked out successfully!"});
    })
    .catch((e)=>{
        console.log(e);
        res.status(500).send({error: "Internal Server Error"});
    })

   
}



module.exports = {checkinReq, checkoutReq};