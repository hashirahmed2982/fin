import { Box, Typography, Container } from "@mui/material";
import mapImage from '/world_map.png'; // Replace with your actual image path

const Map = () => {
  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      {/* Number positioned above the image */}

      <Typography variant="h2" component="span" sx={{ color: 'white', display: 'block' }}>
  27 + Clients
</Typography>
<Typography variant="h2" component="span" sx={{ color: 'white', display: 'block' }}>
  $ 180k +
</Typography>

      {/* Map image */}
      <Box
        component="img"
        src={mapImage}
        alt="World Map"
        sx={{
          width: '100%', // Full width of the container
          height: 'auto', // Maintain aspect ratio
          display: 'block', // Block display to remove any space below the image
        }}
      />
    </Container>
  );
};

export default Map;
