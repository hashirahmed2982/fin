import React, { useState } from "react";
import { Box, Grid, Typography, TextField, Button } from "@mui/material";
import AstronautImage from "/logo6.png";

const Concluding = ({ id }) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = async () => {
    if (!email) {
      setMessage("Please enter a valid email.");
      return;
    }
  
    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbzzge3utDCCxmGwCU2Qz9PUNLh6dhmpb-e4kCiRUyo6WzY0Mmg3sJL2QmguQmPF2zs/exec", {
        method: "POST",
        mode: "no-cors",  // Disable CORS mode
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
  
      // Since "no-cors" mode doesn't allow reading response, just assume success
      setMessage("Subscribed successfully!");
      setEmail(""); // Clear input
    } catch (error) {
      console.error("Error:", error);
      setMessage("An error occurred. Please try again.");
    }
  };
  

  return (
    <Box
      id={id}
      sx={{
        position: "relative",
        minHeight: "70vh",
        background: `radial-gradient(circle, #0a0a33 0%, #08080e 45%)`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        p: 4,
        pl: 8,
      }}
    >
      <Grid container alignItems="center" spacing={4}>
        <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-start" } }}>
          <Box component="img" src={AstronautImage} alt="Astronaut" sx={{ maxWidth: "60%", height: "60%" }} />
        </Grid>
        <Grid item xs={12} md={4.7} sx={{ textAlign: { xs: "center", md: "left" }, ml: { md: 12 } }}>
          <Typography variant="h3" sx={{ fontWeight: "700", textTransform: "uppercase", color: "#fff", mb: 1 }}>
            Be Part of
          </Typography>
          <Typography variant="h3" sx={{ fontWeight: "700", textTransform: "uppercase", color: "#2979ff", mb: 3 }}>
            Our Mission
          </Typography>
          <Typography variant="body1" sx={{ fontSize: "1.1rem", color: "#c2c2c2", mb: 4, maxWidth: "400px", mx: { xs: "auto", md: "0" } }}>
            Join us as we innovate and inspire. Subscribe to stay updated with the latest news and initiatives!
          </Typography>
          <Box component="form" sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, justifyContent: { xs: "center", md: "flex-start" }, alignItems: "center", gap: 2, maxWidth: "500px", mx: { xs: "auto", md: "0" } }}>
            <TextField
              variant="outlined"
              size="small"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{ flex: 1, bgcolor: "rgba(255, 255, 255, 0.08)", borderRadius: "5px", input: { color: "#fff" }, border: "1px solid #2979ff" }}
            />
            <Button variant="contained" onClick={handleSubscribe} sx={{ bgcolor: "#2979ff", color: "#fff", textTransform: "uppercase", fontWeight: "bold", px: 4, "&:hover": { bgcolor: "#1c54b2" } }}>
              Subscribe
            </Button>
          </Box>
          {message && (
            <Typography variant="body2" sx={{ mt: 2, color: message.includes("success") ? "#ffffffff" : "#ff1744" }}>
              {message}
            </Typography>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Concluding;
