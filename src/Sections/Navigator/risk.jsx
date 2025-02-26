/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import { ParallaxProvider } from 'react-scroll-parallax';

import graph1 from '/graph.jpg'; // Import your graph images
import graph2 from '/graph2.jpg';
import graph3 from '/graph3.jpg';
import graph4 from '/graph4.jpg';
import Carousel from '../../carousel/carousel';

const statements = [
  {
    text: "Generating Risk-Averse Alpha Returns",
  },
];
const graphs = [graph1, graph2, graph3, graph4];

const Risk = ({id}) => {
  return (
    <ParallaxProvider>
      <Box
      id={id}
        component="section"
        sx={{
          position: 'relative',
          
          height: 'auto',
          overflow: 'hidden',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 4,
          mt: 5,
        }}
      >
        <Container maxWidth="xl">
          {/* <Typography
            variant="h6"
            sx={{ color: '#f9b81f', letterSpacing: '3px', mb: 2, pb: 2 }}
          >
            Navigator
          </Typography> */}
          <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
              <Carousel images={graphs} />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h3"
                sx={{
                  
                  fontWeight: 'bold',
                  mb: 3,
                }}
              >
                <span style={{ color: '#white' }}>
                    {statements[0].text.slice(0, statements[0].text.length / 2)}
                  </span>
                  <span style={{ color: '#1976d2' }}>
                    {statements[0].text.slice(statements[0].text.length / 2)}
                  </span>
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: '1.25rem',
                  color: 'white',
                  mb: 2,
                }}
              >
                {/* Additional descriptive text can go here if needed */}
                A strategy focused on maximizing returns while minimizing risk.
              </Typography>
            </Grid>
            
          </Grid>
        </Container>
      </Box>
    </ParallaxProvider>
  );
};

export default Risk;
