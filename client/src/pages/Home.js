// display feed of bets from friend network
import React from 'react';
import { useQuery } from '@apollo/client';
import HomepageBetCard from '../components/HomepageBetCard';
import { QUERY_BETS } from '../utils/queries'
import { Container, Typography, Button, Box,  } from '@mui/material';
import BottomNav from '../components/Navbar/BottomNav';
import "../styles/nav.css"
import Auth from '../utils/auth'
import { Link } from 'react-router-dom';

export default function Home() {


  // const { loading, data } = useQuery(QUERY_BETS);
  // const bets = data?.bets || [];
 
  return (
    <Container className="container">
      {/* <SearchBar/> */}
      <Typography variant="headingFont" >
        Betting Activity
      </Typography>     
    {Auth.loggedIn() ? (
      <div>
      <HomepageBetCard />

      <BottomNav/>
      </div>
  ) : (
        <Box display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column">
        You need to be logged in.
        {' '}
          <Button variant="outlined">
            <Link to="/login" >LOGIN </Link>
        </Button>
        OR
          <Button variant="outlined">
            <Link to="/signup"> SIGN UP</Link>
          </Button>
        </Box>
      )}
      
    </Container>
  
  );
}


