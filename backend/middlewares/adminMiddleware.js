const db = require('../config/db');

module.exports = (req, res, next) => {
  db.get("SELECT role FROM users WHERE id=?", [req.user.id], (err, user) => {
    if (!user || user.role !== 'admin') {
      return res.status(403).json({ error: "Admin only" });
    }
    next();
  });
};
