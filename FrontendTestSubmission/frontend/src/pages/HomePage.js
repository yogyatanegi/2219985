import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Grid,
  Paper
} from '@mui/material';
import Log from '../utils/log';

const HomePage = () => {
  const [formData, setFormData] = useState([
    { url: '', validity: '', shortcode: '', error: '' },
  ]);

  const [results, setResults] = useState([]);

  // Validation helpers
  const isValidUrl = (url) => {
    try {
      new URL(url);
      return true;
    } catch (_) {
      return false;
    }
  };

  const handleInputChange = (index, field, value) => {
    const updated = [...formData];
    updated[index][field] = value;
    setFormData(updated);
  };

  const addUrlField = () => {
    if (formData.length < 5) {
      setFormData([...formData, { url: '', validity: '', shortcode: '', error: '' }]);
    }
  };

  const validateForm = () => {
    let isValid = true;
    const updated = formData.map((entry) => {
      let error = '';
      if (!isValidUrl(entry.url)) {
        error = 'Invalid URL';
        isValid = false;
        Log("frontend", "error", "form", `Invalid URL: ${entry.url}`);
      } else if (entry.validity && isNaN(parseInt(entry.validity))) {
        error = 'Validity must be a number';
        isValid = false;
        Log("frontend", "error", "form", `Invalid validity for URL: ${entry.url}`);
      }
      return { ...entry, error };
    });

    setFormData(updated);
    return isValid;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    try {
      // Mock API logic for now — replace with real API later
      const now = new Date();
      const res = formData.map((entry, i) => ({
        longUrl: entry.url,
        shortUrl: `http://short.ly/${entry.shortcode || 'auto' + (i + 1)}`,
        expiresAt: entry.validity
          ? new Date(now.getTime() + parseInt(entry.validity) * 60000).toLocaleString()
          : 'Never',
      }));

      setResults(res);
      Log("frontend", "info", "api", "URLs successfully shortened");

    } catch (err) {
      Log("frontend", "error", "api", "Failed to shorten URLs");
    }
  };

  return (
    <Box p={4}>
      <Typography variant="h4" gutterBottom>
        URL Shortener
      </Typography>

      {formData.map((entry, index) => (
        <Paper key={index} elevation={3} style={{ padding: 16, marginBottom: 16 }}>
          <Typography variant="h6">URL {index + 1}</Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Original URL"
                value={entry.url}
                onChange={(e) => handleInputChange(index, 'url', e.target.value)}
                error={!!entry.error}
                helperText={entry.error}
              />
            </Grid>
            <Grid item xs={6} md={3}>
              <TextField
                fullWidth
                label="Validity (minutes)"
                value={entry.validity}
                onChange={(e) => handleInputChange(index, 'validity', e.target.value)}
              />
            </Grid>
            <Grid item xs={6} md={3}>
              <TextField
                fullWidth
                label="Custom Shortcode (optional)"
                value={entry.shortcode}
                onChange={(e) => handleInputChange(index, 'shortcode', e.target.value)}
              />
            </Grid>
          </Grid>
        </Paper>
      ))}

      <Box mb={2}>
        <Button variant="outlined" onClick={addUrlField} disabled={formData.length >= 5}>
          Add another URL
        </Button>
      </Box>

      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Shorten URLs
      </Button>

      <Box mt={4}>
        <Typography variant="h5">Shortened URLs:</Typography>
        {results.map((res, i) => (
          <Paper key={i} elevation={2} style={{ padding: 12, marginTop: 12 }}>
            <Typography><strong>Original:</strong> {res.longUrl}</Typography>
            <Typography><strong>Shortened:</strong> <a href={res.shortUrl}>{res.shortUrl}</a></Typography>
            <Typography><strong>Expires At:</strong> {res.expiresAt}</Typography>
          </Paper>
        ))}
      </Box>
    </Box>
  );
};

export default HomePage;
