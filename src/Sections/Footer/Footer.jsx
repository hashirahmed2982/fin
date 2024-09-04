// src/components/Footer.jsx
import React from 'react';
import { Box, Typography, Link, IconButton, Grid, TextField, Button } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TelegramIcon from '@mui/icons-material/Telegram';
import RedditIcon from '@mui/icons-material/Reddit';
import Logo from '/logo.jpg'; // Import your logo

const Footer = () => {
  return (
    <Box sx={{  bgcolor: '#00000',
        color: '#fff',
        p: 4,
        background: `radial-gradient(circle at top center,#0701ef4d 0%,  #000000 40%)`}}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
          <img src={Logo} alt="Company Logo" style={{ width: '150px', marginBottom: '16px' }} />
          <Typography variant="body1" sx={{ mb: 2 }}>
            Managed by Finwing
          </Typography>
          <IconButton href="#" color="inherit" sx={{ mr: 1 }}><YouTubeIcon /></IconButton>
          <IconButton href="#" color="inherit" sx={{ mr: 1 }}><GitHubIcon /></IconButton>
          <IconButton href="#" color="inherit" sx={{ mr: 1 }}><RedditIcon /></IconButton>
          <IconButton href="#" color="inherit"><TelegramIcon /></IconButton>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h6" sx={{ mb: 2 }}>Finwing</Typography>
          <Link href="#" color="inherit" underline="hover" sx={{ display: 'block', mb: 1 }}>Grants</Link>
          <Link href="#" color="inherit" underline="hover" sx={{ display: 'block', mb: 1 }}>Break</Link>
          <Link href="#" color="inherit" underline="hover" sx={{ display: 'block', mb: 1 }}>Media Kit</Link>
          <Link href="#" color="inherit" underline="hover" sx={{ display: 'block', mb: 1 }}>Careers</Link>
          <Link href="#" color="inherit" underline="hover" sx={{ display: 'block', mb: 1 }}>Disclaimer</Link>
          <Link href="#" color="inherit" underline="hover" sx={{ display: 'block', mb: 1 }}>Privacy Policy</Link>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h6" sx={{ mb: 2 }}>Contact Us</Typography>
          <form>
            <TextField
              fullWidth
              label="Your Email"
              variant="filled"
              size="small"
              margin="dense"
              sx={{  borderRadius: '4px' }}
            />
            <TextField
              fullWidth
              label="Message"
              variant="filled"
              size="small"
              margin="dense"
              multiline
              rows={4}
              sx={{ bgcolor: '#FFF', borderRadius: '4px' }}
            />
            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 2, bgcolor: '#1e88e5', ':hover': { bgcolor: '#1565c0' } }}
              fullWidth
            >
              Send
            </Button>
          </form>
        </Grid>
      </Grid>
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Typography variant="caption">
          © 2024 Finwing. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
