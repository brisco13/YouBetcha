import React from 'react'

import { Container, Button, Typography, Box, Paper } from '@mui/material';


export default function Profile() {
  return(
    <Container> 
      <Typography
        variant="h5"
        color="primary"
        fontWeight="bold"
        gutterBottom
      >
        Your Profile
      </Typography>

      
      <Box>
        {/* username, total stats (wins/loses) */}
        <Typography>Username here; Total Stats: Wins loses</Typography>
        
      </Box>

      <Box>
        <Typography variant="h6" color="primary" fontWeight="bold"
        align="center">
          My Bets
        </Typography>
        <Paper>
          date stamp
          You bet...
        </Paper>
        <Paper>
          date stamp
          You bet...
        </Paper>
        <Paper>
          date stamp
          You bet...
        </Paper>
        <Paper>
          date stamp
          You bet...
        </Paper>
        <Paper>
          date stamp
          You bet...
        </Paper>
        <Paper>
          date stamp
          You bet...
        </Paper>
        <Paper>
          date stamp
          You bet...
        </Paper>
        <Paper>
          date stamp
          You bet...
        </Paper>
        <Paper>
          date stamp
          You bet...
        </Paper>
        <Paper>
          date stamp
          You bet...
        </Paper>


      </Box>
      <br />
    </Container>


    
  )
}
