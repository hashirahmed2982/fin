/* eslint-disable react/prop-types */
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';

// Grand Vaults Box Component
const GrandVaultsBox = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(145deg, rgba(165, 42, 42, 0.9), rgba(255, 160, 0, 0.7))', // Gradient background
  borderRadius: '10px',
  border: '2px solid #ff5722',
  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.8)', // Deep shadow for emphasis
  color: '#ffffff',
  padding: '30px',
  textAlign: 'center',
}))
// eslint-disable-next-line no-unused-vars
const Services = ({ item }) => {
  return (
    <Box
      className="info-card"
      sx={{
        backgroundColor:  'linear-gradient(145deg, rgba(28, 28, 28, 0.9), rgba(48, 48, 48, 0.9))',
        borderRadius: 3,
        border:  '1px solid rgba(21, 30, 54, 0.8)',
        boxShadow:  '0 6px 15px rgba(0, 0, 0, 0.5)',
        color: 'white',
        padding: '20px',
        width: '270px',
        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
        '&:hover': {
          transform:  'scale(1.05)',
          boxShadow:  '0 10px 20px rgba(0, 0, 0, 0.7)',
        },
      }}
    >
      {/* Title */}
      <Typography
        variant="h6"
        sx={{
          mb: 2,
          fontWeight: '600',
          fontSize: '1.4rem', // Beautiful larger font for title
          letterSpacing: '0.5px', // Slight letter spacing for elegance
          color: '#f5f5f5', // Bright white for contrast
          textShadow: '1px 1px 5px rgba(255, 223, 186, 0.7)', // Subtle shadow for depth
        }}
      >
        {item.title}
      </Typography>

      {/* Tagline */}
      <Typography
        variant="subtitle1"
        sx={{
          mb: 1,
          fontWeight: 'bold', // Increased font weight for better prominence
          color:  '#FFFFFF', // Slightly brighter for contrast
          textShadow: '1px 1px 3px rgba(0, 0, 0, 0.6)', // Added shadow for depth
        }}
      >
        {item.tagline}
      </Typography>

      {/* Description */}
      <Typography
        variant="body1"
        sx={{
          mb: 2,
          color: '#dcdcdc', // Soft gray for balance
          fontSize: '1rem', // Refined font size
          lineHeight: '1.6', // Spacing between lines for better readability
        }}
      >
        {item.description}
      </Typography>

      {/* Services */}
      {item.services.map((service, idx) => (
        <Typography
          key={idx}
          variant="body2"
          sx={{
            color: '#8ab4f8', // Soft blue color for services
            mb: 1, // Spacing between services
            fontSize: '0.95rem', // Keep the same size as points
            lineHeight: '1.5',
            fontWeight: '500', // Medium bold
            '&:before': {
              content: '"• "',
              color: '#6ea1f5', // Lighter blue bullet
              fontSize: '1.2rem',
              marginRight: '8px',
            },
          }}
        >
          {service}
        </Typography>
      ))}

      {/* CTA for VAULTS */}
      {item.title === 'VAULTS' && (
        <Typography
          variant="body2"
          sx={{
            mt: 3, // Spacing before CTA
            color: '#FFD700', // Gold color for CTA to draw attention
            fontWeight: 'bold',
            textAlign: 'center',
            fontSize: '1.2rem', // Make CTA larger for emphasis
            cursor: 'pointer',
            '&:hover': {
              color: '#ffffff', // White on hover
              textDecoration: 'underline', // Underline on hover for interaction
            },
          }}
        >
          Join the waitlist. {/* Displaying the waitlist message */}
        </Typography>
      )}
    </Box>
  );
};

export default Services;
