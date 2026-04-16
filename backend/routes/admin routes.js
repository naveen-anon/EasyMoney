const express = require('express');
const auth = require('../middlewares/authMiddleware');
const admin = require('../middlewares/adminMiddleware');

const {
  getUsers,
  getTransactions,
  approveDeposit,
  approveWithdraw
} = require('../controllers/adminController');

const router = express.Router();

router.get('/users', auth, admin, getUsers);
router.get('/transactions', auth, admin, getTransactions);

router.post('/approve-deposit', auth, admin, approveDeposit);
router.post('/approve-withdraw', auth, admin, approveWithdraw);

module.exports = router;
