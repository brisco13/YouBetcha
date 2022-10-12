// display feed of bets from friend network
import React from 'react';
import { useQuery } from '@apollo/client';
import HomepageBetCard from '../components/HomepageBetCard';
import { QUERY_BETS } from '../utils/queries'
import { Container, Typography, Button } from '@mui/material';
import BottomNav from '../components/Navbar/BottomNav';
import "../styles/nav.css"

export default function Home() {


  const { loading, data } = useQuery(QUERY_BETS);
  const bets = data?.bets || [];
 
  return (
    <Container className="container">
      {/* <SearchBar/> */}
      <Typography variant="headingFont" >
        Betting Activity
      </Typography>     

        {/* this is coming from the components, could be made into where all the current bets go */}
        {/* BetFiller is merely a placeholder for now*/}
      <HomepageBetCard />
      <BottomNav/>

    </Container>
  )
}


