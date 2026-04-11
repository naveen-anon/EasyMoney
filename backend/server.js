
require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const authRoutes = require('./routes/auth');
const depositRoutes = require('./routes/deposit');

app.use('/api/auth', authRoutes);
app.use('/api/deposit', depositRoutes);

app.get('/', (req, res) => {
  res.send('API Running 🚀');
});

app.listen(5000, () => console.log("Server running"));
