// display feed of bets from friend network
import React, { useState } from 'react';
import CardBox from '../components/CardBox';
import { Container, Typography, Button, Link } from '@mui/material';



export default function Home() {


  // const { loading, data } = useQuery(QUERY_BETS);
  // const bets = data?.bets || [];
 
  return (
    <Container className="container">
      <Typography variant="headingFont" >
        Betting Activity
      </Typography>     
      <div>
        {/* this is coming from the components, could be made into where all the current bets go */}
        {/* BetFiller is merely a placeholder for now*/}
        <CardBox /> 
      </div>  
      
            
       
    </Container>
  )
}


