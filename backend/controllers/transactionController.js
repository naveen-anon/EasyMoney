const db = require('../config/db');

exports.deposit = (req, res) => {
  const { amount } = req.body;

  db.run("INSERT INTO transactions (user_id, type, amount, status) VALUES (?, 'deposit', ?, 'pending')",
    [req.user.id, amount],
    () => res.json({ message: "Deposit requested" })
  );
};

exports.withdraw = (req, res) => {
  const { amount } = req.body;

  db.run("INSERT INTO transactions (user_id, type, amount, status) VALUES (?, 'withdraw', ?, 'pending')",
    [req.user.id, amount],
    () => res.json({ message: "Withdraw requested" })
  );
};
