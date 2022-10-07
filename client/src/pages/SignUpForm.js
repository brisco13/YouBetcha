import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from "@apollo/client";
import { ADD_USER } from '../utils/mutations';
import { Container, Button, Typography, TextField, Box } from '@mui/material';
import Auth from '../utils/auth';

export default function SignUpForm() {
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
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
        <div className="signup-card">

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
                className="form-input"
                label="First Name"
                placeholder="first name"
                name="firstName"
                type="text"
                value={formState.firstName}
                onChange={handleChange}

              />
              <TextField
                fullWidth
                className="form-input"
                label="Last Name"
                name="lastName"
                type="text"
                value={formState.lastName}
                onChange={handleChange}

              />
              <TextField
                fullWidth
                className="form-input"
                label="username or screen name"
                name="username"
                type="text"
                value={formState.name}
                onChange={handleChange}

              />
              <TextField
                className="form-input"
                label="Email"
                type="email"
                name="email"
                value={formState.email}
                fullWidth
                // value={formState.email}
                onChange={handleChange}
              />
              <TextField
                className="form-input"
                placeholder="*******"
                label="Password (use at least 1 letter, 1 number, and 7 characters"
                type="password"
                name="password"
                fullWidth
                value={formState.password}
                onChange={handleChange}
              />
              <Button className="submit-btn"
                variant="contained"
                name="signUp"
                type="submit"
                sx={{ m: 3, width: 150 }}
                >
                Sign Up
              </Button>
            </form>

                <p>
                  <Typography>Already a member?{' '}</Typography>
                  <Button variant="contained" className="login-btn">
                    <Link to="/login">Log In</Link>
                  </Button>
                
                </p>    
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
  )
}
