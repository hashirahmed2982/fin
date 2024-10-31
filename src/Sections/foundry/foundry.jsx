import React from 'react';
import { Box, Typography, Container, Grid, Paper, Divider } from '@mui/material';
import LayersIcon from '@mui/icons-material/Layers';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import HowToVoteIcon from '@mui/icons-material/HowToVote';
import PieChartIcon from '@mui/icons-material/PieChart';
import BalanceIcon from '@mui/icons-material/Balance';
import SecurityIcon from '@mui/icons-material/Security';
import BackgroundImage from '/foundry.png'; // Replace with your background image
import { motion } from 'framer-motion';
const FinwingFoundry = ({ id }) => {
  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  };
  return (
    <Box id={id} sx={{ backgroundColor: '#08080e', py: 8 }}>
      {/* Header Section with Background Image */}
      <Box
        sx={{
          background: `linear-gradient(to bottom, rgba(8, 8, 14, 1) 0%, rgba(8, 8, 14, 0.8) 40%, rgba(8, 8, 14, 0.8) 60%, rgba(8, 8, 14, 1) 100%), url(${BackgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          py: 10,
          textAlign: 'center',
          color: '#ffffff',
          position: 'relative',
        }}
      >
        <Container sx={{ position: 'relative', zIndex: 2 }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 'bold',
              mb: 3,
              textTransform: 'uppercase',
              letterSpacing: '2px',
            }}
          >
            Finwing Foundry
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.9, maxWidth: '800px', margin: '0 auto' }}>
            Empowering DAO Formation & Token Creation with Strategic Campaigns, Transparent Governance, and Expert Treasury Management
          </Typography>
        </Container>
      </Box>

      {/* Intro Section */}
      <Container maxWidth="lg" sx={{ textAlign: 'center', my: 8 }}>

        <Box sx={{ mb: 6 }}>
          <motion.div initial="initial" animate="animate" variants={fadeIn}>
            <Typography variant="h4" sx={{ color: '#1a73e8', mb: 3 }}>
              Your DAO, Your Token, Our Expertise
            </Typography>
          </motion.div>
          <motion.div initial="initial" animate="animate" variants={fadeIn}>
            <Typography variant="body1" sx={{ color: '#c7c7c7', lineHeight: 1.6 }}>
              Finwing Foundry is your gateway to building resilient DAOs and sustainable tokenomics. We combine strategic planning, expert governance, and financial transparency to ensure your decentralized project thrives.
            </Typography>
          </motion.div>
        </Box>

      </Container>

      {/* Seven Layers of DAO - Simple Graphics */}
      <Container maxWidth="lg" sx={{ textAlign: 'center', my: 8 }}>
        <Typography variant="h5" sx={{ color: '#ffffff', mb: 4 }}>
          The Seven Layers of DAO
        </Typography>
        <motion.img initial="initial" animate="animate" variants={fadeIn} src="/DAO.jpg" alt="Seven Layers of DAO" style={{ maxWidth: '50%', height: '50%' }} />
      </Container>

      {/* Tokenomics Section */}
      <Container maxWidth="lg" sx={{ my: 8 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h4" sx={{ color: '#1a73e8', mb: 3 }}>
              Tokenomics: The Backbone of a Sustainable Crypto Project
            </Typography>
            <Typography variant="body1" sx={{ color: '#c7c7c7', mb: 2 }}>
              Did you know? Most failed crypto projects collapsed due to flawed tokenomics. Let us help you avoid that pitfall by building a rock-solid economic foundation for your token.
            </Typography>
            <Typography variant="body2" sx={{ color: '#c7c7c7', lineHeight: 1.6 }}>
              At Finwing Tokensmiths, we create custom tokens that fuel your ecosystem, balancing supply, demand, and utility. From ensuring compliance in token distribution to managing inflationary and deflationary mechanisms, we make tokenomics the backbone of your project's success.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
          <Box
              component="img"
              src="/tfw.png"

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
            {/* <Box sx={{ textAlign: 'center' }}>
              <img src="/tfw.png" alt="Tokenomics Flywheel" style={{ maxWidth: '100%', height: 'auto' }} />
            </Box> */}
          </Grid>
        </Grid>
      </Container>

      {/* Token Airdrops & Campaigns Section */}
      <Container maxWidth="lg" sx={{ my: 8 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
          <Box
              component="img"
              src="/ta.png"

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
            {/* <Box sx={{ textAlign: 'center' }}>
              <img src="/ta.png" alt="Airdrop Campaign" style={{ maxWidth: '100%', height: 'auto' }} />
            </Box> */}
          </Grid>
          <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
            <Typography variant="h4" sx={{ color: '#1a73e8', mb: 3 }}>
              Token Airdrops & Campaigns: Boosting Engagement
            </Typography>
            <Typography variant="body1" sx={{ color: '#c7c7c7', mb: 2 }}>
              A well-planned token airdrop can be the catalyst for widespread adoption and community engagement. We offer end-to-end campaign management, from planning and executing strategic airdrops to ensuring community involvement.
            </Typography>
            <Typography variant="body2" sx={{ color: '#c7c7c7', lineHeight: 1.6 }}>
              Amplify your reach with marketing strategies that turn airdrops into a powerful engagement tool, fostering loyalty and expanding your project's influence.
            </Typography>
          </Grid>
        </Grid>
      </Container>

      <Divider sx={{ my: 8, borderColor: '#232222' }} />

      {/* DAO Section */}
      <Container maxWidth="lg" sx={{ my: 8 }}>
        <Typography variant="h4" sx={{ color: '#ffffff', textAlign: 'center', mb: 6 }}>
          DAO: The New Age of Decentralized Organizations
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Paper
              elevation={4}
              sx={{
                p: 4,
                backgroundColor: '#121212', // Dark background color
                color: '#ffffff',
                borderRadius: '8px',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                position: 'relative', // Needed for the spotlight effect
                background: 'radial-gradient(circle at 50% 50%, rgba(57, 114, 255, 0.25) 0%, rgba(0, 0, 0, 0) 70%)', // Static gradient
                boxShadow: '0 6px 15px rgba(0, 0, 0, 0.5)', // Enhanced shadow
                border: '1px solid rgba(255, 255, 255, 0.1)', // Very dull white border
                transition: 'transform 0.3s ease, border-color 0.3s ease', // Transition for scaling and border color
                '&:hover': {
                  transform: 'scale(1.02)', // Slightly scale up on hover
                  border: '1px solid rgba(255, 255, 255, 0.4)', // Increase border visibility on hover
                },
              }}
            >
              <AccountBalanceIcon sx={{ fontSize: 48, color: '#1a73e8', mb: 2 }} />
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 'bold',
                  mb: 2,
                  textTransform: 'uppercase',
                  color: '#ffffff',
                }}
              >
                DAO Structure & Setup
              </Typography>
              <Typography variant="body2" sx={{ mb: 2, lineHeight: 1.5 }}>
                Design a DAO framework tailored to your needs, with clear roles, responsibilities, and decision-making processes.
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper
              elevation={4}
              sx={{
                p: 4,
                backgroundColor: '#121212', // Dark background color
                color: '#ffffff',
                borderRadius: '8px',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                position: 'relative', // Needed for the spotlight effect
                background: 'radial-gradient(circle at 50% 50%, rgba(57, 114, 255, 0.25) 0%, rgba(0, 0, 0, 0) 70%)', // Static gradient
                boxShadow: '0 6px 15px rgba(0, 0, 0, 0.5)', // Enhanced shadow
                border: '1px solid rgba(255, 255, 255, 0.1)', // Very dull white border
                transition: 'transform 0.3s ease, border-color 0.3s ease', // Transition for scaling and border color
                '&:hover': {
                  transform: 'scale(1.02)', // Slightly scale up on hover
                  border: '1px solid rgba(255, 255, 255, 0.4)', // Increase border visibility on hover
                },
              }}
            >
              <HowToVoteIcon sx={{ fontSize: 48, color: '#1a73e8', mb: 2 }} />
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 'bold',
                  mb: 2,
                  textTransform: 'uppercase',
                  color: '#ffffff',
                }}
              >
                Voting & Proposal Systems
              </Typography>
              <Typography variant="body2" sx={{ mb: 2, lineHeight: 1.5 }}>
                Implement democratic and transparent voting mechanisms that give stakeholders a meaningful say in governance.
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper
              elevation={4}
              sx={{
                p: 4,
                backgroundColor: '#121212', // Dark background color
                color: '#ffffff',
                borderRadius: '8px',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                position: 'relative', // Needed for the spotlight effect
                background: 'radial-gradient(circle at 50% 50%, rgba(57, 114, 255, 0.25) 0%, rgba(0, 0, 0, 0) 70%)', // Static gradient
                boxShadow: '0 6px 15px rgba(0, 0, 0, 0.5)', // Enhanced shadow
                border: '1px solid rgba(255, 255, 255, 0.1)', // Very dull white border
                transition: 'transform 0.3s ease, border-color 0.3s ease', // Transition for scaling and border color
                '&:hover': {
                  transform: 'scale(1.02)', // Slightly scale up on hover
                  border: '1px solid rgba(255, 255, 255, 0.4)', // Increase border visibility on hover
                },
              }}
            >
              <BalanceIcon sx={{ fontSize: 48, color: '#1a73e8', mb: 2 }} />
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 'bold',
                  mb: 2,
                  textTransform: 'uppercase',
                  color: '#ffffff',
                }}
              >
                Legal & Compliance Framework
              </Typography>
              <Typography variant="body2" sx={{ mb: 2, lineHeight: 1.5 }}>
                Ensure your DAO operates within legal parameters while staying true to decentralized principles.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* DAO Treasury Management Section */}
      <Container maxWidth="lg" sx={{ my: 8 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h4" sx={{ color: '#1a73e8', mb: 3 }}>
              DAO Treasury Management: Secure Your DAO’s Financial Future
            </Typography>
            <Typography variant="body1" sx={{ color: '#c7c7c7', mb: 2 }}>
              Managing a DAO’s treasury requires expert financial strategies, transparency, and accountability. We provide ongoing support for fund allocation, investment strategies, and transparent reporting systems.
            </Typography>
            <Typography variant="body2" sx={{ color: '#c7c7c7', lineHeight: 1.6 }}>
              Our team helps you develop and execute strategies for managing DAO funds with an eye on risk management and long-term growth, ensuring your DAO’s financial security.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} sx={{ mt: 5 }}>
            <Box
              component="img"
              src="/dtm1.png"

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
            {/* <Box sx={{ textAlign: 'center' }}>
              <img src="/dtm1.png" alt="DAO Treasury Management" style={{ maxWidth: '100%', height: 'auto' }} />
            </Box> */}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default FinwingFoundry;
