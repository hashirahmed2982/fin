import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import { ParallaxProvider } from 'react-scroll-parallax';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import image1 from '/pose3.png';
import image2 from '/pose5.png';
import image3 from '/pose3.png';

const statements = [
  { text: "You Control Your Money", image: image1 },
  { text: "You Manage Your Digital Assets", image: image2 },
  { text: "Generating Risk-Averse Alpha Returns", image: image3 },
];

const Navigator = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.1,// Trigger when 50% of the section is in view
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % statements.length);
      }, 3000); // Change content every 3 seconds

      return () => clearInterval(interval);
    }
  }, [inView]);

  return (
    <ParallaxProvider>
      <Box
        ref={ref}
        component="section"
        sx={{
          position: 'relative',
          height: '100vh',
          overflow: 'hidden',
          backgroundColor: '#000000',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <Typography variant="h4" gutterBottom>
                  {statements[currentIndex].text}
                </Typography>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={6}>
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
              >
                <Box
                  component="img"
                  src={statements[currentIndex].image}
                  alt={`image-${currentIndex + 1}`}
                  sx={{ width: '100%', borderRadius: 2 }}
                />
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ParallaxProvider>
  );
};

export default Navigator;
