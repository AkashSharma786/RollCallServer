const express = require('express');
const router = express.Router();
const {getAllEmployees, employeeDetail} = require('../admin_controller/controller');


router.route('/employees').get(getAllEmployees);

router.route('/:empId').get(employeeDetail);

router.route('/employees/query').get((req, res)=>{
    res.send('Query for all Employees');
})

router.route('/:empId/query').get((req, res) => {
    res.send('Query for individual Employee');
}
);

router.route('/attendance-all').get((req, res) => {
    res.send('All Attendence');
});

router.route('/attendance-all/query').get((req, res) => {
    res.send('Attendence query of all');

});


module.exports = router;

