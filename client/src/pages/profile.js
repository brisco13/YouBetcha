import React from 'react'

import { Container, Button, ButtonGroup, Typography, TextField, Box } from '@mui/material';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Feed from '@mui/icons-material/Feed';


export default function Profile() {

  return(
    <Container>
      {/* could be the Header component later */}
      <Box variant="contained" fullWidth>
        <Typography variant="h5"
          align="center"
          gutterBottom
        >
          You Betcha!
        </Typography>

      </Box>

      <Typography
        variant="headingFont"
        gutterBottom
      >
        Your Profile
      </Typography>

      {/* making a bet */}
      <form>
        <TextField
          id="filled-hidden-label-normal"
          label="Single Text line"
          fullWidth
          // value={}
          // onChange={handleChange}
        />
        <TextField
          id="filled-hidden-label-normal"
          label="Text Area"
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
        
      </ButtonGroup>

    </Container>


    
  )
}
