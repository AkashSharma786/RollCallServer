const {login , register} = require('../database/auth_query');

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


const registerAdmin = async (req, res) => {
    const {city,name, email, password, contact, username, longitude, latitude} = req.body;
   // console.log(req.body);

    const isValidfields = (city != undefined &&
        name != undefined  &&
        email != undefined &&
        password  != undefined &&
        contact != undefined  &&
        username != undefined  &&
        longitude != undefined &&
        latitude != undefined );

    const isValidContact = (isValidfields && typeof(contact) === "number" &&
                         contact >= 1000000000 && contact <= 9999999999 &&
                          contact.toString().length == 10);

                         

    const isValidEmail = (isValidfields && email.includes('@') &&
                             email.includes('mail.com') && email.length > 5 &&
                              email.length < 30 );
                             

    const isValidLocation = (isValidfields && typeof(longitude) === 'number' &&
                             typeof(latitude) === 'number' &&
                             latitude > 0 && latitude < 90 &&
                             longitude > 0 && longitude < 180);
                            

    const isValidRequest = (isValidfields && isValidContact && isValidEmail && isValidLocation);
  
    
    if(isValidRequest){
        
        register(req.body);
        res.status(201).send({message: "Register Page"});
    } 
    else{
         res.status(400).send({error: "Bad Request"});
    }

    
   


   
}

module.exports = {validateDetails, registerAdmin};