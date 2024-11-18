import { Box, Typography, Container, Grid } from "@mui/material";

const Overview = ({ id }) => {
  return (
    <Box
  id={id}
  sx={{
    height: "auto",
    width: "100%",
    mb:15,
    mt:15,
    color: "white",
    py: 4,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }}
>
  <Container maxWidth="lg" sx={{ px: 0 }}>
    {/* Text Section */}
    <Typography
      variant="h1"
      fontWeight="bold"
      sx={{
        fontSize: { xs: "2.5rem", sm: "4rem", md: "2.5rem" },
        lineHeight: 1.5,
        textAlign: "center",
        maxWidth: "1000px", // Limit the width to align with the card row
        mx: "auto", // Center the text horizontally
      }}
      gutterBottom
    >
      <span>A DEDICATED CORNER IN THE DIGITAL LANDSCAPE</span>
      <br />
      <span>DESIGNED TO BE YOUR </span>
      <span style={{ color: "#3972FF" }}>ONE STOP SOLUTION</span>
      <br />
      <span>FOR NAVIGATING THE COMPLEXITIES OF WEB 3.0</span>
    </Typography>

    {/* Cards Section */}
    <Grid
      container
      justifyContent="center"
      sx={{
        mt: 4,
        maxWidth: "1000px", // Match the text width
        mx: "auto", // Center the grid horizontally
        rowGap: 2, // Add space between rows if needed
      }}
    >
      {/* Card 1: Manage */}
      <Grid item xs={12} sm={3.5} sx={{ display: "flex", justifyContent: "center",mr:1 }}>
        <Box
          sx={{
            backgroundColor: "#1E1E1E",
            p: 2,
            borderRadius: 2,
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
            textAlign: "left",
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: "bold", color: "#fff" }} gutterBottom>
            Manage
          </Typography>
          <Typography variant="body1" sx={{ color: "#d1d1d1" }}>
            Crypto portfolio with personalized financial consultancy services.
          </Typography>
        </Box>
      </Grid>

      {/* Card 2: Engage */}
      <Grid item xs={12} sm={3.7} sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            backgroundColor: "#1E1E1E",
            p: 2,
            borderRadius: 2,
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
            textAlign: "left",
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: "bold", color: "#fff" }} gutterBottom>
            Engage
          </Typography>
          <Typography variant="body1" sx={{ color: "#d1d1d1" }}>
            In discussions with a vibrant community of like-minded individuals.
          </Typography>
        </Box>
      </Grid>

      {/* Card 3: Stay */}
      <Grid item xs={12} sm={3.5} sx={{ display: "flex", justifyContent: "center" ,ml:1}}>
        <Box
          sx={{
            backgroundColor: "#1E1E1E",
            p: 2,
            borderRadius: 2,
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
            textAlign: "left",
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: "bold", color: "#fff" }} gutterBottom>
            Stay
          </Typography>
          <Typography variant="body1" sx={{ color: "#d1d1d1" }}>
            Informed with our educational resources covering various topics.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  </Container>
</Box>

  );
};

export default Overview;
