import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import './Roadmap.css'; // Import the CSS file here

const Roadmap = ({ id }) => {
  const timelineData = [
    {
      year: 'Q1 Jan-March',
      title: 'Foundation Phase',
      points: [
        'Establishing the Finwing Core Team, comprising experts in Finance, Research, Marketing, and Development.',
        'Launching Finwing on prominent centralized social media platforms such as LinkedIn, Instagram, X, and Reddit to expand our outreach.',
        'Expanding our presence to decentralized social media platforms like DESO (Diamond, Desofy, Pearl) to engage with true crypto enthusiasts.',
        'Establishing the official Finwing insights on Medium to provide valuable web3.0 market analysis, and project reviews & updates.',
        'Creating and launching the official Finwing Community on Telegram and Twitter, fostering engagement and discussion within our community.',
        'Launching the initial version (1.0) of the FINWING Website, serving as our one-stop hub for information and interaction.',
      ],
      image: '/roadmap-foundation.png',
    },
    {
      year: 'Q2 April-June',
      title: 'Development Phase',
      points: [
        'Establishing and launching the Finwing Discord server to facilitate real-time communication with our community members and collaboration with other web3.0 establishments.',
        'Initiating Finwing Insights, our comprehensive market analysis and research initiative to democratize web3.0 information for all.',
        'Finwing Crypto Analysts Program Launch: Empowering enthusiasts with tools and knowledge for insightful analysis.',
        'Finwing Whitepaper Release: Unveiling our comprehensive vision and strategic roadmap to bring best decentralized investment management solutions.',
        'Finwing Meme Program Launch: Igniting creativity and community engagement through viral content creation in Web3.0 meme mania.',
        'Finwing Tokenomics Release: Introducing the economic framework and utility behind our native token.',
        'Commencing the Finwing Token Airdrop Program to incentivize community participation and engagement.',
        'Finwing Events in 7 Countries: Strengthening global connections and fostering communal collaboration across borders.',
        'Testnet Launch of Finwing Vaults: Pioneering decentralized investment opportunities for real-world testing and refinement.',
      ],
      image: '/roadmap-development.png',
    },
    {
      year: 'Q3 July-Sept',
      title: 'Refinement Phase',
      points: [
        'Additional details to be added for this phase.',
      ],
      image: '/roadmap-refinement.png',
    },
    {
      year: 'Q4 Oct-Dec',
      title: 'Mainnet Launch Phase',
      points: [
        'Additional details to be added for this phase.',
      ],
      image: '/roadmap-mainnet.png',
    },
  ];

  return (
    <>
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
      <section id="timeline">
        {timelineData.map((item, index) => (
          <div className="tl-item" key={index}>
            <div className="tl-bg" style={{ backgroundImage: `url(${item.image})` }}></div>
            <div className="tl-year">
              <p>{item.year}</p>
            </div>
            <div className="tl-content">
              <h1>{item.title}</h1>
              <ul>
                {item.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Roadmap;
