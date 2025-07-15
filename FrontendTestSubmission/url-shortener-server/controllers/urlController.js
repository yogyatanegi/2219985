// E:\2025\URL-Shortener\url-shortener-server\controllers\urlController.js

const { nanoid } = require('nanoid');
const Url = require('../models/Url');

// POST /shorten
exports.shortenURL = async (req, res) => {
  try {
    const { longUrl, validity = 30, shortcode } = req.body;
    const code = shortcode || nanoid(6);

    // Check for duplicate code
    const existing = await Url.findOne({ code });
    if (existing) {
      return res.status(400).json({ error: 'Shortcode already exists' });
    }

    const createdAt = new Date();
    const expiresAt = new Date(createdAt.getTime() + validity * 60000);

    const url = new Url({
      code,
      longUrl,
      createdAt,
      expiresAt,
      clicks: [],
    });

    await url.save();

    res.json({
      code,
      shortUrl: `http://localhost:5000/r/${code}`,
      createdAt,
      expiresAt,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

// GET /r/:code
exports.redirectURL = async (req, res) => {
  try {
    const { code } = req.params;
    const url = await Url.findOne({ code });

    if (!url) return res.status(404).send('Short URL not found.');
    if (new Date() > url.expiresAt) return res.status(410).send('This link has expired.');

    // Log click
    url.clicks.push({
      timestamp: new Date(),
      source: req.headers['user-agent'],
      geo: 'India', // placeholder
    });

    await url.save();
    res.redirect(url.longUrl);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error redirecting.');
  }
};

// GET /stats
exports.getStats = async (req, res) => {
  try {
    const urls = await Url.find();

    const stats = urls.map(url => ({
      code: url.code,
      shortUrl: `http://localhost:5000/r/${url.code}`,
      longUrl: url.longUrl,
      createdAt: url.createdAt,
      expiresAt: url.expiresAt,
      totalClicks: url.clicks.length,
      clicks: url.clicks,
    }));

    res.json(stats);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error fetching stats' });
  }
};
