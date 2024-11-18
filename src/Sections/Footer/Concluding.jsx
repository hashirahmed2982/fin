import React from "react";
import { Box, Grid, Typography, TextField, Button } from "@mui/material";
import AstronautImage from "/logo6.png"; // Ensure this path is correct

const Concluding = ({ id }) => {
  return (
    <Box
      id={id}
      sx={{
        position: "relative",
        minHeight: "70vh",
        background: `radial-gradient(circle, #0a0a33 0%, #08080e 45%)`, // Dark blue spotlight effect
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        p: 8,
      }}
    >
      <Grid container alignItems="center" spacing={4}>
        {/* Left Side: Text and Subscription */}
        <Grid item xs={12} md={4.9} sx={{ textAlign: { xs: "center", md: "left" } , ml: {md: 16} }}>
          {/* Title */}
          <Typography
            variant="h3"
            sx={{
              fontWeight: "700",
              textTransform: "uppercase",
              color: "#fff",
              mb: 1,
            }}
          >
            Be Part of
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontWeight: "700",
              textTransform: "uppercase",
              color: "#2979ff",
              mb: 3,
            }}
          >
            Our Mission
          </Typography>
          {/* Description */}
          <Typography
            variant="body1"
            sx={{
              fontSize: "1.1rem",
              color: "#c2c2c2",
              mb: 4,
              maxWidth: "400px",
              mx: { xs: "auto", md: "0" },
            }}
          >
            Join us as we innovate and inspire. Subscribe to stay updated with the latest news and initiatives!
          </Typography>
          {/* Subscription Section */}
          <Box
            component="form"
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: { xs: "center", md: "flex-start" },
              alignItems: "center",
              gap: 2,
              maxWidth: "500px",
              mx: { xs: "auto", md: "0" }, // Center on small screens
            }}
          >
            <TextField
              variant="outlined"
              placeholder="Enter your email"
              sx={{
                flex: 1,
                bgcolor: "rgba(255, 255, 255, 0.08)",
                borderRadius: "5px",
                input: { color: "#fff" },
                border: "1px solid #2979ff", // Subtle border to match theme
              }}
            />
            <Button
              variant="contained"
              sx={{
                bgcolor: "#2979ff",
                color: "#fff",
                textTransform: "uppercase",
                fontWeight: "bold",
                px: 4,
                "&:hover": {
                  bgcolor: "#1c54b2",
                },
              }}
            >
              Subscribe
            </Button>
          </Box>
        </Grid>

        {/* Right Side: Image */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-end" } }}
        >
          <Box
            component="img"
            src={AstronautImage}
            alt="Astronaut"
            sx={{
              maxWidth: "80%",
              height: "60%",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Concluding;
