import React, { useRef } from 'react';
import { Box, Typography, Container, Grid, Paper } from '@mui/material';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import BackgroundImage from '/architect.png'; // Replace with your background image
import { motion, useInView } from 'framer-motion';

const FinwingArchitect = ({id}) => {
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
            Finwing Architect
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.9, maxWidth: '800px', margin: '0 auto' }}>
            Your Blueprint for Trust, Efficiency, and Innovation
          </Typography>
        </Container>
      </Box>

      {/* Intro Section */}
      <Container maxWidth="lg" sx={{ textAlign: 'center', my: 8 }} >
        <Box sx={{ mb: 6 }}>
          <Typography variant="h4" sx={{ color: '#1a73e8', mb: 3 }}>
            Why Blockchain? Why Now?
          </Typography>
          <Typography variant="body1" sx={{ color: '#c7c7c7', lineHeight: 1.6, mb: 2 }}>
            In today’s fast-paced, digitized world, organizations need transparency, security, and efficiency more than ever. Whether managing supply chains, financial records, or sensitive employee data, blockchain offers a revolutionary solution. It provides decentralized, tamper-proof records, enabling more secure, auditable, and streamlined operations.
          </Typography>
          <Typography variant="body2" sx={{ color: '#c7c7c7', lineHeight: 1.6 }}>
            Fact Check: Over 55% of healthcare organizations are already using blockchain to enhance data security and improve patient care. With industries from finance to logistics joining the movement, blockchain adoption is accelerating across sectors.
          </Typography>
        </Box>
      </Container>

      {/* Blockchain Integration Solutions */}
      <Container maxWidth="lg" sx={{ my: 8 }} component={motion.div}
        ref={containerRef}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}>
        <Typography variant="h4" sx={{ color: '#ffffff', textAlign: 'center', mb: 6 }}>
          Tailored Blockchain Integration Solutions
        </Typography>
        <Grid container spacing={4}>
          {/* Supply Chain Management */}
          <Grid item xs={12} md={4}>
          <motion.div
                variants={itemVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                custom={0} // Pass index to itemVariants for staggered effect
              >
            <Paper
              elevation={4}
              sx={{
                p: 4,
                backgroundColor: '#121212', // Dark background color
                color: '#ffffff',
                borderRadius: '8px',
                minHeight: '340px',
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
              <LocalShippingIcon sx={{ fontSize: 48, color: '#1a73e8', mb: 2 }} />
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 'bold',
                  mb: 2,
                  textTransform: 'uppercase',
                  color: '#ffffff',
                }}
              >
                Supply Chain Management
              </Typography>
              <Typography variant="body2" sx={{ mb: 2, lineHeight: 1.5 }}>
                Track your product journey from origin to consumer with transparency and traceability.
              </Typography>
              <Typography variant="body2" sx={{ mb: 2, lineHeight: 1.5 }}>
                Streamline operations and reduce inefficiencies with decentralized tracking systems.
              </Typography>
              <Typography variant="body2" sx={{ lineHeight: 1.5 }}>
                Protect your brand with anti-counterfeiting solutions using blockchain verification tools.
              </Typography>
            </Paper>
            </motion.div>
          </Grid>

          {/* Financial Accounting */}
          <Grid item xs={12} md={4}>
          <motion.div
                variants={itemVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                custom={1} // Pass index to itemVariants for staggered effect
              >
            <Paper
              elevation={4}
              sx={{
                p: 4,
                backgroundColor: '#121212', // Dark background color
                color: '#ffffff',
                borderRadius: '8px',
                minHeight: '340px',
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
              <AccountBalanceWalletIcon sx={{ fontSize: 48, color: '#1a73e8', mb: 2 }} />
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 'bold',
                  mb: 2,
                  textTransform: 'uppercase',
                  color: '#ffffff',
                }}
              >
                Financial Accounting
              </Typography>
              <Typography variant="body2" sx={{ mb: 2, lineHeight: 1.5 }}>
                Create immutable, transparent financial records that simplify audits and lower fraud risk.
              </Typography>
              <Typography variant="body2" sx={{ lineHeight: 1.5 }}>
                Automate transactions with smart contracts, reducing errors and operational delays.
              </Typography>
            </Paper>
            </motion.div>
          </Grid>

          {/* Employee Management */}
          <Grid item xs={12} md={4}>
          <motion.div
                variants={itemVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                custom={2} // Pass index to itemVariants for staggered effect
              >
            <Paper
              elevation={4}
              sx={{
                p: 4,
                backgroundColor: '#121212', // Dark background color
                color: '#ffffff',
                borderRadius: '8px',
                minHeight: '340px',
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
              <BusinessCenterIcon sx={{ fontSize: 48, color: '#1a73e8', mb: 2 }} />
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 'bold',
                  mb: 2,
                  textTransform: 'uppercase',
                  color: '#ffffff',
                }}
              >
                Employee Management
              </Typography>
              <Typography variant="body2" sx={{ mb: 2, lineHeight: 1.5 }}>
                Implement secure, tamper-proof employee records, payroll management, and performance tracking.
              </Typography>
              <Typography variant="body2" sx={{ lineHeight: 1.5 }}>
                Develop token-based reward systems to drive engagement and performance.
              </Typography>
            </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      {/* Call to Action */}
      <Container maxWidth="lg" sx={{ textAlign: 'center', my: 8 ,mt:15}}>
        <Box sx={{ mb: 6 }}>
          <Typography variant="h4" sx={{ color: '#ffffff', mb: 3 }}>
            Blockchain: The Next Evolution in Digital Operations
          </Typography>
          <Typography variant="body1" sx={{ color: '#c7c7c7', lineHeight: 1.6, mb: 2 }}>
            Blockchain isn't just a trend—it’s a transformative technology that can improve efficiency, security, and trust across all industries.
          </Typography>
          <Typography variant="h6" sx={{ color: '#ffffff', mt: 4 }}>
            Isn’t it time your organization embraced the future?
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default FinwingArchitect;
