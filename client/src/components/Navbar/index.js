import React from 'react'

import { Button, ButtonGroup, Typography, Container } from '@mui/material';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Feed from '@mui/icons-material/Feed';


// {/* The footer button bar */ }
const Navbar = () => {
  return (
   
    <Container>
      <ButtonGroup
        variant="contained"
        align="center"
        color="secondary" 
        fontSize="large"
        //padding around the button box
        sx={{ p:2 }}
        >
        <Button
          startIcon={<Feed />}
        >Home
        </Button>

        <Button
          onClick={() => console.log("Bet button clicked")}
          type="submit"
          fontSize="large"
          startIcon={<AddCircleIcon />}>    
          Make Bet
        </Button>
                
        <Button
          startIcon={<PersonPinIcon />}
          >My Profile
        </Button>          
      </ButtonGroup >
    </Container>
  );   
};

export default Navbar;