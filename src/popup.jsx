import React, { useState, useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'; // Cool calendar icon
import CloseIcon from '@mui/icons-material/Close';
import './popup.css'; // Styles for animations and layout

const FloatingPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show the popup on load, then toggle visibility every 15 seconds
    setIsVisible(true);
    const interval = setInterval(() => {
      setIsVisible((prev) => !prev);
    }, 15000); // 15 seconds interval
    return () => clearInterval(interval);
  }, []);

  const handleAppointmentClick = () => {
    window.open("https://calendly.com/your-link", "_blank"); // Replace with your Calendly link
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <Box
      className={`floating-popup ${isVisible ? 'show' : 'hide'}`}
      sx={{
        position: 'fixed',
        bottom: '20px',
        right: '20px', // Adjust to "left: 20px" for bottom-left positioning
        width: '300px',
        background: 'rgba(0, 0, 0, 0.85)', // Darker background
        borderRadius: '16px',
        boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.7)', // Slight bluish shadow
        color: '#fff', // White text
        overflow: 'hidden',
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'column',
        backgroundImage: 'radial-gradient(circle, rgba(0, 0, 0, 0.9) 50%, rgba(57, 114, 255, 0.3))', // Slight bluish spotlight
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          p: 2,
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '16px' }}>
          Make an Appointment
        </Typography>
        <CloseIcon
          sx={{
            cursor: 'pointer',
            color: '#fff',
            fontSize: '20px',
          }}
          onClick={handleClose}
        />
      </Box>
      <Typography
        variant="body2"
        sx={{ px: 2, mb: 1, color: '#f0f0f0', lineHeight: '1.5' }}
      >
        Need expert advice? Book a meeting with us now to discuss your goals and plans!
      </Typography>
      <Button
        onClick={handleAppointmentClick}
        variant="contained"
        sx={{
          m: 2,
          background: '#fff',
          color: '#3972ff',
          textTransform: 'none',
          fontWeight: 'bold',
          '&:hover': {
            background: '#e6e6e6',
          },
        }}
        startIcon={<CalendarMonthIcon />}
      >
        Book Now
      </Button>
    </Box>
  );
};

export default FloatingPopup;
