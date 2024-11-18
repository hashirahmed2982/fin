/* eslint-disable react/prop-types */
import { Box, Typography, Container, Grid } from "@mui/material";

// Custom styles based on branding guidelines
const customStyles = {
  container: {
    height: 'auto',
    width: '100%',
    color: 'white',
    py: 7,
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    overflow: 'hidden', // Ensure rays don't overflow
  },
  insightBox: {
    backgroundColor: "#1E1E1E", // As per your brand's secondary colors
    color: "white",
    borderRadius: 2,
    overflow: "hidden",
    boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
    transition: "transform 0.3s ease-in-out",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
  image: {
    width: "100%",
    height: "auto",
  },
  boxPadding: {
    padding: 2,
  },
  title: {
    fontFamily: "Polysans Bulky, sans-serif", // Custom font for headlines
    marginBottom: "16px",
  },
  subtitle: {
    fontFamily: "Grotesque, sans-serif", // Custom font for body text
    fontWeight: 500, // Adjust font weight if needed
    color: "#f5f5f5", // Slightly lighter color for subtitles
  },
  description: {
    fontFamily: "Grotesque, sans-serif", // Custom font for body text
    marginBottom: "8px",
    color: "#cfcfcf", // Lighter color for better readability
  },
  caption: {
    fontFamily: "Grotesque, sans-serif", // Custom font for body text
    color: "#a9a9a9", // Even lighter for less emphasis
  },
};

const InsightBox = ({ imageUrl, title, subtitle, description, date, timeToRead }) => {
  return (
    <Box sx={customStyles.insightBox}>
      <img
        src={imageUrl}
        alt={title}
        style={customStyles.image}
      />
      <Box sx={customStyles.boxPadding}>
        <Typography variant="subtitle2" gutterBottom sx={customStyles.subtitle}>
          {subtitle}
        </Typography>
        <Typography variant="h6" component="h2" gutterBottom sx={customStyles.title}>
          {title}
        </Typography>
        <Typography variant="body2" gutterBottom sx={customStyles.description}>
          {description}
        </Typography>
        <Typography variant="caption" display="block" gutterBottom sx={customStyles.caption}>
          {date} · {timeToRead} min read
        </Typography>
      </Box>
    </Box>
  );
};

const Insights = ({ id }) => {
  return (
    <Box id={id} sx={customStyles.container}>
      <Container maxWidth="lg" sx={{ maxWidth: '1000px' }}>
        <Box display="flex" justifyContent="center" alignItems="center" sx={{ mr: 6 }}>
          <img
            src="/section.png" // Replace with your image path or URL
            alt="Icon"
            style={{ width: 100, height: 108, marginRight: 0, objectFit: 'contain', verticalAlign: 'middle' }} // Add verticalAlign and objectFit if needed
          />
          <Typography
            variant="h6"
            sx={{
              color: '#FFFFFF', // White text color
              fontWeight: 'bold',
              letterSpacing: '2px' // Adjust letter spacing
            }} // Remove mb and pb for better alignment
          >
            INSIGHTS
          </Typography>
        </Box>
        <Typography variant="h1"
          fontWeight="bold"
          mb={2}
          sx={{ fontSize: { xs: '2rem', sm: '2.5rem', md: '2.5rem' }, lineHeight: 1.2 }}>
          Your gateway to real-time analysis, expert reviews, and macroeconomic perspectives shaping the Web 3.0 landscape.
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <InsightBox
              imageUrl="https://insights.glassnode.com/content/images/2024/08/Group-137691791.png"
              title="Mid-Cycle Wipeout"
              subtitle="The Week Onchain Newsletter"
              description="August has already been an exceptionally eventful month across both equity and digital asset markets..."
              date="Aug 7, 2024"
              timeToRead="6"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <InsightBox
              imageUrl="https://insights.glassnode.com/content/images/2024/07/woc-31-cover.png"
              title="Facing Mt. Gox Distribution"
              subtitle="The Week Onchain Newsletter"
              description="After more than a decade of legal process, the long awaited creditor distribution of the Bitcoin recovered..."
              date="Jul 29, 2024"
              timeToRead="7"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <InsightBox
              imageUrl="https://insights.glassnode.com/content/images/size/w2000/2024/08/Coinbase-Q3_png.png"
              title="Coinbase: The Q3 Guide to Crypto "
              subtitle="Bitcoin Analysis & Research"
              description="In the Q3 'Guide to Crypto Markets' by Glassnode and Coinbase Institutional, we explore the rapid..."
              date="Jul 25, 2024"
              timeToRead="4"
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Insights;
