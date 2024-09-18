import React, { useState } from 'react';
import { Box, TextField, Button, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';



const Form = () => {
  const [demoDate, setDemoDate] = useState(null);
  const [demoTime, setDemoTime] = useState(null);

  return (
    <Box 
      component="form"
      noValidate 
      autoComplete="off" 
      sx={{ 
        mt: 4, 
        width: { xs: '90%', sm: '70%', md: '50%' }, 
        mx: 'auto', 
        textAlign: 'center',
        backgroundColor: '#FAF9F6',
        p: 4,
        borderRadius: 2
      }}
    >
      {/* Full Name */}
      <TextField
        fullWidth
        margin="normal"
        label="Full Name"
        variant="outlined"
        placeholder="Enter your name"
      />

      {/* Company Name */}
      <TextField
        fullWidth
        margin="normal"
        label="Company Name"
        variant="outlined"
        placeholder="Enter your company name"
      />

      {/* Number of Employees */}
      <FormControl fullWidth margin="normal">
        <InputLabel 
        // sx={{ color: 'white' }}
        >Number of Employees</InputLabel>
        <Select
          defaultValue=""
          label="Number of Employees"
        >
          <MenuItem value="1-10">1-10</MenuItem>
          <MenuItem value="11-50">11-50</MenuItem>
          <MenuItem value="51-100">51-100</MenuItem>
          <MenuItem value="100+">100+</MenuItem>
        </Select>
      </FormControl>

      {/* Email Address */}
      <TextField
        fullWidth
        margin="normal"
        label="Email Address"
        variant="outlined"
        placeholder="Enter your email"
        type="email"
      />

      {/* Phone Number */}
      <TextField
        fullWidth
        margin="normal"
        label="Phone Number (Optional)"
        variant="outlined"
        placeholder="Enter your phone number"
      />

      {/* Interested Model */}
      <FormControl fullWidth margin="normal" >
        <InputLabel 
        // sx={{ color: 'white' }}
        sx={{
          marginBottom:'8px',
        }}>Interested Model</InputLabel>
        <Select
          defaultValue=""
          label="Interested Model"
        >
          <MenuItem value="Face Recognition">Face Recognition</MenuItem>
          <MenuItem value="PPE Detection">PPE Detection</MenuItem>
        </Select>
              {/* Preferred Demo Date */}
      {/* <LocalizationProvider dateAdapter={AdapterDayjs}> */}
        <DatePicker
          label="Preferred Demo Date"
          value={demoDate}
          onChange={(newValue) => setDemoDate(newValue)}
          renderInput={(params) => (
            <TextField
              {...params}
              fullWidth
              margin="normal"
            />
          )}
        />
        {/* Preferred Demo Time */}
        <TimePicker
          label="Preferred Demo Time"
          value={demoTime}
          onChange={(newValue) => setDemoTime(newValue)}
          renderInput={(params) => (
            <TextField
              {...params}
              fullWidth
              margin="normal"
            />
          )}
        />
      {/* </LocalizationProvider> */}

      <Button
        variant="contained"
        color="secondary"
        type="submit"
        sx={{ mt: 2 }}
      >
        Submit
      </Button>
      </FormControl>


    </Box>
  );
};

export default Form;
