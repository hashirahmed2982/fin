import React from "react";
import { Box, Typography, Link, IconButton, Grid } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Logo from "/logo3.png"; // Import your logo

const Footer = () => {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      
    }
  };
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
              // { icon: <YouTubeIcon />, label: "YouTube" },
              // { icon: <GitHubIcon />, label: "GitHub" },
              { icon: <InstagramIcon />, label: "Instagram", link: "https://www.instagram.com/finwing.xyz/" },
              { icon: <LinkedInIcon />, label: "LinkedIn", link: "http://linkedin.com/company/finwingxyz/" },
              { icon: <TelegramIcon />, label: "LinkedIn", link: "https://t.me/finwingfree" },
            ].map((item, index) => (
              <IconButton
                key={index}
                href={item.link}
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
          {[{ name: "Ecosystem", link: "ecosystem" }, { name: "Newsletter", link: "concluding" }, { name: "Contact us", link: "contact" }].map(
            (link, index) => (
              <Typography key={index} sx={{ mb: 1 }}>
                <Link onClick={() => handleScroll(link.link)} color="#848895" underline="hover">
                  {link.name}
                </Link>
              </Typography>
            )
          )}
          <Typography  sx={{ mb: 1 }}>
            <Link href="/finwingpp.pdf" color="#848895" underline="hover">
              Privacy Policy
            </Link>
          </Typography>
        </Grid>

        {/* Right Section */}
        <Grid item xs={12} md={2} sx={{ textAlign: { xs: "center", md: "left" } }}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
            Contact Us
          </Typography>
          <Typography color="#848895" sx={{ mb: 1 }}>
            contact@theshieldtech.com
          </Typography>

          <Typography color="#848895">
            Metro Plaza, Viru valjak 2, Tallinn, 10111, EE
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
