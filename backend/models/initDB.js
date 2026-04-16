const db = require('../config/db');

db.serialize(() => {

  db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT,
    password TEXT,
    balance REAL DEFAULT 0,
    role TEXT DEFAULT 'user'
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS transactions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER,
    type TEXT,
    amount REAL,
    status TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )`);

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

  // ✅ Insert default plans safely
  db.run(`INSERT OR IGNORE INTO plans (id, name, daily_profit, duration_days)
    VALUES 
    (1, 'Basic Plan', 5, 10),
    (2, 'Pro Plan', 7, 15)
  `);

});

module.exports = db;
