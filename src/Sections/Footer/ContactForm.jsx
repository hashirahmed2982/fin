import React, { useState } from "react";
import { Box, Typography, TextField, Button, Snackbar, Alert } from "@mui/material";
import emailjs from "emailjs-com";

const ContactForm = ({ id }) => {
  const [formData, setFormData] = useState({ email: "", name: "", message: "" });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_tnv363f", // Replace with your EmailJS service ID
        "template_4hsakrn", // Replace with your EmailJS template ID
        formData,
        "2yx5g4NvE700KdzWm" // Replace with your EmailJS public key
      )
      .then(
        () => {
          setSuccess(true);
          setFormData({ email: "", name: "", message: "" });
        },
        () => {
          setError(true);
        }
      );
  };

  return (
    <Box
      id={id}
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
        alignItems: "center",
        p: 4,
        borderRadius: "8px",
        maxWidth: "1200px",
        margin: "auto",
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#121212",
        background: `radial-gradient(circle at center, rgba(57, 114, 255, 0.2) 0%, rgba(0, 0, 0, 0.9) 80%)`,
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.5)",
      }}
    >
      <Box sx={{ flex: 1, p: 3 }}>
        <Typography variant="h5" sx={{ mb: 3, color: "#fff", fontWeight: "bold" }}>
          Get in Touch
        </Typography>
        <form onSubmit={handleSubmit}>
        <TextField
            fullWidth
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
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
            label="Email Address"
            name="email"
            value={formData.email}
            onChange={handleChange}
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
            name="message"
            value={formData.message}
            onChange={handleChange}
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
            sx={{ width: "100%", mt: 2, backgroundColor: "#3972ff", color: "white" }}
          >
            Send Message
          </Button>
        </form>
      </Box>
      <Box sx={{ flex: 1, p: 3, display: "flex", justifyContent: "center", alignItems: "center" }}>
        <img
          src="/contact.png"
          alt="Contact Us"
          style={{ width: "100%", maxWidth: "500px", borderRadius: "8px", boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.4)" }}
        />
      </Box>

      {/* Snackbar for success message */}
      <Snackbar open={success} autoHideDuration={4000} onClose={() => setSuccess(false)}>
        <Alert onClose={() => setSuccess(false)} severity="success" sx={{ width: "100%" }}>
          Message sent successfully!
        </Alert>
      </Snackbar>
      {/* Snackbar for error message */}
      <Snackbar open={error} autoHideDuration={4000} onClose={() => setError(false)}>
        <Alert onClose={() => setError(false)} severity="error" sx={{ width: "100%" }}>
          Failed to send message. Try again.
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ContactForm;