import React from 'react'

import { Container, Button, ButtonGroup, Typography, TextField, Box } from '@mui/material';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Feed from '@mui/icons-material/Feed';




export default function Profile() {

  return(
    <Container>
      <Box variant="contained" fullWidth>
        <Typography variant="h5">
          You Betcha!
        </Typography>

      </Box>

      <Typography
        variant="headingFont"
        align="center"
        gutterBottom
      >
        Make a Bet
      </Typography>

      <form>
        {/* making a bet */}
        <TextField
          id="filled-hidden-label-normal"
          label="Find a person"
          fullWidth
          // value={}
          // onChange={handleChange}
        />
        <TextField
          id="filled-hidden-label-normal"
          label="What is Your Bet?"
          fullWidth
          // value={}
          // onChange={handleChange}
          multiline
          rows={4}
        />
      </form>
      
      <br />

      
      {/* The footer button bar */}
      <ButtonGroup
        variant="contained"
        align="center"
        color="secondary" 
        fontSize="large"
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
        
      </ButtonGroup>

    </Container>


    
  )
}
