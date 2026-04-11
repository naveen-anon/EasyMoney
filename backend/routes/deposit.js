const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const { amount } = req.body;

  res.json({ message: "Deposit request received", amount });
});

module.exports = router;
