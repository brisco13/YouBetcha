//header component (branding, logo, etc)
import * as React from 'react'
import { Link } from "react-router-dom";
import { Container, Button,  Typography, Box } from '@mui/material';


const Header = () => {

  return (
    <Container>
      <Box>
        <Link exact="true" to="/home">
        <Typography 
          align="center"
          gutterBottom
          fontSize="1rem"
          color="primary"
          fontWeight="bold"
        >
          You Betcha!
          </Typography>
          </Link>
      </Box>
    </Container>
  );
};

export default Header;