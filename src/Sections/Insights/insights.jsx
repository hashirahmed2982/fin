import { Box, Typography, Container, Grid } from "@mui/material";

const InsightBox = ({ imageUrl, title, subtitle, description, date, timeToRead }) => {
  return (
    <Box
      sx={{
        backgroundColor: "#1E1E1E",
        color: "white",
        borderRadius: 2,
        overflow: "hidden", // Ensures the border radius is applied to the image as well
        boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
      }}
    >
      <img 
        src={imageUrl} 
        alt={title} 
        style={{
          width: "100%", 
          height: "auto",
        }} 
      />
      <Box sx={{ padding: 2 }}>
        <Typography variant="subtitle2" gutterBottom>
          {subtitle}
        </Typography>
        <Typography variant="h6" component="h2" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" gutterBottom>
          {description}
        </Typography>
        <Typography variant="caption" display="block" gutterBottom>
          {date} · {timeToRead} min read
        </Typography>
      </Box>
    </Box>
  );
};

const Insights = () => {
  return (
    <Box
      sx={{
        height: "100vh", // Full viewport height
        width: "100%", // Full viewport width
        color: "white",
        py: 4,
        textAlign: "center",
        display: "flex", // Flexbox for vertical and horizontal centering
        alignItems: "center", // Center items vertically
        justifyContent: "center", // Center items horizontally
        flexDirection: "column",
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h3" component="h1" gutterBottom>
          Insights
        </Typography>
        <Typography variant="h6" paragraph>
          Finwing Insights: Your gateway to real-time analysis, expert reviews, and macroeconomic perspectives shaping the Web 3.0 landscape.
        </Typography>
        <Grid container spacing={3}>
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
              title="Coinbase + Glassnode: The Q3 Guide to Crypto Markets"
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
