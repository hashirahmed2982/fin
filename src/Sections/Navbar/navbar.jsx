/* eslint-disable react/prop-types */
import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import useMediaQuery from "@mui/material/useMediaQuery";
import logo from "/logo3.png";
import NavigatorIcon from "/navigator1.png";
import ArchitectIcon from "/architect1.png";
import AcceleratorIcon from "/accelarator1.png";
import FoundryIcon from "/foundry1.png";
import EventIcon from "@mui/icons-material/Event";
import InsightsIcon from "/insights1.png";
import { Menu } from "@mui/material";
import { Button } from "react-scroll";
import { keyframes } from "@mui/material/styles";

// Define animations
const pulseAnimation = keyframes`
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.1); opacity: 0.8; }
  100% { transform: scale(1); opacity: 1; }
`;

const glowAnimation = keyframes`
  0% { box-shadow: 0 0 5px rgba(255, 255, 255, 0.5); }
  50% { box-shadow: 0 0 15px rgba(255, 255, 255, 0.9); }
  100% { box-shadow: 0 0 5px rgba(255, 255, 255, 0.5); }
`;
const Navbar = ({ isEventPopupOpen, openEventPopup }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [ecosystemHover, setEcosystemHover] = useState(false);
  const isMobile = useMediaQuery("(max-width:600px)");

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      handleMenuClose();
    }
  };

  return (
    <AppBar
      position="fixed"
      elevation={4}
      sx={{
        backgroundColor: "#00000042",
        backdropFilter: "blur(8px)",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          {/* Logo and Title */}
          <Box
            sx={{ display: "flex", alignItems: "center", color: "inherit" }}
            onClick={() => handleScroll("banner")}
          >
            <img
              src={logo}
              alt="logo"
              style={{
                width: 40,
                height: 40,
                borderRadius: "8px",
                marginRight: "10px",
              }}
            />
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                letterSpacing: 1,
                color: "#ffffff",
              }}
            >
              Finwing
            </Typography>
          </Box>

          {/* Menu icon and menu items */}
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            {isMobile ? (
              <>
                <IconButton color="inherit" onClick={handleMenuOpen}>
                  <MenuIcon />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                  PaperProps={{
                    style: {
                      width: 200,
                      borderRadius: "8px",
                      backgroundColor: "#333333",
                      color: "#ffffff",
                      boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.3)",
                    },
                  }}
                >
                  <MenuItem onClick={() => handleScroll("ecosystem")}>
                    Ecosystem
                  </MenuItem>
                  <MenuItem onClick={() => handleScroll("roadmap")}>
                    Roadmap
                  </MenuItem>
                  <MenuItem onClick={() => handleScroll("contact")}>
                    Contact
                  </MenuItem>
                </Menu>
              </>
            ) : (
              <>
                {/* Show "Join Event" only if popup is NOT open */}
                {!isEventPopupOpen && (
                  <MenuItem
                    onClick={openEventPopup}
                    sx={{
                      color: "white",
                      border: "1px solid white",
                      background: "transparent",
                      fontWeight: "bold",
                      fontSize: "12px",
                      textTransform: "uppercase",
                      padding: "8px 15px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "relative",
                      borderRadius: "4px",
                      animation: `${pulseAnimation} 1.5s infinite, ${glowAnimation} 2s infinite`,
                      "&:hover": {
                        background: "rgba(255, 255, 255, 0.1)",
                        transform: "scale(1.05)",
                        transition: "all 0.3s ease",
                      },
                    }}
                    
                  >
                    Event
                  </MenuItem>
                )}
                <MenuItem
                  onMouseEnter={() => setEcosystemHover(true)}
                  onMouseLeave={() => setEcosystemHover(false)}
                  sx={{
                    color: "#ffffff",
                    fontWeight: 500,
                    mx: 2,
                    position: "relative",
                    "&:hover": {
                      color: "#00aaff", // Change text color on hover
                    },
                  }}
                >
                  Ecosystem
                  {ecosystemHover && (
                    <Box
                      onMouseEnter={() => setEcosystemHover(true)}
                      onMouseLeave={() => setEcosystemHover(false)}
                      sx={{
                        position: "absolute",
                        top: "110%", // Lower submenu slightly for better spacing
                        left: 0,
                        backgroundColor: "#0d0d0d", // Fully blackish background
                        color: "#ffffff",
                        backdropFilter: "blur(15px)", // Gentle blur effect for a modern look
                        boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.5)", // Deeper shadow for a grand look
                        borderRadius: "12px", // Rounded corners
                        padding: "16px 0", // Consistent padding
                        zIndex: 10,
                        width: 260, // Slightly wider for balance
                        transition: "all 0.3s ease", // Smooth transition for hover effects
                      }}
                    >
                      {/* Submenu Items */}
                      {[
                        { id: "navigator", label: "Navigator", icon: NavigatorIcon },
                        { id: "architect", label: "Architect", icon: ArchitectIcon },
                        { id: "accelerator", label: "Accelerator", icon: AcceleratorIcon },
                        { id: "foundry", label: "Foundry", icon: FoundryIcon },
                        { id: "insights", label: "Insights", icon: InsightsIcon },
                      ].map((item) => (
                        <MenuItem
                          key={item.id}
                          onClick={() => handleScroll(item.id)}
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            padding: "12px 20px",
                            transition: "all 0.3s ease",
                            "&:hover": {
                              backgroundColor: "#1a1a1a", // Slightly lighter black
                              color: "#00aaff", // Bluish spotlight effect
                              textShadow: "0px 0px 8px #00aaff", // Glow effect for text
                              transform: "translateX(5px)", // Smooth motion
                            },
                          }}
                        >
                          <Box sx={{ display: "flex", alignItems: "center" }}>
                            <img
                              src={item.icon}
                              alt={item.label}
                              style={{ width: 24, height: 24, marginRight: 10 }}
                            />
                            {item.label}
                          </Box>
                        </MenuItem>
                      ))}
                    </Box>
                  )}
                </MenuItem>

                <MenuItem
                  onClick={() => handleScroll("roadmap")}
                  sx={{
                    color: "#ffffff",
                    fontWeight: 500,
                    mx: 2,
                    position: "relative",
                    "&:hover": {
                      color: "#007aff",
                    },
                  }}
                >
                  Roadmap
                </MenuItem>

                <MenuItem
                  onClick={() => handleScroll("contact")}
                  sx={{
                    color: "#ffffff",
                    fontWeight: 500,
                    mx: 2,
                    position: "relative",
                    "&:hover": {
                      color: "#007aff",
                    },
                  }}
                >
                  Contact
                </MenuItem>
              </>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
