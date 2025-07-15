import React, { useState } from 'react';
import { Button, TextField, Box, Typography } from '@mui/material';
import axios from 'axios';

const URLForm = ({ onShorten }) => {
  const [url, setUrl] = useState('');
  const [validity, setValidity] = useState('');
  const [code, setCode] = useState('');

  const handleSubmit = async () => {
    try {
      const res = await axios.post('http://localhost:5000/shorten', {
        longUrl: url,
        validity: validity ? parseInt(validity) : undefined,
        shortcode: code || undefined
      });
      onShorten(res.data);
      setUrl('');
      setValidity('');
      setCode('');
    } catch (err) {
      alert(err.response?.data?.error || 'Error shortening URL');
    }
  };

  return (
    <Box sx={{ mt: 3 }}>
      <Typography variant="h5">Shorten a URL</Typography>
      <TextField fullWidth label="Long URL" value={url} onChange={e => setUrl(e.target.value)} sx={{ my: 1 }} />
      <TextField fullWidth label="Validity (mins)" value={validity} onChange={e => setValidity(e.target.value)} sx={{ my: 1 }} />
      <TextField fullWidth label="Custom Code (optional)" value={code} onChange={e => setCode(e.target.value)} sx={{ my: 1 }} />
      <Button variant="contained" onClick={handleSubmit}>Shorten</Button>
    </Box>
  );
};

export default URLForm;
