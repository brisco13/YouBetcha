import * as React from "react";
import { useQuery } from '@apollo/client';
import BetList from './BetList';



import {
  Card,
  CardHeader,
  CardActions,
  IconButton,
  TextareaAutosize,
  Button,
  Avatar,
  Typography,
  Box,
  Paper,
  CardContent,
  CardMedia,
  Container
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HeartBrokenIcon from "@mui/icons-material/HeartBroken";

export default function CardBox() {
  return (

    <Container>

      <Card
        display="flex"
        raised
        variant="outlined"
        sx={{ margin: 5, border: 2 }}
      >
        <CardHeader
          avatar={
            <Avatar>
              B
            </Avatar>
          }
          title="Brisco bet Anne"
          subheader="createdAt"
        />
                
        <CardContent>
          <Typography sx={{ fontSize: 12 }} gutterBottom >
            The bet description: race mountain bike and then chug coke starlight
            
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="heart reaction">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="heart breaking">
            <HeartBrokenIcon />
          </IconButton>
          <TextareaAutosize
            aria-label="comment"
            value="comment"
            name="comment"
            placeholder="comment"
            style={{ width: 200 }}
          ></TextareaAutosize>
        </CardActions>
      </Card>
      <Card
      display="flex"
      raised
      variant="outlined"
      sx={{ margin: 5, border: 2 }}
    >
      <CardHeader
        avatar={
          <Avatar>
            B
          </Avatar>
        }
        title="Brisco bet Anne"
        subheader="createdAt"
      />
              
      <CardContent>
        <Typography sx={{ fontSize: 12 }} gutterBottom >
          The bet description: race mountain bike and then chug coke starlight
          
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="heart reaction">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="heart breaking">
          <HeartBrokenIcon />
        </IconButton>
        <TextareaAutosize
          aria-label="comment"
          value="comment"
          name="comment"
          placeholder="comment"
          style={{ width: 200 }}
        ></TextareaAutosize>
      </CardActions>
    </Card>
    </Container>
  );
}
