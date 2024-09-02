const express = require('express');
const {validateDetails, registerAdmin} = require('../auth_controller/controller');

const router = express.Router();

router.route('/login').get(validateDetails);

router.route('/register').get(registerAdmin);

router.route('/logout').get((req, res) => {
    res.send('Logout Page');

});

router.route('/forgot-password').get((req, res) => {
    res.send('Forgot Password Page');
});

module.exports = router;