import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import { useState } from 'react';
import Services from './services';

const Ecosystem = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (item) => {
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const surroundingItems = [
    {
      title: 'NAVIGATOR',
      color: '#9c27b0',
      icon: '/navigator.png',
      tagline: 'Invest in a Decentralized Fashion',
      description: 'Embrace a new era of transparent investing without management fees or hidden charges, ensuring clarity and control over your investments.',
      services: [
        'You Control Your Money',
        'You Manage Your Digital Assets',
        'Smart Crypto Portfolio Consultancy',
        'Generating Risk Averse Alpha Returns',
      ],
    
    },
    {
      title: 'ACCELERATOR',
      color: '#4caf50',
      icon: '/accelarator.png',
      tagline: 'Fueling Web3.0 Startups',
      description: 'Tailored Strategies, Investor-Ready Pitch Decks, Competitive Market Insights, and Expert White Paper Development for Blockchain Success.',
      services: [
        'Business Models Orientation',
        'Pitch Deck Development',
        'Competitive Analysis Report',
        'Strategizing and Developing White & Lite Papers',
      ],
    },
    {
      title: 'FOUNDRY',
      color: '#ff9800',
      icon: '/foundry.png',
      tagline: 'Empowering DAO Formation & Token Creation',
      description: 'Founded by tokensmiths and DAO curators of Finwing to empower DAO formation and token creation with strategic campaigns, transparent governance, and expert treasury management.',
      services: [
        'Token Creation & Management',
        'Token Airdrops & Campaigns',
        'DAO Formation & Governance',
        'DAO Treasury Management',
      ],
    },
    {
      title: 'ARCHITECT',
      color: '#ff5722',
      icon: '/architect.png',
      tagline: 'Revolutionizing Businesses through Seamless Blockchain Integration',
      description: 'For Greater Efficiency, Security, and Growth.',
      services: [
        'Blockchain Solution for Supply Chain Management',
        'Integrating Financial Accounting On Chain',
        'Tracking Employee Management through Blockchain',
      ],
    },
    {
      title: 'VAULTS',
      color: '#A52A2A',
      icon: '/vaults.png',
      tagline: 'Navigating the Future of Web3.0 Finance with Finwing Investment Vaults',
      description: 'Testnet Phase ⅔ Ongoing.',
      services: [],
      grandVisual: true, // Indicating this item should have grand visuals
    },
    {
      title: 'INSIGHTS',
      color: '#1976d2',
      icon: '/insights.png',
      tagline: 'Unlocking Strategic Insights',
      description: 'Analytics, trends, and knowledge to keep you ahead in the rapidly evolving digital landscape.',
      services: [
        'Market Analytics',
        'Industry Trends',
        'Strategic Knowledge Base',
      ],
    },
  ];
  

  const radius = 320;
  const centerX = 200;
  const centerY = 200;

  return (
    <Container
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

      <Typography
        variant="overline"
        sx={{ color: '#1976d2', letterSpacing: '3px', mb: 2, pb: 2 }}
      >
        ECOSYSTEM
      </Typography>

      <Box textAlign="center" mb={40} sx={{ position: 'relative', zIndex: 1 }}>
        <Typography
          variant="h1"
          fontWeight="bold"
          mb={2}
          sx={{ fontSize: { xs: '2.5rem', sm: '4rem', md: '3rem' } }}
        >
          <span style={{ color: 'white' }}>We are on a mission</span>{' '}
          <span style={{ color: '#1976d2' }}>to democratize information</span>
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontSize: { xs: '1rem', sm: '1.25rem', md: '1.1rem' } }}
        >
          Ready to guide you through the evolutionary phase, turning the transition into a financial opportunity for everyone.
        </Typography>
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
          top: '-5%',
          left: '15%',}}> <Services item={hoveredItem}></Services></Box>}

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