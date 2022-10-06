import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

import PersonPinIcon from "@mui/icons-material/PersonPin";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Feed from "@mui/icons-material/Feed";
import { Paper } from "@mui/material";
import Tooltip from '@mui/material/Tooltip';


export default function BottomNav() {
  const [value, setValue] = React.useState("add-bet");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={20}>
      <BottomNavigation showLabels sx={{ width: 500 }} value={value} onChange={handleChange}>
        
      <BottomNavigationAction label="Feed" value="feed" icon={<Feed />} />
      <BottomNavigationAction
        label="Make a Bet"
        value="add-bet"
        icon={<AddCircleIcon />}
        />
        {/* <Tooltip placement="bottom"> */}
        <BottomNavigationAction
        label="Profile"
        value="profile"
        icon={<PersonPinIcon />}
          />
          {/* </Tooltip> */}
      </BottomNavigation>
      </Paper>
  );
}
