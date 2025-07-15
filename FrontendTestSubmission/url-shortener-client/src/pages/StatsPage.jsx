import React, { useEffect, useState } from 'react';
import {
  Container,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  CircularProgress,
  Link,
} from '@mui/material';
import axios from 'axios';

const StatsPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('http://localhost:5000/stats')
      .then((res) => setData(res.data))
      .catch((err) => alert('Failed to fetch stats'))
      .finally(() => setLoading(false));
  }, []);

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom align="center">
        URL Statistics
      </Typography>

      {loading ? (
        <CircularProgress sx={{ display: 'block', margin: '40px auto' }} />
      ) : data.length === 0 ? (
        <Typography align="center" color="text.secondary">
          No shortened URLs found.
        </Typography>
      ) : (
        <Paper elevation={3} sx={{ mt: 2, overflowX: 'auto' }}>
          <Table>
            <TableHead sx={{ backgroundColor: '#f5f5f5' }}>
              <TableRow>
                <TableCell><strong>Short URL</strong></TableCell>
                <TableCell><strong>Clicks</strong></TableCell>
                <TableCell><strong>Expires At</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((u, i) => (
                <TableRow key={i}>
                  <TableCell>
                    <Link href={u.shortUrl} target="_blank" rel="noopener">
                      {u.shortUrl}
                    </Link>
                  </TableCell>
                  <TableCell>{u.totalClicks}</TableCell>
                  <TableCell>
                    {new Date(u.expiresAt).toLocaleString()}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      )}
    </Container>
  );
};

export default StatsPage;
