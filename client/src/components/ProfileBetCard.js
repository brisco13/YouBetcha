import * as React from 'react';
import { Box, List, ListItem, ListItemText, ListItemAvatar, Avatar, Divider } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export function BetList() {
  
  return (
    <List border="solid" sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <AccountCircleIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Bet Title 1" secondary="This is the bet descriptions for bet1" />
      </ListItem>
      <Divider />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <AccountCircleIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Bet Title 2" secondary="This is the bet descriptions for bet2" />
      </ListItem>
      <Divider />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <AccountCircleIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Bet Title 3" secondary="This is the bet descriptions for bet3" />
      </ListItem>
      <Divider />
    </List>
  );
}

// function loadBets() {
//   const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

//   return Array.from(new Array(50)).map(
//     () => betExamples[getRandomInt(betExamples.length)],
//   );
// }

// export default function BetList() {
//   const [value, setValue] = React.useState(0);
//   const ref = React.useRef(null);
//   const [bets, setBets] = React.useState(() => loadBets());

//   React.useEffect(() => {
//     ref.current.ownerDocument.body.scrollTop = 0;
//     setBets(loadBets());
//   }, [value, setBets]);

//   return (
//     <Box sx={{ pb: 7 }} ref={ref}>
//       <CssBaseline />
//       <List>
//         {messages.map(({ primary, secondary, person }, index) => (
//           <ListItem button key={index + person}>
//             <ListItemAvatar>
//               <Avatar alt="Profile Picture" src={peson} />
//             </ListItemAvatar>
//             <ListItemText primary={primary} secondary={secondary} />
//           </ListItem>
//         ))}
//       </List>
//         <Button
//           value={value}
//           onChange={(event, newValue) => {
//             setValue(newValue);
//           }}
//         />
//     </Box>
//   );
// }

// const betExamples = [
//   {
//     primary: "Bet Title",
//     secondary: "This is the description of the bet number1.....",
//     timestamp: "yesterday",
//     person: userid?
//   },
//   {
//     primary: "Bet Title",
//     secondary: "This is the description of the bet number2.....",
//     timestamp: "September 4, 2022",
//   },
//   {
//     primary: "Bet Title",
//     secondary: "This is the description of the bet number3.....",
//     timestamp: "August 31, 2022",
//   },
//   {
//     primary: "Bet Title",
//     secondary: "This is the description of the bet number4.....",
//     timestamp: "August 17, 2022",
//   },
//   {
//     primary: "Bet Title",
//     secondary: "This is the description of the bet number5.....",
//     timestamp: "July 4, 2022",
//   },
//   {
//     primary: "Bet Title",
//     secondary: "This is the description of the bet number6.....",
//     timestamp: "May 7, 2022",
//   },
//   {
//     primary: "Bet Title",
//     secondary: "This is the description of the bet number7.....",
//     timestamp: "May 1, 2022",
//   }
// ]