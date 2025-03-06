import { useState } from 'react';
import { Box, Typography, Container, Card, CardContent } from '@mui/material';
import Services from './services';

const EcosystemMobile = ({ id }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const ecosystemItems = [
    {
      title: 'ARCHITECT',
      icon: '/architect1.png',
      tagline: 'Revolutionizing Businesses through Blockchain Integration',
      services: [
        'Blockchain Solution for Supply Chain Management',
        'Integrating Financial Accounting On Chain',
        'Tracking Employee Management through Blockchain',
      ],
    },
    {
      title: 'INSIGHTS',
      icon: '/insights1.png',
      tagline: 'Unlocking Strategic Insights',
      services: ['Market Analytics', 'Industry Trends', 'Strategic Knowledge Base'],
    },
    {
      title: 'VAULTS',
      icon: '/vaults2.png',
      tagline: 'Navigating the Future of Web3.0 Finance with Finwing Investment Vaults',
      services: [],
    },
    {
      title: 'FOUNDRY',
      icon: '/foundry1.png',
      tagline: 'Empowering DAO Formation & Token Creation',
      services: [
        'Token Creation & Management',
        'Token Airdrops & Campaigns',
        'DAO Formation & Governance',
        'DAO Treasury Management',
      ],
    },
    {
      title: 'NAVIGATOR',
      icon: '/navigator1.png',
      tagline: 'Invest in a Decentralized Fashion',
      services: [
        'You Control Your Money',
        'You Manage Your Digital Assets',
        'Smart Crypto Portfolio Consultancy',
        'Generating Risk Averse Alpha Returns',
      ],
    },
    {
      title: 'ACCELERATOR',
      icon: '/accelarator1.png',
      tagline: 'Fueling Web3.0 Startups',
      services: [
        'Business Models Orientation',
        'Pitch Deck Development',
        'Competitive Analysis Report',
        'Strategizing and Developing White & Lite Papers',
      ],
    },
  ];

  return (
    <Container id={id} sx={{ textAlign: 'center', color: 'white', mt: 4 }}>
      <Box display="flex" justifyContent="center" alignItems="center" mb={3}>
        <img src="/icon.png" alt="Icon" style={{ width: 75, height: 30, marginRight: 10 }} />
        <Typography variant="h6" fontWeight="bold" letterSpacing={2}>ECOSYSTEM</Typography>
      </Box>

      {ecosystemItems.map((item, index) => (
        <Card
          key={index}
          sx={{ mb: 2, background: '#222', color: 'white', cursor: 'pointer' }}
          onClick={() => setSelectedItem(selectedItem === item ? null : item)}
        >
          <CardContent>
            <Box display="flex" alignItems="center" justifyContent="space-between">
              <Box display="flex" alignItems="center">
                <img src={item.icon} alt={item.title} style={{ width: 50, height: 50, marginRight: 10 }} />
                <Typography variant="h7" mr={2}>{item.title}</Typography>
              </Box>
              <Typography variant="body1" color="gray">{item.tagline}</Typography>
            </Box>
           
          </CardContent>
        </Card>
      ))}
    </Container>
  );
};

export default EcosystemMobile;