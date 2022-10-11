import React, { useState, useEffect } from "react";
import { Navigate, useParams, Link } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { BetList } from "../components/ProfileListofBets";

import {
  Container,
  Typography,
  Box,
  Paper,
  Avatar,
  Divider,
  Stack,
  Button,
  Grid,
} from "@mui/material";

import Auth from "../utils/auth";
import { QUERY_USER } from "../utils/queries";

export default function Profile2() {
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(QUERY_USER, {
    variables: { username: userParam },
  });

  // const user = data?.me || data?.user || {};
  // if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
  //   return <Navigate to="/profile" />;
  // }

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (!user?.username) {
  //   return (
  //     <h4>
  //       {" "}
  //       <Box>
  //         You need to be logged in to participate in You Betcha. Please use the{" "}
  //         <Button variant="contained">
  //           <Link to="/login">login </Link>
  //         </Button>{" "}
  //         OR{" "}
  //         <Button variant="contained">
  //           <Link to="/signup">signup.</Link>
  //         </Button>
  //       </Box>{" "}
  //     </h4>
  //   );
  // }

  return (
    <Container>
      <Typography variant="h6" color="primary" fontWeight="bold" gutterBottom>
        Your Profile
      </Typography>

      {/* <Avatar>LL</Avatar> */}
      <Stack direction="column" spacing={0.5}>
        <Avatar alt="Lindsey Lansford" sx={{ width: 56, height: 56 }}>
          LL
        </Avatar>
        <Typography fontWeight="bold">@userName</Typography>
        <Typography fontSize=".7rem">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore veniam
          vero molestiae, aperiam, harum incidunt ipsam rerum.
        </Typography>
      </Stack>

      <Divider />

      <BetList />

      {/* <Box>
        <Typography
          variant="h6"
          color="primary"
          fontWeight="bold"
          align="center"
        >
          My Bets
        </Typography>
        <Paper elevation={24} square>
          date stamp You bet...
        </Paper>
        <Paper elevation={24} square>
          date stamp You bet...
        </Paper>
        <Paper elevation={24} square>
          date stamp You bet...
        </Paper>
        <Paper elevation={24} square>
          date stamp You bet...
        </Paper>
        <Paper elevation={24} square>
          date stamp You bet...
        </Paper>
        <Paper elevation={24} square>
          date stamp You bet...
        </Paper>
        <Paper elevation={24} square>
          date stamp You bet...
        </Paper>
      </Box> */}

      <Divider />
      <div>
        <Box
          m={2}
          pt={1}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Button variant="contained" size="large" type="submit">
            Make A Bet
          </Button>
        </Box>
      </div>
    </Container>
  );
}
