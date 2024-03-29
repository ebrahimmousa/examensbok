import React from "react";
import { AppBar, Toolbar, Button, Typography, Container } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Container>
        <Toolbar>
          <Typography
            variant="h6"
            component={Link}
            to="/"
            color="inherit"
            sx={{ flexGrow: 1 }}
          >
            ExamensBok
          </Typography>
          <div sx={{ display: { xs: "none", sm: "block" } }}>
            <Button component={Link} to="/" color="inherit">
              Home
            </Button>
            <Button component={Link} to="/all-products" color="inherit">
              All Products
            </Button>
            <Button component={Link} to="/contact" color="inherit">
              Contact Us
            </Button>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
