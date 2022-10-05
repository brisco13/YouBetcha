import React from 'react'
import { Container, Button, Typography, TextField, Box } from '@mui/material';


export default function SignUpForm() {
  return (

    <Container>
      {/* could be the Header component later */}
      <Box variant="contained" fullWidth>
        <Typography
          variant="headingFont"
          align="center"
          gutterBottom
          sx={{ p: 9}} //made it move right instead of giving padding???
        >
          You Betcha!
        </Typography>

      </Box>
      <Typography variant="pFont"
        gutterBottom
      >Create an Account 
      </Typography>
           
      <form>  
        <TextField
          className="form-input"
          label="First Name"
          name="firstName"
          fullWidth
          // value={formState.firstName}
          // onChange={handleChange}
        />
        <TextField
          className="form-input"
          label="Last Name"
          name="lastName"
          fullWidth
          // value={formState.lastName}
          // onChange={handleChange}
        />
        <TextField
          className="form-input"
          label="Email"
          type="email"
          name="email"
          fullWidth
          // value={formState.email}
          // onChange={handleChange}
        />
        <TextField
          className="form-input"
          label="Password (use at least 1 letter, 1 number, and 7 characters"
          type="password"
          name="name"
          fullWidth
          // value={formState.password}
          // onChange={handleChange}
        />
        <Button
          variant="contained"
          value="signUp"
          type="submit"
          onClick={console.log("you clicked me")}
          sx={{ m: 3, width: 150 }}
        >
          Sign Up
        </Button>
      </form>

      {/* Take user to Login Page */}
      <Button variant="contained"
        onClick={console.log("you clicked me")}
      >Log In</Button>
      
    </Container>
  )
}
