// display feed of bets from friend network
import React from 'react';
import { useQuery } from '@apollo/client';
import CardBox from '../components/CardBox';
import { QUERY_BETS } from '../utils/queries'
import { Container, Typography, Button } from '@mui/material';
// import SearchBar from '../components/Header/SearchBar';


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
      <CardBox /> 
      
      
      
            
       
    </Container>
  )
}


