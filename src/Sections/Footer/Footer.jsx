import React from 'react';
import { Box, Typography, Link, IconButton, Grid } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TelegramIcon from '@mui/icons-material/Telegram';
import RedditIcon from '@mui/icons-material/Reddit';
import Logo from '/logo.jpg'; // Import your logo

const Footer = () => {
  return (
    <Box sx={{ bgcolor: '#08080e', color: '#fff', p: 4, background: `linear-gradient(to bottom,#000,#0f0c854d)` }}>
      <Grid container spacing={4}>
        {/* Logo and Social Links */}
        <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
          <img src={Logo} alt="Finwing Logo" style={{ width: '150px', marginBottom: '16px' }} />
          <Typography variant="body1" sx={{ mb: 2, fontWeight: 'bold' }}>
            Managed by Finwing
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
            <IconButton href="#" aria-label="YouTube" color="inherit" sx={{ mr: 1 }}>
              <YouTubeIcon />
            </IconButton>
            <IconButton href="#" aria-label="GitHub" color="inherit" sx={{ mr: 1 }}>
              <GitHubIcon />
            </IconButton>
            <IconButton href="#" aria-label="Reddit" color="inherit" sx={{ mr: 1 }}>
              <RedditIcon />
            </IconButton>
            <IconButton href="#" aria-label="Telegram" color="inherit">
              <TelegramIcon />
            </IconButton>
          </Box>
        </Grid>

        {/* Finwing Links */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold', textAlign: 'center' }}>Finwing</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {['Grants', 'Break', 'Media Kit', 'Careers', 'Disclaimer', 'Privacy Policy'].map((link, index) => (
              <Link key={index} href="#" color="inherit" underline="hover" sx={{ mb: 1, textAlign: 'center' }}>
                {link}
              </Link>
            ))}
          </Box>
        </Grid>

        {/* Additional Information (optional) */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold', textAlign: 'center' }}>Contact Us</Typography>
          <Typography variant="body2" sx={{ mb: 1, textAlign: 'center' }}>
            support@finwing.com
          </Typography>
          <Typography variant="body2" sx={{ mb: 1, textAlign: 'center' }}>
            +1 (123) 456-7890
          </Typography>
          <Typography variant="body2" sx={{ textAlign: 'center' }}>
            198 West 21th Street, Suite 721 New York NY 10016
          </Typography>
        </Grid>
      </Grid>

      <Box sx={{ textAlign: 'center', mt: 4, borderTop: '1px solid rgba(255, 255, 255, 0.2)', pt: 2 }}>
        <Typography variant="caption">
          © 2024 Finwing. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
