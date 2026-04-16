const db = require('../config/db');

// all users
exports.getUsers = (req, res) => {
  db.all("SELECT id, email, balance, role FROM users", [], (err, rows) => {
    res.json(rows);
  });
};

// all transactions
exports.getTransactions = (req, res) => {
  db.all("SELECT * FROM transactions", [], (err, rows) => {
    res.json(rows);
  });
};

// approve deposit
exports.approveDeposit = (req, res) => {
  const { id, amount, user_id } = req.body;

  db.run("UPDATE transactions SET status='approved' WHERE id=?", [id]);

  db.run("UPDATE users SET balance = balance + ? WHERE id=?", [amount, user_id]);

  res.json({ message: "Deposit approved" });
};

// approve withdraw
exports.approveWithdraw = (req, res) => {
  const { id, amount, user_id } = req.body;

  db.run("UPDATE transactions SET status='approved' WHERE id=?", [id]);

  db.run("UPDATE users SET balance = balance - ? WHERE id=?", [amount, user_id]);

  res.json({ message: "Withdraw approved" });
};
