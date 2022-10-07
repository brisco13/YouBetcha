import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_BET } from '../../utils/mutations';
import { QUERY_BETS } from '../../utils/queries';
import Auth from '../../utils/auth'
import { Container, Button, Typography, TextField, Box } from '@mui/material';

const BetForm = ({ props }) => {
  const [betDesc, setBetDesc] = useState('');
  const [charCount, setCharCount] = useState(0);
  
  // const [addBet, { error }] = useMutation(ADD_BET, {
  //   update(cache, { data: { addBet } }) {
  //     try {
  //       const { bets } = cache.readQuery({ query: QUERY_BETS });

  //       cache.writeQuery({
  //         query: QUERY_BETS,
  //         data: { bets: [addBet, ...bets] }
  //       });
  //     } catch (e) {
  //       console.error(e);
  //     }
  //   },
  // });

  // const handleFormSubmit = async (event) => {
  //   event.preventDefault();

  //   try {
  //     const { data } = await addBet({
  //       variables: {
  //         betDesc,
  //         // if there was only 1 author, it would then get Authentication
  //         participants: Auth.getProfile().data.username,
  //       },
  //     });
  //     setBetDesc('');
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
  
  // const handleChange = (event) => {
  //   const { name, value } = event.target;

  //   if (name === 'betDesc' && value.length <= 280) {
  //     setBetDesc(value);
  //     setCharCount(value.length);
  //   }
  // };

  return (
    <Container>
      <Box>BetForm -  waiting for database to connect to auth, typeDefs and resolvers to show up </Box>
      {/* {Auth.loggedIn() ? ( */}

      <>
        {/* <p
          // className={`m-0 ${
          //   charCount === 280 || error ? 'text-danger' : ''
          // }`}
        >
          Character Count: {charCount}/280
        </p> */}
        <form className="bet-form">
         {/* onSubmit={handleFormSubmit}> */}
          <div className="bet-textarea" >
            <TextField
              name="betDesc"
              placeholder="New bet..."
              value={betDesc}
              className="form-input"
              fullWidth
              // onChange={handleChange}
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
        </>
        {/* ) : ( */}
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
      {/* )}  */}
    </Container>

  )
}

export default BetForm;