import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations'
import Auth from '../utils/auth'
import { Container, Button, Typography, TextField, Box, Alert } from '@mui/material';

const LoginForm = (props) => {

  const [formState, setFormState] = useState({  email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  //update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  //submit form 
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await login({
        variables: { ...formState },
      });
      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }
    //clear form values 
    setFormState({
      email: '',
      password: '',
    });
  };

  return (
    <Container className='container'
      display="flex">
      <Box variant="contained" fullwidth="true">
      <Typography
          variant="headingFont"
          display="flex"
          alignItems="center"
          justifyContent="center"
          fontSize="2rem"
        >
          Welcome
        </Typography>

        <Typography
          display="flex"
          alignItems="center"
          justifyContent="center"
          fontSize=".8rem"
        >
          Want to keep track of your bets with friends?
        </Typography>
        <div className='sign-log-card'>
          <Typography fontWeight="bold"
            fontSize="1.2rem"
            mt="2.6rem"
          >
            Log in with Email
          </Typography>

          {data ? (
            <p>
              Success! You may now head {' '}
              <Link to='/home'>to the Bet Feed page.</Link>
            </p>
          ) : (
              <form onSubmit={handleFormSubmit}>
                  <TextField
                    size="small"
                  className="form-input"
                  label="Email Address"
                  type="email"
                  name="email"
                  placeholder='Enter your email address...'
                  fullWidth="true"
                  value={formState.email}
                  onChange={handleChange}
                  margin="dense"
                />
                  <TextField
                  size="small"
                  placeholder="*******"
                  className="form-input"
                  label="Password"
                  type="password"
                  name="password"
                  margin="dense"
                  fullWidth="true"
                  value={formState.password}
                  onChange={handleChange}
                  />
                  <Box
                    m={2}
                    pt={1}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    >
                    <Button
                      className='submit-btn'
                      variant="contained"
                      type="submit"
                      size="large"
                      name="login"
                      sx={{ width: 200 }}
                    >Log In
                  </Button>
                </Box>
              </form>
          )}
          
          <Box
            m={2}
            pt={1}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Typography
              fontSize=".8rem">
              Don't have an account? <Link to="/signup">Sign Up Now</Link>
                  </Typography>
          </Box>
          
          {error && (
            <div>
              <Alert variant="filled" severity="error">
              Something went wrong. Please try again.
              </Alert>
            </div>
          )}

        </div>
      </Box>
    </Container>
  );
};

export default LoginForm;