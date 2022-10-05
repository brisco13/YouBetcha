//header component (branding, logo, etc)
import React from 'react'

import { Container, Button,  Typography, Box } from '@mui/material';


const Header = () => {

  return (
    <Container>
      
      <Box>
        <Typography 
          align="center"
          gutterBottom
        >
          You Betcha!
        </Typography>

      </Box>
      <br />
    </Container>
  );
};

export default Header;