import { Box, Typography, Container, Card } from "@mui/material";
import { useState, useEffect, useRef } from "react";
import mapImage from '/world_map.png'; // Replace with your actual image path

const Map = ({id}) => {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [borderGlow, setBorderGlow] = useState({ top: 0, bottom: 0, left: 0, right: 0 });
  const [clients, setClients] = useState(0);
  const [revenue, setRevenue] = useState(0);
  const cardRef = useRef(null);
  const targetClients = 27;
  const targetRevenue = 180000; // $180k represented in cents to count properly
  // Function to update mouse position and border color intensity based on cursor proximity
  useEffect(() => {
    const handleScrollAnimation = () => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Start animation for clients
            const clientInterval = setInterval(() => {
              setClients((prevClients) => {
                if (prevClients < targetClients) {
                  return prevClients + 1;
                } else {
                  clearInterval(clientInterval);
                  return targetClients;
                }
              });
            }, 50); // Increment every 50ms

            // Start animation for revenue
            const revenueInterval = setInterval(() => {
              setRevenue((prevRevenue) => {
                if (prevRevenue < targetRevenue) {
                  return prevRevenue + 1800; // Increment to count up to $180k
                } else {
                  clearInterval(revenueInterval);
                  return targetRevenue;
                }
              });
            }, 10); // Increment every 10ms

            // Stop observing once animation starts
            observer.disconnect();
          }
        });
      });

      if (cardRef.current) {
        observer.observe(cardRef.current);
      }
    };

    handleScrollAnimation();
  }, []);

  const handleMouseMove = (event) => {
    const { left, top, width, height } = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - left) / width) * 100; // Convert to percentage
    const y = ((event.clientY - top) / height) * 100; // Convert to percentage
    setMousePosition({ x, y });

    // Calculate color intensity based on proximity to each side
    const topGlow = Math.max(0, (10 - y) * 10); // Stronger when closer to top (0% - 10%)
    const bottomGlow = Math.max(0, (y - 90) * 10); // Stronger when closer to bottom (90% - 100%)
    const leftGlow = Math.max(0, (10 - x) * 10); // Stronger when closer to left (0% - 10%)
    const rightGlow = Math.max(0, (x - 90) * 10); // Stronger when closer to right (90% - 100%)

    setBorderGlow({
      top: topGlow,
      bottom: bottomGlow,
      left: leftGlow,
      right: rightGlow,
    });
  };

  // Function to reset the spotlight and border color when mouse leaves the card
  const handleMouseLeave = () => {
    setMousePosition({ x: 50, y: 50 });
    setBorderGlow({ top: 0, bottom: 0, left: 0, right: 0 });
  };

  return (
    <Container id={id} maxWidth="lg" sx={{ py: 4 }}>
      {/* Card container */}
      <Card
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        sx={{
          p: 3,
          backgroundColor: '#1E1E1E', // Dark background color
          borderRadius: 3,
          border: '1px solid #151e36', // Default border color
          transition: '0.3s', // Smooth transition for hover effect
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)', // Subtle shadow
          position: 'relative', // Needed for the spotlight effect
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(57, 114, 255, 0.25) 0%, rgba(0, 0, 0, 0) 70%)`,
          // Dynamic border color based on cursor proximity

          borderTopWidth: '1px',
          borderBottomWidth: '1px',
          borderLeftWidth: '1px',
          borderRightWidth: '1px',
        }}
      >
        {/* Numbers positioned above the image */}
        <Box sx={{ textAlign: 'center', mb: 3 }}>
          <Typography variant="h4" component="span" sx={{ color: 'white', display: 'block', fontWeight: 'bold' }}>
          {clients}+ Clients
          </Typography>
          <Typography variant="h4" component="span" sx={{ color: 'white', display: 'block', fontWeight: 'bold' }}>
          ${Math.floor(revenue / 100)}k+
          </Typography>
        </Box>

        {/* Map image */}
        <Box
          component="img"
          src={mapImage}
          alt="World Map"
          sx={{
            width: '100%', // Full width of the card
            height: 'auto', // Maintain aspect ratio
            display: 'block', // Remove any space below the image
            borderRadius: 2, // Slight rounding of the image corners
          }}
        />
      </Card>
    </Container>
  );
};

export default Map;
