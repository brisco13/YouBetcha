import * as React from 'react'
import { Container, Button, ButtonGroup, Typography, TextField, Box } from '@mui/material';


const MakeABet = () => {
  return (
    <Container>
      <Typography
        variant="headingFont"
        gutterBottom
        
      >
        Place Your Bet!
      </Typography>

      <form>
        {/* need this to search for other people to connect with */}
        <TextField
          label="Needs to be a search for other people to connect with"
          fullWidth
        // value={}
        // onChange={handleChange}
        />
        <TextField
          label="What is the bet?"
          fullWidth
          // value={}
          // onChange={handleChange}
          multiline
          rows={8}
        />
  
        <Button variant="contained"
          value="bet"
          type="submit"
          onClick={console.log("you placed a bet!")}
        >Share Your Bet!</Button>
      </form>
    
      <br />
    </Container>

  );
};

export default MakeABet;
