const cron = require('node-cron');
const db = require('../config/db');

cron.schedule('0 0 * * *', () => {
  console.log("Running daily profit...");

  db.all("SELECT * FROM investments WHERE status='active'", [], (err, rows) => {

    rows.forEach(inv => {
      db.get("SELECT daily_profit FROM plans WHERE id=?", [inv.plan_id], (err, plan) => {

        const profit = (inv.amount * plan.daily_profit) / 100;

        db.run("UPDATE users SET balance = balance + ? WHERE id=?", [profit, inv.user_id]);
      });
    });
  });
});
