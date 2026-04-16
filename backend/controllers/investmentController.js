const db = require('../config/db');

exports.invest = (req, res) => {
  const { plan_id, amount } = req.body;
  const user_id = req.user.id;

  const start = new Date();
  const end = new Date();

  db.get("SELECT * FROM plans WHERE id=?", [plan_id], (err, plan) => {

    if (!plan) return res.status(400).json({ error: "Invalid plan" });

    end.setDate(start.getDate() + plan.duration_days);

    // deduct balance
    db.run("UPDATE users SET balance = balance - ? WHERE id=?", [amount, user_id]);

    // create investment
    db.run(
      `INSERT INTO investments (user_id, plan_id, amount, start_date, end_date)
       VALUES (?, ?, ?, ?, ?)`,
      [user_id, plan_id, amount, start.toISOString(), end.toISOString()]
    );

    res.json({ message: "Investment started" });
  });
};
