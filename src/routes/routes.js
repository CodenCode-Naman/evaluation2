const express = require('express');
const { saveCompany } = require('../controllers/companyController.js');
const router = express.Router();
router.get('', (req, res) => {
    res.send('Hey, Naman!');
});
router.post('/save', saveCompany);
module.exports = router;