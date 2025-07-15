import React, { useState } from 'react';
import { Container, Typography, List, ListItem, Link } from '@mui/material';
import URLForm from '../components/URLForm';

const Home = () => {
  const [urls, setUrls] = useState([]);

  const handleShorten = (data) => {
    setUrls(prev => [...prev, data]);
  };

  return (
    <Container>
      <Typography variant="h3" gutterBottom>URL Shortener</Typography>
      <URLForm onShorten={handleShorten} />
      <List>
        {urls.map((u, i) => (
          <ListItem key={i}>
            <Link href={u.shortUrl} target="_blank">{u.shortUrl}</Link> (expires at: {new Date(u.expiresAt).toLocaleString()})
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Home;
