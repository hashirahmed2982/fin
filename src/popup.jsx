import React, { useState, useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CloseIcon from '@mui/icons-material/Close';
import './popup.css';

const FloatingPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setIsVisible((prev) => !prev);
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  const handleAppointmentClick = () => {
    window.open("https://calendly.com/theshieldtech/finwingconsultancy", "_blank");
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
        right: { xs: '10px', sm: '20px' },
        width: { xs: '90%', sm: '300px' },
        background: 'rgba(0, 0, 0, 0.85)',
        borderRadius: '16px',
        boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.7)',
        color: '#fff',
        overflow: 'hidden',
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'column',
        backgroundImage: 'radial-gradient(circle, rgba(0, 0, 0, 0.9) 50%, rgba(57, 114, 255, 0.3))',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: 2,
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '16px' ,textAlign: 'center' }}>
          Make an Appointment
        </Typography>
        
      </Box>
      <Typography
        variant="body2"
        sx={{ px: 2, mb: 1, color: '#f0f0f0', lineHeight: '1.5' }}
      >
        Need expert advice? Book a Free Meeting with Finwing Consultants to discuss your Web3.0 Goals.
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
      <CloseIcon
          sx={{ position: "absolute", top: 10, right: 10,cursor: 'pointer', color: '#fff', fontSize: '20px' }}
          onClick={handleClose}
        />
    </Box>
  );
};

export default FloatingPopup;
