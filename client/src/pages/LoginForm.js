import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations'
import Auth from '../utils/auth'
import { Container, Button, Typography, TextField, Box } from '@mui/material';

const LoginForm = (props) => {

  const [formState, setFormState] = useState({ email: '', password: '' });
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
    <Container className='container'>
      {/* could be the Header component later */}
      <Box variant="contained" fullWidth>
        <div className='sign-log-card'>
          <Typography variant="pFont" gutterBottom> Log In With Email
          </Typography>

          {data ? (
            <p>
              Success! You may now head {' '}
              <Link to='/'>to the Bet Feed page.</Link>
            </p>
          ) : (
            <div>
                
              <form onSubmit={handleFormSubmit}>
                  <TextField
                  className="form-input"
                  label="Email Address"
                  type="email"
                  name="email"
                  placeholder='Enter your email address...'
                  fullWidth
                  value={formState.email}
                  onChange={handleChange}
                  margin="dense"
                />
                <TextField
                  placeholder="*******"
                  className="form-input"
                  label="Password"
                  type="password"
                  name="password"
                  margin="dense"
                  fullWidth
                  value={formState.password}
                  onChange={handleChange}
                  />
                  <Box
                    m={2}
                    pt={1}
                    display="flex"
                    alignItems="center"
                    justifyContent="center">
                <Button
                  className='submit-btn'
                  variant="contained"
                      type="submit"
                      size="large"
                  sx={{ width: 150 }}
                >Log In
                  </Button>
                </Box>
              </form>
                
              <Box m={2}
                    pt={1}
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center">
                <Typography> Don't have an account?</Typography>
                <Button variant="outlined"
                  className="sign-log-btn">
                  <Link to="/signup">Sign Up Now!</Link>
                </Button>
              </Box>
            </div>
          )}
          
          {error && (
            <div>
              <Typography variant="secondary">You didn't fill in all the fields</Typography>
            </div>
          )}

        </div>
      </Box>
    </Container>
  );
};

export default LoginForm;