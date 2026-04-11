require('dotenv').config();
const express = require('express');
const cors = require('cors');

require('./models/initDB');

const authRoutes = require('./routes/authRoutes');
const walletRoutes = require('./routes/walletRoutes');
const transactionRoutes = require('./routes/transactionRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/wallet', walletRoutes);
app.use('/api/tx', transactionRoutes);

app.get('/', (req, res) => res.send("API Running 🚀"));

app.listen(process.env.PORT || 5000);
