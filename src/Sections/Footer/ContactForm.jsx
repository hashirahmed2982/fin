import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Snackbar,
  Alert,
  Dialog,
  DialogContent,
  IconButton
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import emailjs from "emailjs-com";

const ContactForm = ({ open, onClose }) => {
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
          onClose(); // Close popup after successful submission
        },
        () => {
          setError(true);
        }
      );
  };

  return (
    <>
      <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
        <DialogContent sx={{ position: "relative", backgroundColor: "#121212", p: 4 }}>
          {/* Close Button */}
          <IconButton onClick={onClose} sx={{ position: "absolute", top: 10, right: 10, color: "#fff" }}>
            <CloseIcon />
          </IconButton>

          <Typography variant="h5" sx={{ mb: 3, color: "#fff", fontWeight: "bold", textAlign: "center" }}>
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
                  "& fieldset": { borderColor: "rgba(255, 255, 255, 0.2)" },
                  "&:hover fieldset": { borderColor: "rgba(255, 255, 255, 0.4)" },
                  "&.Mui-focused fieldset": { borderColor: "#3972ff" },
                },
                "& label": { color: "#b3b3b3" },
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
                  "& fieldset": { borderColor: "rgba(255, 255, 255, 0.2)" },
                  "&:hover fieldset": { borderColor: "rgba(255, 255, 255, 0.4)" },
                  "&.Mui-focused fieldset": { borderColor: "#3972ff" },
                },
                "& label": { color: "#b3b3b3" },
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
                  "& fieldset": { borderColor: "rgba(255, 255, 255, 0.2)" },
                  "&:hover fieldset": { borderColor: "rgba(255, 255, 255, 0.4)" },
                  "&.Mui-focused fieldset": { borderColor: "#3972ff" },
                },
                "& label": { color: "#b3b3b3" },
              }}
            />
            <Button type="submit" variant="outlined" fullWidth sx={{
              mt: 2, backgroundColor: "#121212", color: "white", borderColor: "rgba(255, 255, 255, 0.2)", // Set border color to white
              "&:hover": {
                borderColor: "rgba(255, 255, 255, 0.4)", // Optional: Change border color on hover
                backgroundColor: "#1a1a1a", // Optional: Slightly lighter background on hover
              },
            }}>
              Send Message
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      {/* Snackbar Notifications */}
      <Snackbar open={success} autoHideDuration={4000} onClose={() => setSuccess(false)}>
        <Alert onClose={() => setSuccess(false)} severity="success" sx={{ width: "100%" }}>
          Message sent successfully!
        </Alert>
      </Snackbar>
      <Snackbar open={error} autoHideDuration={4000} onClose={() => setError(false)}>
        <Alert onClose={() => setError(false)} severity="error" sx={{ width: "100%" }}>
          Failed to send message. Try again.
        </Alert>
      </Snackbar>
    </>
  );
};

export default ContactForm;
