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
import logo from "/logo.jpg"; // Replace with your logo path

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#00000042' }} >
      <Container  maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          {/* Logo and Title aligned to the start */}
          <Box
            
            to="/"
            sx={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <img src={logo} alt="logo" style={{ width: 36, height: 36 }} />
            <Typography variant="h6" sx={{ ml: 1 }}>
              Finwing
            </Typography>
          </Box>

          {/* Menu icon aligned to the end */}
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleMenuOpen}>
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              PaperProps={{
                style: {
                  width: 200,
                },
              }}
            >
              <MenuItem  to="/navigator" onClick={handleMenuClose}>
                Navigator
              </MenuItem>
              <MenuItem  to="/insights" onClick={handleMenuClose}>
                Insights
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
