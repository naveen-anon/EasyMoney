db.run(`CREATE TABLE IF NOT EXISTS plans (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  daily_profit REAL,
  duration_days INTEGER
)`);

db.run(`CREATE TABLE IF NOT EXISTS investments (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER,
  plan_id INTEGER,
  amount REAL,
  start_date DATETIME,
  end_date DATETIME,
  status TEXT DEFAULT 'active'
)`);
