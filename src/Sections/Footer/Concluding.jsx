import React from 'react';
import { Box, Grid, Typography, TextField, Button } from '@mui/material';
import AstronautImage from '/conn.png'; // Ensure this path is correct

const Concluding = ({id}) => {
  return (
    <Box
    id={id}
      sx={{
        position: 'relative',
        height: '60vh',
        background: `radial-gradient(circle, #0701ef4d 0%, #08080e 45%)`, // Spotlight effect
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        p: 8,
      }}
    >
      <Grid container alignItems="center">
        {/* Left Text */}
        <Grid item xs={5} sx={{ textAlign: 'right', pr: 20 }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: '400',
              textTransform: 'uppercase',
              color: '#fff',
            }}
          >
            Be Part
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontWeight: '400',
              textTransform: 'uppercase',
              color: '#2979ff', // Blue color for "Of Our"
            }}
          >
            Of Our
          </Typography>
        </Grid>

        {/* Center Image */}
        <Grid item xs={2} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Box
            component="img"
            src={AstronautImage}
            alt="Astronaut"
            sx={{ width: '150%', maxWidth: '600px' }}
          />
        </Grid>

        {/* Right Text */}
        <Grid item xs={5} sx={{ textAlign: 'left', pl: 20 }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: '400',
              textTransform: 'uppercase',
              color: '#2979ff', // Blue color for "Our"
            }}
          >
            Our
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontWeight: '400',
              textTransform: 'uppercase',
              color: '#fff',
            }}
          >
            Mission
          </Typography>
        </Grid>

        {/* Subscribe Section */}
        <Grid item xs={12} sx={{ mt: 4, textAlign: 'center' }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Subscribe to Our Newsletter
          </Typography>
          <Box
            component="form"
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 2,
              maxWidth: '600px', // Max width of the entire form
              margin: '0 auto',
            }}
          >
            <TextField
              variant="outlined"
              placeholder="Enter your email"
              sx={{
                bgcolor: '#585a5f69',
                color: "#fff",
                width: '70%', // Wider width for modern look
                 height: 'auto'// Reduce height for sleekness
              }}
            />
            <Button
              variant="contained"
              color="primary"
              sx={{
                bgcolor: '#2979ff',
                color: '#fff',
                textTransform: 'uppercase',
                fontWeight: 'bold',
                 // Match the height of TextField
                px: 4, // Padding for button width
                '&:hover': {
                  bgcolor: '#1c54b2',
                },
              }}
            >
              Subscribe
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Concluding;
