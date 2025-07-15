import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CircularProgress, Typography, Container } from '@mui/material';
import axios from 'axios';

const RedirectPage = () => {
  const { code } = useParams();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`http://localhost:5000/r/${code}`)
      .then((res) => {
        window.location.href = res.data.longUrl;
      })
      .catch((err) => {
        if (err.response?.status === 404) setError('URL not found.');
        else if (err.response?.status === 410) setError('Link has expired.');
        else setError('An error occurred while redirecting.');
      })
      .finally(() => setLoading(false));
  }, [code]);

  return (
    <Container sx={{ mt: 5, textAlign: 'center' }}>
      {loading ? (
        <>
          <CircularProgress />
          <Typography sx={{ mt: 2 }}>Redirecting...</Typography>
        </>
      ) : (
        <Typography color="error">{error}</Typography>
      )}
    </Container>
  );
};

export default RedirectPage;
