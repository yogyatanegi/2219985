// E:\2025\URL-Shortener\url-shortener-server\models\Click.js
const mongoose = require('mongoose');

const clickSchema = new mongoose.Schema({
  code: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
  source: String,
  geo: String
});

module.exports = mongoose.model('Click', clickSchema);
