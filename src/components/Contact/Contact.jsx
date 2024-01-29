import React from "react";
import { Box, Typography, TextField, Button, Container } from "@mui/material";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Navbar from "../navbar/NavBar";

const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle the form submission here
    console.log("Form submitted!");
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />

      <Header />

      <Container
        component="main"
        maxWidth="md"
        sx={{ flex: 1, padding: "40px 20px", textAlign: "center" }}
      >
        <Typography variant="h4" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: 4 }}>
          Feel free to reach out to us using the form below:
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <TextField
              label="Name"
              variant="outlined"
              size="small"
              margin="normal"
              required
              fullWidth
            />
            <TextField
              label="Email"
              variant="outlined"
              size="small"
              margin="normal"
              required
              fullWidth
            />
            <TextField
              label="Message"
              variant="outlined"
              size="small"
              margin="normal"
              multiline
              rows={4}
              required
              fullWidth
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ marginTop: 2 }}
            >
              Submit
            </Button>
          </Box>
        </form>
      </Container>

      <Footer />
    </Box>
  );
};
export default ContactUs;
