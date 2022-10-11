import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import { Container, Button, Typography, TextField, Box } from "@mui/material";
import Auth from "../utils/auth";

export default function SignUpForm() {
  const [formState, setFormState] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

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
    <Container className="container"
    display="flex">
      <Box variant="contained" fullWidth>
        <Typography
          // variant="pFont"
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
        <div className="sign-log-card">
          <Typography
            fontWeight="bold"
            fontSize="1.2rem"
            mt="2.2rem"
          >
            Create an Account
          </Typography>

          {data ? (
            <p>
              Success! You may now head {' '}
              <Link to='/home'>to the Bet Feed page.</Link>
            </p>
          ) : (
            <div>
              <form onSubmit={handleFormSubmit}>
                <TextField
                    fullWidth
                    size="small"
                  margin="dense"
                  className="form-input"
                  label="Name"
                  placeholder="Enter your name..."
                  name="name"
                  type="text"
                  value={formState.name}
                  onChange={handleChange}
                />
                <TextField
                    fullWidth
                    size="small"
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
                    size="small"
                  className="form-input"
                  label="Email Address"
                  placeholder="Enter your email address..."
                  type="email"
                  name="email"
                  margin="dense"
                  value={formState.email}
                  fullWidth
                  onChange={handleChange}
                />
                  <TextField
                    size="small"
                  className="form-input"
                  placeholder="*******"
                  label="Password"
                  helperText="Must be at least 1 letter, 1 number, and 7 characters"
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
                  justifyContent="center"
                >
                  <Button
                    className="submit-btn"
                    variant="contained"
                    name="signUp"
                    type="submit"
                    sx={{ width: 200 }}
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
                justifyContent="center"
              >
                  <Typography
                  fontSize=".8rem">
                  Already a member? <Link to="/login">Log In</Link>
                </Typography>
              </Box>
            </div>
          )}

          {error && (
            <div>
              <Typography variant="error">
                You didn't fill in all the fields
              </Typography>
            </div>
          )}
        </div>
      </Box>
    </Container>
  );
}
