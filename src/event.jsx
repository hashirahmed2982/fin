/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { Dialog, DialogContent, Box, Button, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const EventBannerPopup = ({ isOpen, onClose }) => {
  const imageUrl = "/event1.jpg";

  
  const onJoinClick = () => {
    window.open("https://lu.ma/ok4bhccz", "_blank");
  };

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      sx={{
        "& .MuiDialog-paper": {
          borderRadius: "12px",
          overflow: "hidden",
          maxWidth: "30vw",
        },
      }}
    >
      <DialogContent sx={{ p: 0, position: "relative" }}>
        {/* Close Button */}
        <IconButton
          onClick={onClose}
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            color: "white",
            background: "rgba(0,0,0,0.5)",
            "&:hover": { background: "rgba(0,0,0,0.7)" },
            zIndex: 2,
          }}
        >
          <CloseIcon />
        </IconButton>

        {/* Join Button Above Image */}
        <Box
          sx={{
            position: "absolute",
            bottom: 76,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 2,
            width: "auto",
            textAlign: "center",
          }}
        >
          <Button
            variant="outlined"
            onClick={onJoinClick}
            sx={{
              px: 4,
              py: 1,
              fontWeight: "bold",
              color: "white",
              border: "2px solid rgba(200, 200, 200, 0.7)",
              background: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(5px)",
              "&:hover": {
                border: "2px solid white",
                background: "rgba(255, 255, 255, 0.2)",
              },
            }}
          >
            Join Event
          </Button>
        </Box>

        {/* Full Image Without Borders */}
        <Box
          component="img"
          src={imageUrl}
          alt="Event Banner"
          sx={{
            width: "100%",
            height: "100%",
            maxHeight: "90vh",
            objectFit: "contain",
          }}
        />
      </DialogContent>
    </Dialog>
  );
};

export default EventBannerPopup;
