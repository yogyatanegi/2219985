import React, { useState } from 'react';
import {
  Container,
  Typography,
  List,
  ListItem,
  Link,
  Box,
  Paper,
  Divider,
} from '@mui/material';
import URLForm from '../components/URLForm';
import './Home.css';

const Home = () => {
  const [urls, setUrls] = useState([]);

  const handleShorten = (data) => {
    setUrls((prev) => [...prev, data]);
  };

  return (
    <Box className="home-section">
      <Container maxWidth="md">
        <Typography variant="h3" className="home-title" gutterBottom>
           Instantly Shorten Your URLs
        </Typography>
        <Typography className="home-subtext">
          Paste your long link and get a compact, trackable URL powered by AI.
        </Typography>

        <Box className="form-area">
          <URLForm onShorten={handleShorten} />
        </Box>

        {urls.length > 0 && (
          <Paper elevation={2} className="result-area">
            <Typography variant="h5" className="result-title">🔗 Shortened Links</Typography>
            <Divider sx={{ my: 2, borderColor: '#2f80ed55' }} />
            <List>
              {urls.map((u, i) => (
                <ListItem key={i} className="result-link-item">
                  <Link
                    href={u.shortUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="short-url-link"
                  >
                    {u.shortUrl}
                  </Link>
                  <span className="expires-at">
                    (expires: {new Date(u.expiresAt).toLocaleString()})
                  </span>
                </ListItem>
              ))}
            </List>
          </Paper>
        )}
      </Container>
    </Box>
  );
};

export default Home;
