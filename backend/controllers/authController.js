
const db = require('../config/db');
const bcrypt = require('bcrypt');
const generateToken = require('../utils/generateToken');

exports.register = async (req, res) => {
  const { email, password } = req.body;

  const hash = await bcrypt.hash(password, 10);

  db.run("INSERT INTO users (email, password) VALUES (?, ?)",
    [email, hash],
    () => res.json({ message: "Registered" })
  );
};

exports.login = (req, res) => {
  const { email, password } = req.body;

  db.get("SELECT * FROM users WHERE email=?", [email], async (err, user) => {
    if (!user) return res.status(400).json({ error: "User not found" });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).json({ error: "Wrong password" });

    res.json({ token: generateToken(user.id) });
  });
};
