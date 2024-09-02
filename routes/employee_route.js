const express = require('express');
const router = express.Router();


router.route('/checkin').get((req, res) => {
    res.send('checkin Page');
});
router.route('/checkout').get((req, res) => {
    res.send('checout Page');
}
);
router.route('/attendance-histroy').get((req, res) => {
    res.send('Attendace Histroy Page');

});

module.exports = router;

