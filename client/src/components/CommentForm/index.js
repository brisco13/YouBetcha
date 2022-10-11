// import { Typography, Box, Grid, Avatar } from '@mui/material';
// import * as React from 'react';

// import { useQuery } from '@apollo/client';
// import { QUERY_USER } from '../../utils/queries';

// export default function Comment(props) {
//   const { loading, data } = useQuery(QUERY_USER, {
//     variables: { username: props.commentAuthor }
//   });

//   return (
//     <Box>
//       <Grid container>
//         <Grid item xs={12} sx={{ justifyContent: "space-evenly" }}>
//           <Grid container sx={{ alignItems: "center" }}>
//             <Grid item xs={6}>
//               {loading ? (<div> loading...</div>) : (<Avatar sx={{ marginLeft: "5px" }}
//                 alt=" Profile Pic"
//                 src={data.user.profilePic} />
//               )}
//             </Grid>
//             <Grid item xs={6}>
//               <Typography sx={{ textAlign: "right" }}>
//                 {props.commentAuthor}
//               </Typography>
//             </Grid>
//           </Grid>
//         </Grid>
//         <Grid item xs={12}>
//           <Typography paragraph>
//             {props.commentText}
//           </Typography>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// }