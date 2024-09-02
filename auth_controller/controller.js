const {login} = require('../database/auth_query');

const validateDetails = async (req, res) => {
    console.log("Called");
    const {username} = req.body;
    const {password} = req.body;
    console.log(username);
    console.log(password);
    if(username && password){

        try{
            const result = await login(username, password);
    
            if(result == null)
                res.status(404).send({error: "not found!"});
            else
                res.status(200).send(result);

        }
        catch{
            res.status(500).send({error: "Internal Server Error"});
          
        }

       
    } 
    else{
        res.status(400).send({message: "Bad Request"});
    }
   // res.send(req.body);
   


}

module.exports = {validateDetails};