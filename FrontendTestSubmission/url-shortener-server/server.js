//E:\2025\URL-Shortener\url-shortener-server\server.js
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const logger = require('./middleware/logger');
const urlRoutes = require('./routes/urlRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(logger);

// Routes
app.use('/', urlRoutes);

// MongoDB Atlas connection
mongoose.connect('mongodb+srv://bhanupandey0843:eNpuDuSTmLWLTs26@cluster0.uuns3jv.mongodb.net/urlshortener?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('✅ MongoDB Atlas connected'))
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err);
    process.exit(1); // Exit if DB fails
  });

// Port setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
