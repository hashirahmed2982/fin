import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import useMediaQuery from "@mui/material/useMediaQuery";
import logo from "/logo3.png"; // Replace with your logo path

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
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
        backgroundColor: "#00000042", // Dark semi-transparent background
        backdropFilter: "blur(8px)", // Slight blur for elegance
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)", // Subtle shadow for depth
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          {/* Logo and Title */}
          <Box sx={{ display: "flex", alignItems: "center", color: "inherit" }} onClick={() => handleScroll('banner')}>
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
                color: "#ffffff", // White for contrast on black background
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
                  TransitionProps={{
                    style: {
                      transitionDelay: "100ms",
                    },
                  }}
                >
                  {["navigator", "insights", "roadmap", "contact"].map(
                    (section, index) => (
                      <MenuItem
                        key={section}
                        onClick={() => handleScroll(section)}
                        sx={{
                          color: "#ffffff",
                          "&:hover": {
                            backgroundColor: "#007aff",
                            transform: "translateX(5px)", // Slide-in effect on hover
                            transition: "background-color 0.3s ease, transform 0.3s ease",
                          },
                          transitionDelay: `${index * 50}ms`, // Staggered delay effect
                        }}
                      >
                        {section.charAt(0).toUpperCase() + section.slice(1)}
                      </MenuItem>
                    )
                  )}
                </Menu>
              </>
            ) : (
              <>
                {["Navigator", "Insights", "Roadmap", "Contact"].map(
                  (section) => (
                    <MenuItem
                      key={section}
                      onClick={() => handleScroll(section.toLowerCase())}
                      sx={{
                        color: "#ffffff",
                        fontWeight: 500,
                        mx: 2,
                        position: "relative",
                        "&:hover": {
                          color: "#007aff",
                          "&::after": {
                            transform: "scaleX(1)", // Show underline on hover
                            opacity: 1,
                          },
                        },
                        "&::after": {
                          content: '""',
                          position: "absolute",
                          width: "100%",
                          height: "2px",
                          bottom: "-4px",
                          left: 0,
                          backgroundColor: "#007aff",
                          transform: "scaleX(0)", // Initial state
                          transition: "transform 0.3s ease, opacity 0.3s ease",
                          opacity: 0,
                        },
                        transition: "color 0.3s ease",
                      }}
                    >
                      {section}
                    </MenuItem>
                  )
                )}
              </>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;