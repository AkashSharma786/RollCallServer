const express = require('express');
const router = express.Router();
const {getAllEmployees, employeeDetail, getAttendances, addEmployeeReq, updateEmployeeReq, deleteEmployeeReq} = require('../admin_controller/controller');


router.route('/employees')
        .get(getAllEmployees)
        .post(addEmployeeReq)
        .put(updateEmployeeReq)
        .delete(deleteEmployeeReq);

router.route('/attendance-all').get(getAttendances);

router.route('/:empId').get(employeeDetail);


module.exports = router;

