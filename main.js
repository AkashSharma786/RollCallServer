const express = require('express');
const {getEmployeeById} = require('./database/employees_query');
const authRoute = require('./routes/auth_route');
const employeeRoute = require('./routes/employee_route');
const adminRoute = require('./routes/admin_route');


const app = express();

app.use('/auth', authRoute);
app.use('/:empId', employeeRoute );
app.use('/admin', adminRoute);
 
 

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});