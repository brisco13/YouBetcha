import * as React from "react";
import { Container, Button, Typography, TextField, Box } from '@mui/material';

export default function LoginForm() {
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
        align="center" //center not working??
      >Sign In With Email 
      </Typography>
           
      <form>  
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
          label="Password (at least 1 letter, 1 number, and 7 characters"
          type="password"
          name="name"
          fullWidth
          // value={formState.password}
          // onChange={handleChange}
        />
        <Button
          variant="contained"
          value="logIn"
          type="submit"
          onClick={console.log("you clicked me")}
          sx={{ m: 3, width: 150 }}
        >
          Log In
        </Button>
      </form>

      {/* Take user to Login Page */}
      <Typography align="center">Don't have an account? Sign up today!</Typography>
      <Button variant="contained"
        onClick={console.log("you clicked me")}
      >Sign Up Now!</Button>
      
    </Container>
  )
}
