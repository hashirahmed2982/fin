import React, { useRef } from 'react';
import { Box, Typography, Container, Grid, Paper } from '@mui/material';
import { motion, useInView } from 'framer-motion';
import BusinessIcon from '@mui/icons-material/Business';
import BarChartIcon from '@mui/icons-material/BarChart';
import DescriptionIcon from '@mui/icons-material/Description';
import LayersIcon from '@mui/icons-material/Layers';
import BackgroundImage from '/accelarator.png';

const FinwingAccelerator = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, margin: '-50px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.6, when: 'beforeChildren' },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 20, duration: 0.8, delay: index * 0.2 },
    }),
  };

  return (
    <Box sx={{ backgroundColor: '#08080e', py: 10 }}>
      <Box
        sx={{
          background: `linear-gradient(to bottom, rgba(8, 8, 14, 1) 0%, rgba(8, 8, 14, 0.7) 40%, rgba(8, 8, 14, 0.7) 60%, rgba(8, 8, 14, 1) 100%), url(${BackgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          py: 12,
          textAlign: 'center',
          color: '#ffffff',
        }}
      >
        <Container sx={{ position: 'relative', zIndex: 2 }}>
          <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 3, textTransform: 'uppercase', letterSpacing: '2px' }}>
            <span style={{ color: '#1a73e8' }}>Finwing</span> Accelerator
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.9 }}>
            Launch, Scale & Sustain your Web3.0 Project
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ textAlign: 'center', my: 10 }}>
        <Box sx={{ mb: 8 }}>
          <LayersIcon sx={{ fontSize: 64, color: '#1a73e8', mb: 3 }} />
          <Typography variant="body1" sx={{ color: '#c7c7c7', lineHeight: 1.6, mb: 2 }}>
            Over 80% of Web3.0 startups fail due to lack of proper market positioning, flawed business models, and weak investor narratives. It doesn’t have to be that way.
          </Typography>
          <Typography variant="h6" sx={{ color: '#ffffff', mb: 4, letterSpacing: '1px' }}>
            "Your Web3.0 Startup Accelerator"
          </Typography>
          <Typography variant="body1" sx={{ color: '#c7c7c7', lineHeight: 1.6 }}>
            We offer tailored strategies, investor-ready pitch decks, competitive market insights, and expert white paper development to ensure your startup's success.
          </Typography>
        </Box>
      </Container>

      <Container
        maxWidth="lg"
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        component={motion.div}
        ref={containerRef}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <Grid container spacing={3} alignItems="stretch" justifyContent="center">
          {[{
            title: 'Business Models Orientation',
            icon: <BusinessIcon sx={{ fontSize: 48, color: '#1a73e8', mb: 3 }} />,
            details: [
              'Develop sustainable, scalable business models that leverage blockchain technology.',
              'Identify potential revenue streams from token sales, transaction fees, and premium services.',
              'Position your project uniquely in the Web3.0 ecosystem.',
            ],
          }, {
            title: 'Pitch Deck Development',
            icon: <LayersIcon sx={{ fontSize: 48, color: '#1a73e8', mb: 3 }} />,
            details: [
              'Create investor-focused pitch decks that capture your vision and market opportunity.',
              'Craft compelling narratives that highlight the potential of your Web3.0 project.',
            ],
          }, {
            title: 'Competitive Analysis Report',
            icon: <BarChartIcon sx={{ fontSize: 48, color: '#1a73e8', mb: 3 }} />,
            details: [
              'Conduct thorough market research to understand competition and uncover market gaps.',
              'Benchmark your offerings against industry leaders and identify areas for innovation.',
              'Gain strategic insights to stand out and achieve a competitive edge.',
            ],
          }, {
            title: 'White & Lite Papers',
            icon: <DescriptionIcon sx={{ fontSize: 48, color: '#1a73e8', mb: 3 }} />,
            details: [
              'Develop detailed, technically sound white papers that outline your project’s vision and strategy.',
              'Create high-level lite papers that highlight key elements of your project for both investors and users.',
              'Ensure clarity and precision in your technical writing and editing.',
            ],
          }].map(({ title, icon, details }, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <motion.div
                variants={itemVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                custom={index} // Pass index to itemVariants for staggered effect
              >
                <Paper
                  elevation={4}
                  sx={{
                    p: 4,
                    backgroundColor: '#121212',
                    color: '#ffffff',
                    borderRadius: '8px',
                    minHeight: '440px', // Set a fixed height for uniformity
                    
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    textAlign: 'center',
                    background: 'radial-gradient(circle at 50% 50%, rgba(57, 114, 255, 0.25) 0%, rgba(0, 0, 0, 0) 70%)',
                    boxShadow: '0 6px 15px rgba(0, 0, 0, 0.5)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    transition: 'transform 0.3s ease, border-color 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.02)',
                      border: '1px solid rgba(255, 255, 255, 0.4)',
                    },
                  }}
                >
                  {icon}
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 'bold',
                      mb: 2,
                      textTransform: 'uppercase',
                      color: '#ffffff',
                    }}
                  >
                    {title}
                  </Typography>
                  {details.map((detail, i) => (
                    <Typography key={i} variant="body2" sx={{ mb: 2, lineHeight: 1.5 }}>
                      {detail}
                    </Typography>
                  ))}
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default FinwingAccelerator;