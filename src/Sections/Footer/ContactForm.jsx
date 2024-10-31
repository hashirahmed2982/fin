import React from 'react';
import { Box, Grid, Typography, TextField, Button, IconButton } from '@mui/material';
import PlaceIcon from '@mui/icons-material/Place'; // For the address
import PhoneIcon from '@mui/icons-material/Phone'; // For the phone
import EmailIcon from '@mui/icons-material/Email'; // For the email
import PublicIcon from '@mui/icons-material/Public'; // For the website

const ContactForm = ({id}) => {
  return (
    <Box id={id} sx={{ p: 4, maxWidth: 'lg', margin: 'auto', borderRadius: '8px' }}>
      <Grid container spacing={8}>
        {/* Contact Form */}
        <Grid item xs={12} md={6}>
          <Box 
              sx={{
                p: 4,
                backgroundColor: '#121212', // Dark background color
                color: '#ffffff',
                borderRadius: '8px',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                position: 'relative', // Needed for the spotlight effect
                background: 'radial-gradient(circle at 50% 50%, rgba(57, 114, 255, 0.25) 0%, rgba(0, 0, 0, 0) 70%)', // Static gradient
                boxShadow: '0 6px 15px rgba(0, 0, 0, 0.5)', // Enhanced shadow
                border: '1px solid rgba(255, 255, 255, 0.1)', // Very dull white border
                transition: 'transform 0.3s ease, border-color 0.3s ease', // Transition for scaling and border color
                '&:hover': {
                  transform: 'scale(1.02)', // Slightly scale up on hover
                  border: '1px solid rgba(255, 255, 255, 0.4)', // Increase border visibility on hover
                },
              }}
          >
            <Typography variant="h6" sx={{ mb: 2, color: '#b3b3b3', fontWeight: 'bold' }}>
              Get in Touch
            </Typography>

            {/* Form Fields */}
            <form>
              <TextField
                fullWidth
                label="Full Name"
                variant="outlined" // Change to outlined
                size="small"
                margin="dense"
                sx={{
                  mb: 2,
                  input: { color: 'white' }, // Text color
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: 'transparent', // Make background transparent
                    '& fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.2)', // Thin outline color (almost transparent)
                      borderWidth: '1px', // Very thin border
                    },
                    '&:hover fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.4)', // Outline color on hover
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'rgba(57, 114, 255, 0.5)', // Outline color when focused
                    },
                  },
                  '& label': {
                    color: '#b3b3b3',
                  },
                }}
              />
              <TextField
                fullWidth
                label="Email Address"
                variant="outlined" // Change to outlined
                size="small"
                margin="dense"
                sx={{
                  mb: 2,
                  input: { color: 'white' }, // Text color
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: 'transparent', // Make background transparent
                    '& fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.2)', // Thin outline color (almost transparent)
                      borderWidth: '1px', // Very thin border
                    },
                    '&:hover fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.4)', // Outline color on hover
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'rgba(57, 114, 255, 0.5)', // Outline color when focused
                    },
                  },
                  '& label': {
                    color: '#b3b3b3',
                  },
                }}
              />
              <TextField
                fullWidth
                label="Subject"
                variant="outlined" // Change to outlined
                size="small"
                margin="dense"
                sx={{
                  mb: 2,
                  input: { color: 'white' }, // Text color
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: 'transparent', // Make background transparent
                    '& fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.2)', // Thin outline color (almost transparent)
                      borderWidth: '1px', // Very thin border
                    },
                    '&:hover fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.4)', // Outline color on hover
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'rgba(57, 114, 255, 0.5)', // Outline color when focused
                    },
                  },
                  '& label': {
                    color: '#b3b3b3',
                  },
                }}
              />
              <TextField
                fullWidth
                label="Message"
                variant="outlined" // Change to outlined
                size="small"
                margin="dense"
                multiline
                rows={4}
                sx={{
                  mb: 2,
                  input: { color: 'white' }, // Text color
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: 'transparent', // Make background transparent
                    '& fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.2)', // Thin outline color (almost transparent)
                      borderWidth: '1px', // Very thin border
                    },
                    '&:hover fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.4)', // Outline color on hover
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'rgba(57, 114, 255, 0.5)', // Outline color when focused
                    },
                  },
                  '& label': {
                    color: '#b3b3b3',
                  },
                }}
              />

              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  mt: 2,
                  backgroundColor: '#3972ff',
                  color: 'white',
                  textTransform: 'none',
                  '&:hover': {
                    backgroundColor: '#609bff',
                  },
                }}
              >
                Send Message
              </Button>
            </form>
          </Box>
        </Grid>

        {/* Static Map Image */}
        <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Box sx={{ width: '100%', textAlign: 'center' }}>
            <img
              src="/contact.png"
              alt="Map Placeholder"
              style={{ width: '100%', height: '100%', borderRadius: '8px' }}
            />
          </Box>
        </Grid>
      </Grid>

      {/* Contact Information */}
      <Grid container spacing={4} sx={{ mt: 8, color: '#b3b3b3', textAlign: 'center' }}>
        <Grid item xs={12} md={3}>
          <IconButton>
            <PlaceIcon sx={{ fontSize: 30, color: '#609bff' }} />
          </IconButton>
          <Typography>198 West 21th Street, Suite 721 New York NY 10016</Typography>
        </Grid>
        <Grid item xs={12} md={3}>
          <IconButton>
            <PhoneIcon sx={{ fontSize: 30, color: '#609bff' }} />
          </IconButton>
          <Typography>
           <a href="tel:+1235235598" style={{ color: 'inherit' }}>+1235 2355 98</a>
          </Typography>
        </Grid>
        <Grid item xs={12} md={3}>
          <IconButton>
            <EmailIcon sx={{ fontSize: 30, color: '#609bff' }} />
          </IconButton>
          <Typography>
            <a href="mailto:info@yoursite.com" style={{ color: 'inherit' }}>info@yoursite.com</a>
          </Typography>
        </Grid>
        <Grid item xs={12} md={3}>
          <IconButton>
            <PublicIcon sx={{ fontSize: 30, color: '#609bff' }} />
          </IconButton>
          <Typography>
            <a href="https://yoursite.com" style={{ color: 'inherit' }}>yoursite.com</a>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactForm;
