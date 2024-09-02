import { Box, Typography, Container } from "@mui/material";

const floatingAnimation = {
  '@keyframes float': {
    '0%': {
      transform: 'translateY(0px)',
    },
    '50%': {
      transform: 'translateY(-20px)',
    },
    '100%': {
      transform: 'translateY(0px)',
    },
  },
};

const Footer = () => {
  return (
    <Box
      sx={{
        height: '90vh',
        width: '100%', 
        color: 'white', 
        py: 4, 
        textAlign: 'center',
        display: 'flex', 
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative', 
        overflow: 'hidden', 
        ...floatingAnimation,
      }}
    >
      {}
      <Box
        component="img"
        src="/public/planet1.png"
        alt="Floating planet1"
        sx={{
          position: 'absolute',
          animation: 'float 4s ease-in-out infinite',
          width: '100px',
          height: 'auto',
          top: '10%',
          left: '20%', 
          zIndex: 1,
        }}
      />
      <Box
        component="img"
        src="/public/planet2.png"
        alt="Floating planet2"
        sx={{
          position: 'absolute',
          animation: 'float 4s ease-in-out infinite',
          width: '100px',
          height: 'auto',
          top: '60%', 
          left: '10%', 
          zIndex: 1,
        }}
      />
      <Box
        component="img"
        src="/public/pose2.png"
        alt="Floating pose2"
        sx={{
          position: 'absolute',
          animation: 'float 4s ease-in-out infinite',
          width: '100px',
          height: 'auto',
          top: '50%', 
          left: '90%', 
          zIndex: 1,
        }}
      />
      <Box
        component="img"
        src="/public/pose3.png"
        alt="Floating pose3"
        sx={{
          position: 'absolute',
          animation: 'float 4s ease-in-out infinite',
          width: '100px',
          height: 'auto',
          top: '70%', 
          left: '70%', 
          zIndex: 1,
        }}
      />
      <Box
        component="img"
        src="/public/pose5.png"
        alt="Floating pose5"
        sx={{
          position: 'absolute',
          animation: 'float 4s ease-in-out infinite',
          width: '100px',
          height: 'auto',
          top: '20%', 
          left: '80%', 
          zIndex: 1,
        }}
      />

      <Container maxWidth="md" sx={{ zIndex: 2, position: 'relative' }}>
        <Typography variant="h3" component="h1" gutterBottom>
          footer
        </Typography>
        <Typography variant="h6">
          Empowering Individuals to navigate and thrive in the dynamic realm of Web3.0.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
