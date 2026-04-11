
const express = require('express');
const auth = require('../middlewares/authMiddleware');
const { getBalance } = require('../controllers/walletController');

const router = express.Router();

router.get('/', auth, getBalance);

module.exports = router;
