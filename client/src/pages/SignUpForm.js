import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from "@apollo/client";
import { ADD_USER } from '../utils/mutations';
import { Container, Button, Typography, TextField, Box } from '@mui/material';
import Auth from '../utils/auth';

export default function SignUpForm() {
  const [formState, setFormState] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    // profilePic: 'http://via.placeholder.com/150',
  });

  // const [profilePic, setProfilePic] = useState({});
  const [addUser, { error, data }] = useMutation(ADD_USER);
  
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });
      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Container className="container">
      {/* could be the Header component later */}
      <Box variant="contained" fullWidth>
        <div className="sign-log-card">

          <Typography variant="pFont" gutterBottom>
            Create an Account
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
                  fullWidth
                  margin="dense"
                  className="form-input"
                  label="Name"
                  placeholder="Enter your name..."
                  name="name"
                  type="text"
                  value={formState.name}
                  onChange={handleChange}

                />
                {/* <TextField
                  fullWidth
                  className="form-input"
                  label="Last Name"
                  name="lastName"
                  type="text"
                  value={formState.lastName}
                  onChange={handleChange}

                /> */}
                <TextField
                  fullWidth
                  className="form-input"
                  margin="dense"
                  label="Username"
                  placeholder="Enter your username..."
                  name="username"
                  type="text"
                  value={formState.username}
                  onChange={handleChange}

                />
                <TextField
                  className="form-input"
                  label="Email Address"
                  placeholder='Enter your email address...'
                  type="email"
                  name="email"
                  margin="dense"
                  value={formState.email}
                  fullWidth
                  onChange={handleChange}
                />
                <TextField
                  className="form-input"
                  placeholder="*******"
                  label="Password (use at least 1 letter, 1 number, and 7 characters)"
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
                <Button className="submit-btn"
                  variant="contained"
                  name="signUp"
                  type="submit"
                  sx={{ width: 150 }}
                >
                  Sign Up
                    </Button>
                    </Box>
              </form>

                <Box
                m={2}
                pt={1}
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center">
                <Typography>Already a member?{' '}</Typography>
                <Button variant="outlined"
                  className="sign-log-btn">
                  <Link to="/login">Log In</Link>
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
