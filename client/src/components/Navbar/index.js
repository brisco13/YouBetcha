import * as React from "react";

import { Button, ButtonGroup, Typography, Container } from "@mui/material";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Feed from "@mui/icons-material/Feed";

// {/* The footer button bar */ }
const Navbar = () => {
  return (
    <Container>
      <ButtonGroup
        variant="contained"
        aria-label="nav buttons"
        color="secondary"
        fontSize="large"
        fullWidth
        //padding around the button box
        sx={{ padding: 1 }}
      >
        <Button
          onClick={console.log("Home button clicked, not working yet")}
          startIcon={<Feed />}
        >
          Home Feed
        </Button>

        <Button
          onClick={() => console.log("Bet button clicked, not working yet")}
          type="submit"
          startIcon={<AddCircleIcon />}
        >
          Make Bet
        </Button>

        <Button startIcon={<PersonPinIcon />}>My Profile</Button>
      </ButtonGroup>
    </Container>
  );
};

export default Navbar;
