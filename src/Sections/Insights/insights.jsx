
import { Box, Typography, Container } from "@mui/material";



const Insights = () => {
  return (
    <Box
    sx={{
        height: '100vh', // Full viewport height
        width: '100%', // Full viewport width
        
        color: 'white', 
        py: 4, 
        textAlign: 'center',
        display: 'flex', // Flexbox for vertical and horizontal centering
        alignItems: 'center', // Center items vertically
        justifyContent: 'center', // Center items horizontally
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h3" component="h1" gutterBottom>
          insights
        </Typography>
        <Typography variant="h6">
          Empowering Individuals to navigate and thrive in the dynamic realm of Web3.0.
        </Typography>
      </Container>
    </Box>
  );
};

export default Insights;
