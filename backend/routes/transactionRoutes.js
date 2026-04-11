
const express = require('express');
const auth = require('../middlewares/authMiddleware');
const { deposit, withdraw } = require('../controllers/transactionController');

const router = express.Router();

router.post('/deposit', auth, deposit);
router.post('/withdraw', auth, withdraw);

module.exports = router;
