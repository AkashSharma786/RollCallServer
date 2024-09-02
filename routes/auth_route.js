const express = require('express');

const router = express.Router();

router.route('/login').get((req, res) => {
    res.send('Login Page');
});
router.route('/register').get((req, res) => {
    res.send('Register Page');
}
);
router.route('/logout').get((req, res) => {
    res.send('Logout Page');

});

router.route('/forgot-password').get((req, res) => {
    res.send('Forgot Password Page');
});

module.exports = router;