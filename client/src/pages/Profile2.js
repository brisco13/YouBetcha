import * as React from "react";

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

export default function Profile2() {
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

      <Box>
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
      </Box>

      <Divider />
      <div>
        <Box m={2} pt={3} display="flex" alignItems="center" justifyContent="center">
          <Button variant="contained" size="large" type="submit">
            Make A Bet
          </Button>
        </Box>
      </div>
    </Container>
  );
}