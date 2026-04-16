require('dotenv').config();
const express = require('express');
const cors = require('cors');

// Initialize DB
require('./models/initDB');

// Routes
const authRoutes = require('./routes/authRoutes');
const walletRoutes = require('./routes/walletRoutes');
const transactionRoutes = require('./routes/transactionRoutes');
const adminRoutes = require('./routes/adminRoutes'); //

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/wallet', walletRoutes);
app.use('/api/tx', transactionRoutes);
app.use('/api/admin', adminRoutes); // 

// Test Route
app.get('/', (req, res) => {
  res.send("API Running 🚀");
});

// Start Server
app.listen(process.env.PORT || 5000, () => {
  console.log("Server running 🚀");
});
