/* eslint-disable react/prop-types */
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import { useState } from 'react';
import Services from './services';

const Ecosystem = ({ id }) => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (item) => {
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const surroundingItems = [
    {
      title: 'ARCHITECT',
      color: 'white',
      icon: '/architect1.png',
      tagline: 'Revolutionizing Businesses through Seamless Blockchain Integration',
      description: 'For Greater Efficiency, Security, and Growth.',
      services: [
        'Blockchain Solution for Supply Chain Management',
        'Integrating Financial Accounting On Chain',
        'Tracking Employee Management through Blockchain',
      ],
      scroll : 'architect'
    },
    
    
    {
      title: 'INSIGHTS',
      color: 'white',
      icon: '/insights1.png',
      tagline: 'Unlocking Strategic Insights',
      description: 'Analytics, trends, and knowledge to keep you ahead in the rapidly evolving digital landscape.',
      services: [
        'Market Analytics',
        'Industry Trends',
        'Strategic Knowledge Base',
      ],
      scroll : 'insights'
    },
    {
      title: 'VAULTS',
      color: 'white',
      icon: '/vaults2.png',
      tagline: 'Navigating the Future of Web3.0 Finance with Finwing Investment Vaults',
      description: 'Testnet Phase ⅔ Ongoing.',
      services: [],
      grandVisual: true, // Indicating this item should have grand visuals
      scroll : 'vaults'
    },
    {
      title: 'FOUNDRY',
      color: 'white',
      icon: '/foundry1.png',
      tagline: 'Empowering DAO Formation & Token Creation',
      description: 'Founded by tokensmiths and DAO curators of Finwing to empower DAO formation and token creation with strategic campaigns, transparent governance, and expert treasury management.',
      services: [
        'Token Creation & Management',
        'Token Airdrops & Campaigns',
        'DAO Formation & Governance',
        'DAO Treasury Management',
      ],
      scroll : 'foundry'
    },
    
    {
      title: 'NAVIGATOR',
      color: 'white',
      icon: '/navigator1.png',
      tagline: 'Invest in a Decentralized Fashion',
      description: 'Embrace a new era of transparent investing without management fees or hidden charges, ensuring clarity and control over your investments.',
      services: [
        'You Control Your Money',
        'You Manage Your Digital Assets',
        'Smart Crypto Portfolio Consultancy',
        'Generating Risk Averse Alpha Returns',
      ],
      scroll : 'navigator'
    
    },
    
    {
      title: 'ACCELERATOR',
      color: 'white',
      icon: '/accelarator1.png',
      tagline: 'Fueling Web3.0 Startups',
      description: 'Tailored Strategies, Investor-Ready Pitch Decks, Competitive Market Insights, and Expert White Paper Development for Blockchain Success.',
      services: [
        'Business Models Orientation',
        'Pitch Deck Development',
        'Competitive Analysis Report',
        'Strategizing and Developing White & Lite Papers',
      ],
      scroll : 'accelerator'
    },
    
    
  ];
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      
    }
  };
  

  const radius = 320;
  const centerX = 200;
  const centerY = 200;

  return (
    <Container
    id={id}
      sx={{
        maxWidth: 'xl',
        height: 'auto',
        color: 'white',
        textAlign: 'center',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: '80%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '1200px',
          height: '1200px',
          background: 'radial-gradient(circle, rgba(7, 1, 239, 0.4), transparent 60%)',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

<Box display="flex" justifyContent="center" alignItems="center">
          <img
            src="/section.png" // Replace with your image path or URL
            alt="Icon"
            style={{ width: 100, height: 'auto', marginRight: 2, objectFit: 'contain', verticalAlign: 'middle' }} // Add verticalAlign and objectFit if needed
          />
          <Typography
            variant="h6"
            sx={{
              color: '#FFFFFF', // White text color
              fontWeight: 'bold',
              letterSpacing: '2px' // Adjust letter spacing
            }} // Remove mb and pb for better alignment
          >
            ECOSYSTEM
          </Typography>
        </Box>

      <Box textAlign="center" mb={40} sx={{ position: 'relative', zIndex: 1 }}>
        <Typography
          variant="h1"
          fontWeight="bold"
          mb={0}
          sx={{ fontSize: { xs: '2.5rem', sm: '4rem', md: '2.7rem' } }}
        >
          <span style={{ color: 'white' }}>We Are On A Mission</span>{' '}
         
        </Typography>
        <Typography
          variant="h1"
          fontWeight="bold"
          mb={3}
          sx={{ fontSize: { xs: '2.5rem', sm: '4rem', md: '3.5rem' } }}
        >
         
          <span style={{ color: '#1976d2' }}>Democratizing Finance & Information</span>
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontSize: { xs: '1rem', sm: '1.25rem', md: '1.3rem' } }}
        >
          Ready to guide you through the evolutionary phase, turning the transition into a financial opportunity for everyone!
        </Typography>
        {/* <Typography
          variant="body1"
          sx={{ fontSize: { xs: '1rem', sm: '1.25rem', md: '1.3rem' } }}
        >
          turning the transition into a financial opportunity for everyone!
        </Typography> */}
      </Box>

      <Box
        sx={{
          position: 'relative',
          width: '400px',
          height: '400px',
          margin: '0 auto',
          zIndex: 1,
        }}
      >
       <Box
          sx={{
            position: 'relative',
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            transition: 'opacity 0.3s ease-in-out', // Smooth transition for fading
            opacity: hoveredItem ? 0.5 : 1, // Darken when an item is hovered
          }}
        >
          <img
            src="/logo2.png"
            alt="Company Logo"
            style={{ width: '100%', height: '100%', borderRadius: '50%' }}
          />
        </Box>
       {hoveredItem && <Box sx={{position: 'absolute',
          top: '4%',
          left: '10%',}}> <Services item={hoveredItem}></Services></Box>}

        {surroundingItems.map((item, index) => {
          const angle = (index / surroundingItems.length) * (2 * Math.PI);
          const x = centerX + radius * Math.cos(angle);
          const y = centerY + radius * Math.sin(angle);

          return (
            <Box
              key={index}
              sx={{
                position: 'absolute',
                top: `${y}px`,
                left: `${x}px`,
                width: '150px',
                height: '150px',
                transform: 'translate(-50%, -50%)',
                textAlign: 'center',
                zIndex: 1,
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: `translate(-50%, -50%) scale(1.2)`,
                  zIndex: 2,
                },
                '&:hover .info-card': {
                  opacity: 1,
                  visibility: 'visible',

                },
              }}
              onMouseEnter={() => handleMouseEnter(item)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleScroll(item.scroll)}
            >
              <Box
                sx={{
                  width: '100px',
                  height: '100px',
                  margin: '0 auto',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.3)',
                  },
                }}
              >
                <img src={item.icon} alt={item.title} style={{ width: '100%', height: '100%' }} />
              </Box>
              <Typography variant="h6" sx={{ color: item.color }}>{item.title}</Typography>


            </Box>
          );
        })}
      </Box>
    </Container>
  );
};

export default Ecosystem;