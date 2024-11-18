import { Box, Typography, Container } from "@mui/material";
import Stars from "./particles";

const Banner = ({id}) => {
  return (
    <Box
    id={id}
      sx={{
        height: "100vh",
        width: "100%",
        position: "relative",
        background: `linear-gradient(to bottom, #0701ef4d , #08080e 50%)`,
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
          
          YOUR WING TO WEB 3.0 FUTURE
        </Typography>
        <Typography
          variant="h5"
          sx={{
            fontSize: '30px',
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
