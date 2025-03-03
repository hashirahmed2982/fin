import React from 'react';
import { Box, Container, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const MobileRoadmap = ({ id }) => {
  const timelineData = [
    {
      year: 'Q1 Jan-March',
      title: 'Foundation Phase',
      points: [
        'Establishing the Finwing Core Team.',
        'Launching Finwing on centralized social media platforms.',
        'Expanding to decentralized social media platforms.',
        'Creating official Finwing insights on Medium.',
        'Launching the official Finwing Community on Telegram and Twitter.',
        'Launching version 1.0 of the FINWING Website.',
      ],
    },
    {
      year: 'Q2 April-June',
      title: 'Development Phase',
      points: [
        'Launching the Finwing Discord server.',
        'Initiating Finwing Insights.',
        'Finwing Crypto Analysts Program Launch.',
        'Finwing Whitepaper Release.',
        'Finwing Meme Program Launch.',
        'Finwing Tokenomics Release.',
        'Commencing the Finwing Token Airdrop Program.',
        'Finwing Events in 7 Countries.',
        'Testnet Launch of Finwing Vaults.',
      ],
    },
    {
      year: 'Q3 July-Sept',
      title: 'Refinement Phase',
      points: ['Additional details to be added for this phase.'],
    },
    {
      year: 'Q4 Oct-Dec',
      title: 'Mainnet Launch Phase',
      points: ['Additional details to be added for this phase.'],
    },
  ];

  return (
    <Container id={id} sx={{ color: 'white', textAlign: 'center', py: 4 }}>
      <Container
              id={id}
              sx={{
                maxWidth: 'xl',
                height: 'auto',
                color: 'white',
                textAlign: 'center',
              }}
            >
              <Box display="flex" justifyContent="center" alignItems="center" sx={{ mr: 6 }}>
                <img
                  src="/section.png" // Replace with your image path or URL
                  alt="Icon"
                  style={{ width: 100, height: 108, marginRight: 0, objectFit: 'contain', verticalAlign: 'middle' }} // Add verticalAlign and objectFit if needed
                />
                <Typography
                  variant="h6"
                  sx={{
                    color: '#FFFFFF', // White text color
                    fontWeight: 'bold',
                    letterSpacing: '2px' // Adjust letter spacing
                  }} // Remove mb and pb for better alignment
                >
                  ROADMAP 2025
                </Typography>
              </Box>
            </Container>
      {timelineData.map((item, index) => (
        <Accordion key={index} sx={{ bgcolor: '#031625', color: 'white', my: 1 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}>
            <Typography sx={{ fontWeight: 'bold' }}>{item.year} - {item.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ul>
              {item.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </AccordionDetails>
        </Accordion>
      ))}
    </Container>
  );
};

export default MobileRoadmap;
