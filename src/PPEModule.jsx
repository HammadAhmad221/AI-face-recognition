// import React, { useEffect, useState } from 'react';
// import { Box, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Avatar, Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@mui/material';

// const PPEModule = () => {
//   const [open, setOpen] = useState(false);
//   const [data, setData] = useState([]);
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [videoSrc, setVideoSrc] = useState('/vedio1.mp4');

//   useEffect(() => {
//     // Dummy data with image URLs
//     const dummyData = [
//       {
//         id: 1,
//         name: 'John Doe',
//         date: '2024-09-15',
//         time: '10:45 AM',
//         face_image: 'https://randomuser.me/api/portraits/men/1.jpg', // Placeholder image
//       },
//       {
//         id: 2,
//         name: 'Jane Smith',
//         date: '2024-09-16',
//         time: '11:30 AM',
//         face_image: 'https://randomuser.me/api/portraits/women/2.jpg', // Placeholder image
//       },
//       {
//         id: 3,
//         name: 'Alice Johnson',
//         date: '2024-09-17',
//         time: '02:15 PM',
//         face_image: 'https://randomuser.me/api/portraits/women/3.jpg', // Placeholder image
//       },
//       {
//         id: 4,
//         name: 'Bob Williams',
//         date: '2024-09-18',
//         time: '09:00 AM',
//         face_image: 'https://randomuser.me/api/portraits/men/4.jpg', // Placeholder image
//       },
//     ];

//     setData(dummyData);
//   }, []);

//   const handleClickOpen = (user) => {
//     setSelectedUser(user);
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <div
//       style={{
//         background: 'linear-gradient(0deg, rgba(37, 30, 84, 0.96) 0%, rgba(37, 30, 84, 0.96) 100%)',
//       }}
//     >
//       <Box sx={{ padding: 2 }}>
//         <Grid container spacing={2}>
//           {/* Full-Width Video */}
//           <Grid item xs={12}>
//             <Box sx={{ position: 'relative' }}>
//             <video
//                 autoPlay
//                 loop
//                 muted
//                 style={{
//                   width: '100%',
//                   height: '500px',
//                   borderRadius: '8px',
//                 }}
//               >
//               <source src={videoSrc} type="video/mp4" />
//               Your browser does not support the video tag.
//               </video>
//             </Box>
//           </Grid>

//           {/* Table */}
//           <Grid item xs={12}>
//             <TableContainer component={Paper} sx={{ maxHeight: '330px', overflowY: 'auto' }}>
//               <Table stickyHeader>
//                 <TableHead>
//                   <TableRow>
//                     <TableCell>Image</TableCell>
//                     <TableCell>Name</TableCell>
//                     <TableCell>Date</TableCell>
//                     <TableCell>Time</TableCell>
//                   </TableRow>
//                 </TableHead>
//                 <TableBody>
//                   {data.map((row) => (
//                     <TableRow key={row.id}>
//                       <TableCell>
//                         <Avatar
//                           src={row.face_image}
//                           alt={row.name}
//                           sx={{ width: 50, height: 50, cursor: 'pointer' }}
//                           onClick={() => handleClickOpen(row)}
//                         />
//                       </TableCell>
//                       <TableCell>{row.name}</TableCell>
//                       <TableCell>{row.date}</TableCell>
//                       <TableCell>{row.time}</TableCell>
//                     </TableRow>
//                   ))}
//                 </TableBody>
//               </Table>
//             </TableContainer>
//           </Grid>
//         </Grid>

//         {/* Modal */}
//         <Dialog
//           open={open}
//           onClose={handleClose}
//           maxWidth="md" // Increase the modal size
//           fullWidth
//           sx={{ '& .MuiDialog-paper': { borderRadius: '16px' } }} // Add border radius to modal
//         >
//           <DialogTitle>User Details</DialogTitle>
//           <DialogContent>
//             {selectedUser && (
//               <>
//                 <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
//                   <Avatar
//                     src={selectedUser.face_image}
//                     alt={selectedUser.name}
//                     sx={{ width: 120, height: 120 }}
//                   />
//                   <Box sx={{ marginLeft: 2 }}>
//                     <Typography variant="h6">{selectedUser.name}</Typography>
//                     <Typography variant="body1">Date: {selectedUser.date}</Typography>
//                     <Typography variant="body1">Time: {selectedUser.time}</Typography>
//                   </Box>
//                 </Box>
//               </>
//             )}
//           </DialogContent>
//           <DialogActions>
//             <Button
//               onClick={handleClose}
//               sx={{
//                 backgroundColor: '#1976d2',
//                 color: 'white',
//                 '&:hover': {
//                   backgroundColor: '#115293',
//                 },
//                 borderRadius: '8px',
//                 padding: '6px 16px',
//               }}
//             >
//               Close
//             </Button>
//           </DialogActions>
//         </Dialog>
//       </Box>
//     </div>
//   );
// };

// export default PPEModule;


import React, { useEffect, useState } from 'react';
import { Box, Grid } from '@mui/material';

const PPEModule = () => {

  const [videoSrc, setVideoSrc] = useState('');

  useEffect(()=>{
    setVideoSrc('http://3.111.29.237:80/ppe_detection');
  },[])

  return (
<div    className='h-[100vh]'
 style={{
        background:
          "linear-gradient(0deg, rgba(37, 30, 84, 0.96) 0%, rgba(37, 30, 84, 0.96) 100%)",
      }}>
<Box sx={{ padding: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box sx={{ position: 'relative' }}>
            <img
              src={videoSrc}
              alt='PPE Streaming'
              style={{
                width: '100%',
                height: '500px',
                borderRadius: '8px',
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
</div>
  );
};

export default PPEModule;