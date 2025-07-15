const express = require('express');
const router = express.Router();
const { shortenURL, redirectURL, getStats } = require('../controllers/urlController');

router.post('/shorten', shortenURL);
router.get('/r/:code', redirectURL);
router.get('/stats', getStats);

module.exports = router;
