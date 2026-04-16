const express = require('express');
const auth = require('../middlewares/authMiddleware');
const { invest } = require('../controllers/investmentController');

const router = express.Router();

router.post('/buy', auth, invest);

module.exports = router;
