const express = require('express');
const { sendMoney, getTransactions } = require('../controllers/transactionController');
const router = express.Router();

router.post('/send', sendMoney);
router.get('/history/:userId', getTransactions);

module.exports = router;