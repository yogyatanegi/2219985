// E:\2025\URL-Shortener\url-shortener-server\middleware\logger.js
const fs = require('fs');
const path = require('path');

// Ensure logs folder exists
const logDir = path.join(__dirname, '../logs');
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

const logStream = fs.createWriteStream(path.join(logDir, 'access.log'), { flags: 'a' });

const logger = (req, res, next) => {
  const log = `[${new Date().toISOString()}] ${req.method} ${req.originalUrl}\n`;
  logStream.write(log);
  next();
};

module.exports = logger;
