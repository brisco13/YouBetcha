import * as React from "react";

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
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HeartBrokenIcon from "@mui/icons-material/HeartBroken";

export default function CardBox() {
  return (
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
        {/* {" "} */}
        {/* {betTitle} */}
      
      {/* <CardMedia 
          component="img"
          height="194"
          image="http://via.placeholder.com/75"
          alt="placeholder box"
          variant="outlined"
          sx={{ border: 1 }}
          >
        </CardMedia> */}
      <CardContent>
        <Typography sx={{ fontSize: 12 }} gutterBottom>
          the bet description: race mountain bike and then chug coke starlight
          {/* {betDescription} */}
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
  );
}
