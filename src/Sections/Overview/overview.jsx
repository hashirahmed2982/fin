import { Box, Typography, Container, Grid } from "@mui/material";

const Overview = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        color: "white",
        py: 4,
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // Ensure the background matches the overall theme
      }}
    >
      <Container maxWidth="lg" sx={{ px: 0 }}>
        <Typography
          variant="h1"
          fontWeight="bold"
          sx={{ fontSize: { xs: "2.5rem", sm: "4rem", md: "3rem" } }}
          gutterBottom
        >
          <span>A dedicated corner in the digital landscape designed to be your</span>
          <br />
          <span style={{ color: "#3972FF" }}>one-stop solution</span> for navigating the
          <br />
          complexities of Web 3.0.
        </Typography>

        {/* Cards section */}
        <Grid
          container
          justifyContent="center" // Space between the cards without extra space around them
          sx={{
            mt: 4,
            backgroundColor: "#1E1E1E",
            borderRadius: 4,
            width: "auto", // Ensure the width is auto to only fit the cards
            mx: "auto", // Center the grid horizontally
            p: 2, // Remove any padding
          }}
        >
          {/* Manage Card */}
          <Grid item xs={12} md={3} sx={{ display: "flex", justifyContent: "center" }}>
            <Box
              sx={{
                backgroundColor: "#1E1E1E",
                p: 3,
                borderRadius: 2,
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)", // Add box shadow to match the style
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

          {/* Engage Card */}
          <Grid item xs={12} md={3} sx={{ display: "flex", justifyContent: "center" }}>
            <Box
              sx={{
                backgroundColor: "#1E1E1E",
                p: 3,
                borderRadius: 2,
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)", // Add box shadow to match the style
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

          {/* Stay Card */}
          <Grid item xs={12} md={3} sx={{ display: "flex", justifyContent: "center" }}>
            <Box
              sx={{
                backgroundColor: "#1E1E1E",
                p: 3,
                borderRadius: 2,
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)", // Add box shadow to match the style
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
