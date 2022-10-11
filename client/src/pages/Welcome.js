import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations'
import Auth from '../utils/auth'
import { Container, Button, Typography, TextField, Box } from '@mui/material';

const Welcome = () => {

  return (
    <Container className='container'>
      <Box variant="contained" m={2} pt={1} display="flex"alignItems="center"
          justifyContent="center">
        <div className='welcome'>
          <Typography variant="pFont" gutterBottom display="flex" alignItems="center" justifyContent="center">Welcome to You Betcha!
          </Typography> 
          
          <Typography display="flex" alignItems="center" justifyContent="center">Want to keep track of your bets with friends?</Typography>
         
          <Box m={2} pt={1} display="flex" alignItems="center"
          justifyContent="center">
            <Typography> Don't have an account?</Typography>
            <Button variant="contained" type="submit" size="large"
              sx={{ width: 150, color: 'white' }}
              className="sign-log-btn">
              <Link to="/signup">Sign Up Now!</Link>
            </Button>
          </Box>

          <Box m={2} pt={1} display="flex"alignItems="center"
          justifyContent="center">
             <Typography> Already A Member?</Typography>
            <Button variant="contained" type="submit" size="large" 
              sx={{ width: 150, color:'white' }}
              className="sign-log-btn">
              <Link to="/login">Log In Now!</Link>
            </Button>
            
          </Box>
        </div>
      </Box>
    </Container>
  );
};

export default Welcome;