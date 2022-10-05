// display feed of bets from friend network
import * as React from 'react';
import { Container, Button, Typography, TextField, Box } from '@mui/material';
import Stack from "@mui/material/Stack";


export default function Home() {
  return (
    <Container>
      <Typography variant="headingFont" >
        Betting Activity
      </Typography>
      <Stack>
        InActive/closed Bets Box
      </Stack>
      <Stack>
        Active/Open Bets
      </Stack>
    </Container>
  )
}


