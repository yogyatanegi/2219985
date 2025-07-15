const { nanoid } = require('nanoid');

let urlStore = {};      // In-memory URL storage
let clickStats = {};    // In-memory click analytics

// POST /shorten
exports.shortenURL = (req, res) => {
  const { longUrl, validity = 30, shortcode } = req.body;

  // Use custom code or generate a random one
  const code = shortcode || nanoid(6);

  if (urlStore[code]) {
    return res.status(400).json({ error: 'Shortcode already exists' });
  }

  const createdAt = new Date();
  const expiresAt = new Date(createdAt.getTime() + validity * 60000); // Convert mins to ms

  // Save URL info
  urlStore[code] = {
    longUrl,
    createdAt,
    expiresAt
  };

  // Init click stats
  clickStats[code] = [];

  // IMPORTANT: Use backend server for redirect
  return res.json({
    code,
    shortUrl: `http://localhost:5000/r/${code}`,
    createdAt,
    expiresAt
  });
};

// GET /r/:code (redirect handler)
exports.redirectURL = (req, res) => {
  const { code } = req.params;
  const data = urlStore[code];

  if (!data) {
    return res.status(404).send('Short URL not found.');
  }

  if (new Date() > new Date(data.expiresAt)) {
    return res.status(410).send('This link has expired.');
  }

  // Save click data (basic)
  clickStats[code].push({
    timestamp: new Date(),
    source: req.headers['user-agent'],
    geo: 'India' // You can integrate IP + location APIs later
  });

  return res.redirect(data.longUrl);
};

// GET /stats (returns all stats)
exports.getStats = (req, res) => {
  const stats = Object.entries(urlStore).map(([code, data]) => ({
    code,
    shortUrl: `http://localhost:5000/r/${code}`, // Return backend redirect URL
    longUrl: data.longUrl,
    createdAt: data.createdAt,
    expiresAt: data.expiresAt,
    totalClicks: clickStats[code]?.length || 0,
    clicks: clickStats[code]
  }));

  return res.json(stats);
};
