import React, { useEffect, useState } from 'react';
import { Box, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Avatar, Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@mui/material';

const AttendanceModule = () => {
  const [open, setOpen] = useState(false);
  const[data ,setData]=useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [videoSrc, setVideoSrc] = useState('');

  useEffect(() => {
    const eventSource = new EventSource('http://3.111.29.237:80/detect_faces');

    eventSource.onmessage = (event) => {
      const newData = JSON.parse(event.data);
      console.log(newData);
      setData((prevData) => [...newData,...prevData]);
      console.log(newData);
    };

    eventSource.onerror = (error) => {
      console.error('EventSource failed:', error);
      eventSource.close();
    };

    return () => {
      eventSource.close();
    };
  }, []);


  const handleClickOpen = (user) => {
    setSelectedUser(user);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(()=>{
    setVideoSrc('http://3.111.29.237:80/video_feed');
  },[])

  return (
    <Box sx={{ padding: 2 }}>
      <Grid container spacing={2}>
        {/* Full-Width Video */}
        <Grid item xs={12}>
          <Box sx={{ position: 'relative' }}>
            <img
              src={videoSrc}
              alt='video streaming'
              style={{
                width: '100%',
                height: '500px',
                borderRadius: '8px',
              }}
            />
          </Box>
        </Grid>

        {/* Table */}
        <Grid item xs={12}>
          <TableContainer component={Paper} sx={{ maxHeight: '330px', overflowY: 'auto' }}>
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell>Image</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Time</TableCell>
                  {/* <TableCell>Status</TableCell> */}
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row) => (
                  <TableRow>
                    <TableCell>
                      <Avatar 
                        // src={row.image} 
                        src={`data:image/jpeg;base64,${row.face_image}`}
                        alt={row.name} 
                        sx={{ width: 50, height: 50, cursor: 'pointer' }} 
                        onClick={() => handleClickOpen(row)} 
                      />
                    </TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.date}</TableCell>
                    <TableCell>{row.time}</TableCell>
                    {/* <TableCell>{row.status}</TableCell> */}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>

      {/* Modal */}
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="md" // Increase the modal size
        fullWidth
        sx={{ '& .MuiDialog-paper': { borderRadius: '16px' } }} // Add border radius to modal
      >
        <DialogTitle>User Details</DialogTitle>
        <DialogContent>
          {selectedUser && (
            <>
              <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
                <Avatar src={`data:image/jpeg;base64,${selectedUser.face_image}`} alt={selectedUser.name} sx={{ width: 120, height: 120 }} />
                <Box sx={{ marginLeft: 2 }}>
                  <Typography variant="h6">{selectedUser.name}</Typography>
                  {/* <Typography variant="body1">Status: {selectedUser.status}</Typography> */}
                  <Typography variant="body1">Date: {selectedUser.date}</Typography>
                  <Typography variant="body1">Time: {selectedUser.time}</Typography>
                </Box>
              </Box>
            </>
          )}
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            sx={{
              backgroundColor: '#1976d2',
              color: 'white',
              '&:hover': {
                backgroundColor: '#115293',
              },
              borderRadius: '8px',
              padding: '6px 16px',
            }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default AttendanceModule;
