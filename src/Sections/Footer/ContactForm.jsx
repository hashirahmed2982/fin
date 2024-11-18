import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";

const ContactForm = ({ id }) => {
  return (
    <Box
      id={id}
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" }, // Responsive: stack on smaller screens
        justifyContent: "space-between",
        alignItems: "center",
        p: 4,
        borderRadius: "8px",
        maxWidth: "1200px",
        margin: "auto",
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#121212", // Fallback base color
        background: `
          radial-gradient(circle at center, rgba(57, 114, 255, 0.2) 0%, rgba(0, 0, 0, 0.9) 80%)
        `, // Bluish spotlight effect
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.5)",
      }}
    >
      {/* Left: Contact Form */}
      <Box sx={{ flex: 1, p: 3 }}>
        <Typography
          variant="h5"
          sx={{ mb: 3, color: "#fff", fontWeight: "bold" }}
        >
          Get in Touch
        </Typography>
        <form>
          <TextField
            fullWidth
            label="Email Address"
            variant="outlined"
            margin="dense"
            size="small"
            sx={{
              mb: 2,
              bgcolor: "rgba(255, 255, 255, 0.05)",
              borderRadius: "4px",
              input: { color: "#fff" },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "rgba(255, 255, 255, 0.2)",
                },
                "&:hover fieldset": {
                  borderColor: "rgba(255, 255, 255, 0.4)",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#3972ff",
                },
              },
              "& label": {
                color: "#b3b3b3",
              },
            }}
          />
          <TextField
            fullWidth
            label="Subject"
            variant="outlined"
            margin="dense"
            size="small"
            sx={{
              mb: 2,
              bgcolor: "rgba(255, 255, 255, 0.05)",
              borderRadius: "4px",
              input: { color: "#fff" },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "rgba(255, 255, 255, 0.2)",
                },
                "&:hover fieldset": {
                  borderColor: "rgba(255, 255, 255, 0.4)",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#3972ff",
                },
              },
              "& label": {
                color: "#b3b3b3",
              },
            }}
          />
          <TextField
            fullWidth
            label="Message"
            variant="outlined"
            margin="dense"
            size="small"
            multiline
            rows={4}
            sx={{
              mb: 2,
              bgcolor: "rgba(255, 255, 255, 0.05)",
              borderRadius: "4px",
              input: { color: "#fff" },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "rgba(255, 255, 255, 0.2)",
                },
                "&:hover fieldset": {
                  borderColor: "rgba(255, 255, 255, 0.4)",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#3972ff",
                },
              },
              "& label": {
                color: "#b3b3b3",
              },
            }}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{
              width: "100%",
              mt: 2,
              backgroundColor: "#3972ff",
              color: "white",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#609bff",
              },
            }}
          >
            Send Message
          </Button>
        </form>
      </Box>

      {/* Right: Image */}
      <Box
        sx={{
          flex: 1,
          p: 3,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src="/contact.png"
          alt="Contact Us"
          style={{
            width: "100%",
            maxWidth: "500px",
            borderRadius: "8px",
            boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.4)",
          }}
        />
      </Box>
    </Box>
  );
};

export default ContactForm;
