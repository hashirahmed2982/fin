import { Box, Typography, Container } from "@mui/material";
import Stars from "./particles";

const Banner = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        position: "relative",
        color: "white",
        py: 4,
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Stars Background */}
      <Box
     
      sx={{
          
          position: "absolute",
          top: 0,
          left: -1200,
          width: "250vh",
          height: "100vh",
          zIndex: 1, // Behind the text content
          pointerEvents: "none", // Ensures the stars don't block interactions
        }}
      >
        <Stars />
      </Box>

      {/* Text Content */}
      <Container
        maxWidth="xl"
        sx={{
          position: "relative",
          zIndex: 2, // Above the stars
        }}
      >
        <Typography
          variant="h1"
          component="h1"
          gutterBottom
          sx={{
            fontSize: '80px',
            fontWeight: 300,
            fontFamily: "PolySans, sans-serif",
            textShadow: "0px 0px 10px rgba(255, 255, 255, 0.5)",
          }}
        >
          Your Wing to Web 3.0 Future
        </Typography>
        <Typography
          variant="h5"
          sx={{
            fontSize: '20px',
            fontWeight: 300,
            fontFamily: "PolySans, sans-serif",
            color: "#B0B7D6",
            textShadow: "0px 0px 5px rgba(255, 255, 255, 0.3)",
          }}
        >
          Empowering Individuals to navigate and thrive in the dynamic realm of Web3.0.
        </Typography>
      </Container>
    </Box>
  );
};

export default Banner;
