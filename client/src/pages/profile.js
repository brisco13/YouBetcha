import React from 'react'
import Container from '@mui/material/Container';
import { Button, ButtonGroup, Typography } from '@mui/material';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Feed from '@mui/icons-material/Feed';
import TextField from '@mui/material/TextField';



export default function Profile() {

  return(
    <Container>
      <Typography
        variant="h4"
        fontWeight="bold"
        color="primary"
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

      <ButtonGroup
        variant="contained"
        align="center"
        color="error"
        fontSize="large"
      >
        <Button
          startIcon={<Feed />}
        >Home</Button>

        <Feed
          fontSize="large"
          color="error"
        />
        <Button
          onClick={() => console.log("Bet button clicked")}
          type="submit"
          color="error"
          fontSize="large"
          startIcon={<AddCircleIcon />}>    
          Make Bet
        </Button>
                
        <PersonPinIcon
            color="error" //color of icon
            fontSize="large"
        />
      </ButtonGroup>

    </Container>


    
  )
}
