//header component (branding, logo, etc)
import * as React from 'react'

import { Container, Button,  Typography, Box } from '@mui/material';


const Header = () => {

  return (
    <Container>
      <Box>
        <Typography 
          align="center"
          gutterBottom
          fontSize="1rem"
          color="primary"
          fontWeight="bold"
        >
          YouBetcha!
        </Typography>
      </Box>
    </Container>
  );
};

export default Header;