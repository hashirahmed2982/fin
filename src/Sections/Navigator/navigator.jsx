/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, Container, Grid, Icon, useMediaQuery } from '@mui/material';
import { ParallaxProvider } from 'react-scroll-parallax';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer'; // Import useInView
import image1 from '/pose3.png';
import image2 from '/myda1.png';
import image3 from '/cym.png';
import graph1 from '/graph.jpg'; // Import your graph images
import graph2 from '/graph2.jpg';
import graph3 from '/graph3.jpg';
import graph4 from '/graph4.jpg';
import BackgroundImage from '/navigator1.png';


import './style.css';
const statements = [
  {
    text: "You Control Your Money",
    description: "We believe your financial sovereignty should remain in your hands, not under the control of centralized institutions, Wall Street bankers, or questionable financial managers. At Finwing, our Financial Pilots provide unmatched expertise without taking possession of your money, charging fees, or applying hidden costs.",
    image: image3
  },
  {
    text: "You Manage Your Digital Assets",
    description: "With Finwing Consultancy, you maintain full control over your crypto assets, actively monitoring your capital allocations while mastering the dynamics of the crypto markets. Our approach equips you with the knowledge and tools to confidently navigate the decentralized world, empowering you to make informed decisions.",
    image: image2
  },
  // {
  //   text: "Generating Risk-Averse Alpha Returns",
  //   description: "",
  //   image: image3
  // },
];
const graphs = [graph1, graph2, graph3, graph4];

const Navigator = ({ onIndexChange, id }) => {
  const isMobile = useMediaQuery('(max-width:768px)');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [canScroll, setCanScroll] = useState(true);
  const timerRef = useRef(null);

  // useInView hook to track visibility of the Navigator component
  const { ref, inView } = useInView({
    threshold: 0.8, // Trigger when 80% of the component is visible
  });


  const handleScroll = (event) => {
    console.log(canScroll)
    console.log(event)
    console.log(inView)

    if (!canScroll || !inView) return; // Prevent scrolling if not allowed or not in view




    if (event.deltaY > 0 && currentIndex < 1) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      onIndexChange(nextIndex);
      console.log(nextIndex)


    } else if (event.deltaY < 0 && currentIndex > 0) {
      const prevIndex = currentIndex - 1;
      setCurrentIndex(prevIndex);
      onIndexChange(prevIndex);


    }
    else if (event.deltaY > 0 && currentIndex >= 2) {
      onIndexChange(currentIndex);
    }
    else if (event.deltaY < 0 && currentIndex <= 0) {
      onIndexChange(currentIndex);
    }

  };

  useEffect(() => {
    const handleWheel = (event) => handleScroll(event);
    window.addEventListener('wheel', handleWheel);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      clearTimeout(timerRef.current); // Cleanup on unmount
    };
  }, [currentIndex, canScroll, inView]); // Add inView as a dependency

  return (

    <Box
      id={id}
      ref={ref}
      component="section"
      sx={{
        position: 'relative',
        minHeight: '400px',
        height: 'auto',
        overflow: 'hidden',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 4,
        mt: 33,
        
      }}
    >
      
      <Container maxWidth="xl">
      <Box
        sx={{
          background: `linear-gradient(to bottom, rgba(8, 8, 14, 1) 0%, rgba(8, 8, 14, 0.7) 40%, rgba(8, 8, 14, 0.7) 60%, rgba(8, 8, 14, 1) 100%), url(${BackgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          py: 12,
          textAlign: 'center',
          color: '#ffffff',
          mb:5
        }}
      >
        <Container sx={{ position: 'relative', zIndex: 2, textAlign: isMobile ? 'center' : 'center' }}>
        <Typography 
          variant={isMobile ? 'h4' : 'h3'} 
          sx={{ fontWeight: 'bold', mb: 3, textTransform: 'uppercase', letterSpacing: '2px' }}
        >
          <span style={{ color: '#1a73e8' }}>Finwing</span> Navigator
        </Typography>
        <Typography variant={isMobile ? 'body1' : 'h6'} sx={{ opacity: 0.9, maxWidth: '800px', margin: '0 auto' }}>
        </Typography>
      </Container>
      </Box>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
              >
                <Typography
                  variant="h3"
                  gutterBottom
                  sx={{
                    fontWeight: 700,
                    fontSize: '2.5rem',

                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
                  }}
                >
                  <span style={{ color: '#white' }}>
                    {statements[currentIndex].text.slice(0, statements[currentIndex].text.length / 2)}
                  </span>
                  <span style={{ color: '#1976d2' }}>
                    {statements[currentIndex].text.slice(statements[currentIndex].text.length / 2)}
                  </span>
                </Typography>
                {currentIndex < 2 ? (
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: '1.25rem',
                      color: '#ffffff',
                      marginTop: '1rem',
                    }}
                  >
                    {statements[currentIndex].description}
                  </Typography>
                ) : (
                  <graph1></graph1>
                )}
              </motion.div>
            </AnimatePresence>
          </Grid>

          <Grid item xs={12} md={6}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
              >

                <Box
                  component="img"
                  src={statements[currentIndex].image}
                  alt={`image-${currentIndex + 1}`}
                  sx={{
                    maxHeight: '400px',
                    maxWidth: '500px',
                    width: '100%',
                    height: '100%',
                    borderRadius: 3,
                    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.5)',
                    objectFit: 'contain',
                  }}
                />





              </motion.div>
            </AnimatePresence>
          </Grid>
        </Grid>
      </Container>

    </Box>

  );
};

export default Navigator;