import React, { useEffect, useRef, useState } from "react";
import { Box, Typography, IconButton, Dialog, useMediaQuery, Card, Container } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import ContactForm from "./ContactForm"; // Your existing ContactForm component

const ContactSection = ({ id }) => {
    const [open, setOpen] = useState(false);
    const isMobile = useMediaQuery('(max-width:768px)');
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
            {/* Contact Section */}
            <Card
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                sx={{
                    py: 16,
                    color: "white",
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
                <Typography
                    variant={isMobile ? 'h4' : 'h3'}
                    sx={{ fontWeight: 'bold', mb: 3, textTransform: 'uppercase', letterSpacing: '2px' }}
                >
                    <span style={{ color: '#1a73e8' }}>Contact</span> Us
                </Typography>
                <Typography variant={isMobile ? 'body1' : 'h6'} sx={{ fontSize: '1.25rem', opacity: 0.9 }}>
                    Like what you've seen? Get in touch to learn more.
                </Typography>


                {/* Email Icon */}
                <IconButton
                    onClick={() => setOpen(true)}
                    sx={{
                        mt: 2,
                        border: "2px solid white",
                        borderRadius: "50%",
                        p: 1.5,
                        color: "white",
                        "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.2)" },
                    }}
                >
                    <MailOutlineIcon sx={{ fontSize: "30px" }} />
                </IconButton>
            </Card>

            {/* Contact Form in Modal */}
            <ContactForm open={open} onClose={() => setOpen(false)} />
        </Container>
    );
};

export default ContactSection;
