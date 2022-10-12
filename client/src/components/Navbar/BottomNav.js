import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { Link } from "react-router-dom";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Feed from "@mui/icons-material/Feed";
import { Paper } from "@mui/material";

import "../../styles/nav.css"



export default function BottomNav() {
  const [value, setValue] = React.useState();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={16}>
      <BottomNavigation className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        value={value}
        onChange={handleChange}>
        <Link to="/home">
          <BottomNavigationAction
            showLabel="true"
            label="Feed"
            value="feed"
            icon={<Feed />}
          />
        </Link>
        <Link to="/bet">
          <BottomNavigationAction
            showLabel="true"
            label="Make a Bet"
            value="add-bet"
            icon={<AddCircleIcon />}
            />
        </Link>
        <Link to="/profile" >
          <BottomNavigationAction
            showLabel="true"
            label="Profile"
            value="profile"
            icon={<PersonPinIcon />}
          />
          </Link>
      </BottomNavigation>
      </Paper>
  );
}
