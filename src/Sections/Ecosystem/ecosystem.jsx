
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
const Ecosystem = () => {
  return (
    <Box sx={{  color: 'white', p: 5 }}>
      <Box textAlign="center">
        <Typography variant="h1" fontWeight="bold" mb={2} sx={{ fontSize: { xs: '2.5rem', sm: '4rem', md: '3rem' } }}>
          <span style={{ color: 'white' }}>We are on a mission</span>{' '}
          <span style={{ color: '#1976d2' }}>to democratize information</span> {/* Blue color */}
        </Typography>
        <Typography variant="body1" mb={5} sx={{ fontSize: { xs: '1rem', sm: '1.25rem', md: '1.1rem' } }}>
          Ready to guide you through the evolutionary phase, turning the transition into a financial opportunity for everyone.
        </Typography>
      </Box>

      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={6} md={2} textAlign="center">
          <Typography variant="h5" sx={{ color: '#A52A2A', pt: { md:12 } }}> {/* Brown color */}
            COMMUNITY
          </Typography>
          <Typography variant="h1" role="img" aria-label="community">👥</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={2} textAlign="center">
          <Typography variant="h5" sx={{ color: '#1976d2' }}> {/* Blue color */}
            INSIGHTS
          </Typography>
          <Typography variant="h1" role="img" aria-label="insights">👁️</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={2} textAlign="center">
          <Typography variant="h5" sx={{ color: '#9c27b0' }}> {/* Purple color */}
            NAVIGATOR
          </Typography>
          <Typography variant="h1" role="img" aria-label="navigator">📄</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={2} textAlign="center">
          <Typography variant="h5" sx={{ color: '#4caf50', pt: { md: 12 } }}> {/* Green color */}
            ACADEMY
          </Typography>
          <Typography variant="h1" role="img" aria-label="academy">🌐</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};


export default Ecosystem;
