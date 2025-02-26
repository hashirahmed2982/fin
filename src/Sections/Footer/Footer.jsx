import React from "react";
import { Box, Typography, Link, IconButton, Grid } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TelegramIcon from "@mui/icons-material/Telegram";
import RedditIcon from "@mui/icons-material/Reddit";
import LanguageIcon from "@mui/icons-material/Language";
import Logo from "/logo3.png"; // Import your logo

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "#08080e",
        color: "#fff",
        px: { xs: 4, sm: 10, md: 26 },
        py: 8,
        background: `linear-gradient(to bottom,#000,#0f0c854d)`,
      }}
    >
      <Grid container spacing={4}>
        {/* Left Section */}
        <Grid item xs={12} md={8} sx={{ textAlign: { xs: "center", md: "left" } }}>
          <Typography variant="body2" sx={{ fontWeight: "bold", mb: 1 }}>
            Managed by
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, justifyContent: { xs: "center", md: "flex-start" } }}>
            <img src={Logo} alt="Finwing Logo" style={{ width: "50px" }} />
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", fontSize: "20px", letterSpacing: "1px" }}
            >
              Finwing
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: 1, mt: 1, justifyContent: { xs: "center", md: "flex-start" } }}>
            {[
              { icon: <YouTubeIcon />, label: "YouTube" },
              { icon: <GitHubIcon />, label: "GitHub" },
              { icon: <RedditIcon />, label: "Reddit" },
              { icon: <TelegramIcon />, label: "Telegram" },
            ].map((item, index) => (
              <IconButton
                key={index}
                href="#"
                aria-label={item.label}
                sx={{
                  bgcolor: "rgba(255, 255, 255, 0.1)",
                  color: "#848895",
                  "&:hover": { bgcolor: "rgba(255, 255, 255, 0.2)" },
                  borderRadius: "50%",
                  width: 30,
                  height: 30,
                }}
              >
                {item.icon}
              </IconButton>
            ))}
          </Box>
          <Typography
            variant="body2"
            sx={{ mt: 2, color: "rgba(255, 255, 255, 0.6)" }}
          >
            © 2024 Finwing. All rights reserved.
          </Typography>
        </Grid>

        {/* Middle Section */}
        <Grid item xs={12} md={2} sx={{ textAlign: { xs: "center", md: "left" } }}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
            Quick Links
          </Typography>
          {["Ecosystem", "Newsletter", "Contact us", "Privacy Policy"].map(
            (link, index) => (
              <Typography key={index} sx={{ mb: 1 }}>
                <Link href="#" color="#848895" underline="hover">
                  {link}
                </Link>
              </Typography>
            )
          )}
        </Grid>

        {/* Right Section */}
        <Grid item xs={12} md={2} sx={{ textAlign: { xs: "center", md: "left" } }}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
            Contact Us
          </Typography>
          <Typography color="#848895" sx={{ mb: 1 }}>
            support@finwing.com
          </Typography>
          <Typography color="#848895" sx={{ mb: 1 }}>
            +1 (123) 456-7890
          </Typography>
          <Typography color="#848895">
            198 West 21th Street, Suite 721 New York NY 10016
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
