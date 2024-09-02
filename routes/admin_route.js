const express = require('express');
const router = express.Router();


router.route('/employees').get((req, res) => {
    res.send('allEmployees');
});

router.route('/:empId').get((req, res) => {
    res.send('Idividual Employee');
}
);

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

