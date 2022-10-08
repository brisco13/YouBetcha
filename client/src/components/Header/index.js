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
          variant="h5"
          color="primary"
          fontWeight="bold"
        >
          You Betcha!
        </Typography>
      </Box>
    </Container>
  );
};

export default Header;