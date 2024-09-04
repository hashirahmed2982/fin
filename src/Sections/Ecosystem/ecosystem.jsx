import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const Ecosystem = () => {
  return (
    <Box sx={{ height: '90vh', width: '100%', color: 'white', p: 5 }}>
      <Typography
        variant="overline"
        sx={{ color: '#1976d2', letterSpacing: '3px', mb: 2, pb: 2 }}
      >
        ECOSYSTEM
      </Typography>
      <Box textAlign="center">
        <Typography
          variant="h1"
          fontWeight="bold"
          mb={2}
          sx={{ fontSize: { xs: '2.5rem', sm: '4rem', md: '3rem' } }}
        >
          <span style={{ color: 'white' }}>We are on a mission</span>{' '}
          <span style={{ color: '#1976d2' }}>to democratize information</span> {/* Blue color */}
        </Typography>
        <Typography
          variant="body1"
          mb={5}
          sx={{ fontSize: { xs: '1rem', sm: '1.25rem', md: '1.1rem' } }}
        >
          Ready to guide you through the evolutionary phase, turning the transition into a financial opportunity for everyone.
        </Typography>
      </Box>

      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={6} md={2} textAlign="center">
          <Typography variant="h5" sx={{ color: '#A52A2A', pt: { md: 12 }, pb: 2 }}> {/* Brown color */}
            COMMUNITY
          </Typography>
          <img src="/3d_icon1.png" alt="community" style={{ width: '200px', height: '200px' }} />
        </Grid>
        <Grid item xs={12} sm={6} md={2} textAlign="center">
          <Typography variant="h5" sx={{ color: '#1976d2', pb: 2 }}> {/* Blue color */}
            INSIGHTS
          </Typography>
          <img src="/3d_icon2.png" alt="insights" style={{ width: '200px', height: '200px' }} />
        </Grid>
        <Grid item xs={12} sm={6} md={2} textAlign="center">
          <Typography variant="h5" sx={{ color: '#9c27b0', pb: 2 }}> {/* Purple color */}
            NAVIGATOR
          </Typography>
          <img src="/3d_icon3.png" alt="navigator" style={{ width: '200px', height: '200px' }} />
        </Grid>
        <Grid item xs={12} sm={6} md={2} textAlign="center">
          <Typography variant="h5" sx={{ color: '#4caf50', pt: { md: 12 }, pb: 2 }}> {/* Green color */}
            ACADEMY
          </Typography>
          <img src="/3d_icon4.png" alt="academy" style={{ width: '200px', height: '200px' }} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Ecosystem;
