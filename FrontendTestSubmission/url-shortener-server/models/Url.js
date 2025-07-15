// E:\2025\URL-Shortener\url-shortener-server\models\Url.js
const mongoose = require('mongoose');

const clickSchema = new mongoose.Schema({
  timestamp: Date,
  source: String,
  geo: String,
});

const urlSchema = new mongoose.Schema({
  code: { type: String, required: true, unique: true },
  longUrl: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  expiresAt: { type: Date, required: true },
  clicks: [clickSchema],
});

module.exports = mongoose.model('Url', urlSchema);
