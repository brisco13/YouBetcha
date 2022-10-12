import React from "react";
import { Link } from 'react-router-dom';
import { Container, Button, Typography, TextField, Box } from '@mui/material';

const BetList = ({ bets, betAuthor, createdAt }) => {


  if (!bets.length) {
    return <Typography>No Bets Yet</Typography>
  }

  return (
    <Container>
      <Typography>Bets</Typography>
      {bets &&
        bets.map((bet) => (
        <Box key={bet._id}>
          
          <Typography>{bet.desc}</Typography>
                    
        </Box>
      ))}
    </Container>
  )
};

export default BetList;