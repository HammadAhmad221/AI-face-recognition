// import React from 'react';
// import { AppBar, Toolbar, Typography, Button } from '@mui/material';
// import { Link } from 'react-router-dom';

// const Header = () => {
//   return (
//     <AppBar position="static">
//       <Toolbar>
//         <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//           My Application
//         </Typography>
//         <Button color="inherit" component={Link} to="/">Home</Button>
//         <Button color="inherit" component={Link} to="/about">About</Button>
//         <Button color="inherit" component={Link} to="/contact">Contact</Button>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Header;

import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar 
      // position="static"
      position="sticky"
      sx={{
        // backgroundColor: 'transparent',
        boxShadow: 'none',
      }}
    >
      <Toolbar>
        <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
          SWAY AI
        </Typography>
        <Button color="inherit" component={Link} to="/home">Demo</Button>
        <Button color="inherit" component={Link} to="#">Templates</Button>
        <Button color="inherit" component={Link} to="#">Price</Button>
        <Button color="inherit" component={Link} to="#">Help</Button>
        <Button 
          component={Link} 
          to="#" 
          sx={{
            backgroundColor: '#CBC3E3', 
            color: 'white',          
            borderRadius: '5px',      
            padding: '5px 15px',     
            '&:hover': {
              backgroundColor: '#ff79b0',
            }
          }}
        >
          Contact
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
