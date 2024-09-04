const express = require('express');
const {checkinReq, checkoutReq } = require('../employee_controller/controller');
const router = express.Router();


router.route('/checkin').post(checkinReq);

router.route('/checkout').post(checkoutReq);

router.route('/attendance-histroy').get((req, res) => {
    res.send('Attendace Histroy Page');

});

module.exports = router;

