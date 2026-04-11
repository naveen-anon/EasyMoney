const db = require('../config/db');

exports.getBalance = (req, res) => {
  db.get("SELECT balance FROM users WHERE id=?", [req.user.id], (err, row) => {
    res.json(row);
  });
};
