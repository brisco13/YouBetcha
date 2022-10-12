import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_BET } from '../utils/mutations';
import { QUERY_BETS } from '../utils/queries';
import Auth from '../utils/auth'

import { Container, Button, Typography, TextField, Box } from '@mui/material';


const MakeABetForm = () => {
  const [desc, setDesc] = useState('');
  const [participants, setParticipants] = useState('');
    
  const [addBet, { error }] = useMutation(ADD_BET, {
    update(cache, { data: { addBet } }) {
      try {
        const { bets } = cache.readQuery({ query: QUERY_BETS });

        cache.writeQuery({
          query: QUERY_BETS,
          data: { bets: [addBet, ...bets] }
        });
      } catch (e) {
        console.error(e);
      }
    },
  });
  
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const { data } = await addBet({
        variables: {
          desc,
          participants,
          betAuthor: Auth.getProfile().data.username,
        },
      });

      setDesc('');
      setParticipants('');
    } catch (e) {
      console.log(e);
    }
  };
  
  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'desc') {
      setDesc(value);
    }

    if (name === 'participants') {
      setParticipants(value);
    }
  }
  
  
  
  return (
    <Container>
      <Typography variant="headingFont" gutterBottom>
        Place Your Bet
      </Typography>

       {Auth.loggedIn() ? (
         
         <>
        <form className='bet-form'
            onSubmit={handleFormSubmit}>
          <Box
            component="form"
            spacing={2}>
          
            <TextField
              id="margin-normal" margin="normal"
              label="Search Friends"
              type="search"
              name="participants"
              placeholder="Who are you wanting to bet?"
              value={participants}
              className="form-input"
              fullWidth
              onChange={handleChange}
            />
            <TextField
              // required
              id="margin-dense" margin="dense"
              label="What is the bet?"
              name="desc"
              fullWidth
              rows={8}
              multiline
              value={desc}
              onChange={handleChange}
              />
          </Box>
      
          <Box
            m={2}
            pt={1}
            display="flex"
            alignItems="center"
            justifyContent="center"
            >
              <Button variant="contained"
                value="bet"
                size='large'
                type="submit"
              >Share Your Bet
              </Button>
          </Box>
            {error && (
              <div>
                {error.message}
              </div>
            )} 
          
        </form>

       </>
      ) : (
        <Box display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column">
        You need to be logged in.
        {' '}
          <Button variant="outlined">
            <Link to="/login" >LOGIN </Link>
        </Button>
        OR
          <Button variant="outlined">
            <Link to="/signup"> SIGN UP</Link>
          </Button>
        </Box>
      )}
    </Container>

  );
};


export default MakeABetForm;
