import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_BET } from '../../utils/mutations';
import { QUERY_BETS } from '../../utils/queries';
import Auth from '../../utils/auth'
import { Container, Button, Typography, TextField, Box } from '@mui/material';

const BetForm = ({ }) => {
  const [desc, setDesc] = useState('');
    
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
          // if there was only 1 author, it would then get Authentication
          participants: Auth.getProfile().data.username,
        },
      });
      setDesc('');
    } catch (e) {
      console.log(e);
    }
  };
  
  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'desc') {
      setDesc(value);
      
    }
  };

  return (
    <>
      <Container>
      
        {/* {Auth.loggedIn() ? ( */}

        <form className="bet-form"
         onSubmit={handleFormSubmit}>
          <div className="bet-textarea" >
            <TextField
              name="betDesc"
              placeholder="New bet..."
              value={desc}
              className="form-input"
              fullWidth
              onChange={handleChange}
            ></TextField>
          </div>

          <div className="col-12 col-lg-3">
            <Button variant="contained" type="submit" sx={{ m: 3, width: 150 }}>
              Add Bet
            </Button>
          </div>
        
          {/* {error && (
            <div className="">
              {error.message}
            </div>
          )} */}
        
        </form>
        //  ) : (  
          <Box>
          You need to be logged in to share your thoughts. Please{' '}
            <Button variant="contained">
              <Link to="/login">login </Link>
            </Button>
            OR
            <Button variant="contained">
              <Link to="/signup">signup.</Link>
            </Button>
        </Box>
        // )} 
      </Container>
    </> 

  )
}

export default BetForm;