import { useState, useEffect } from "react";
import { Dialog, DialogContent, Box, Button, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const EventBannerPopup = () => {
    const [open, setOpen] = useState(false);
    const imageUrl = "/event.jpg";

    useEffect(() => {
        setOpen(true); // Show popup on page load
    }, []);

    const handleClose = () => {
        setOpen(false); // Close popup permanently
    };

    const onJoinClick = () => {
        window.open("https://lu.ma/ok4bhccz", "_blank"); // Opens link in new tab
        
    };

    return (
        <Dialog
            open={open}
            onClose={handleClose}
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
                    onClick={handleClose}
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
                            border: "2px solid rgba(200, 200, 200, 0.7)", // Grayish border
                            background: "rgba(255, 255, 255, 0.1)", // Slight transparent overlay
                            backdropFilter: "blur(5px)", // Adds subtle blur effect
                            "&:hover": {
                                border: "2px solid white", // White border on hover
                                background: "rgba(255, 255, 255, 0.2)", // Slightly stronger overlay
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
