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
      position="absolute"
      sx={{
        backgroundColor: 'transparent',
        boxShadow: 'none',
        top:"30px"
      }}
    >
      <Toolbar>
        <Typography variant="h4" component="div" sx={{flexGrow:1,fontFamily:'Inria Sans',fontSize:'2rem', fontWeight:'700',gap:'2rem'}}>
          SWAY AI
        </Typography>
<div style={{
  display:"flex",
  gap:"16px",
}}>
<Button color="inherit" component={Link} to="#" sx={{fontFamily:'Poppins',fontSize:'1rem', fontWeight:'500'}}>Wht Sway AI ?</Button>
        <Button color="inherit" component={Link} to="#" sx={{fontFamily:'Poppins',fontSize:'1rem', fontWeight:'500'}}>PPE Module</Button>
        <Button color="inherit" component={Link} to="/home" sx={{fontFamily:'Poppins',fontSize:'1rem', fontWeight:'500'}}>Attendance Module</Button>
        <Button color="inherit" component={Link} to="#" sx={{fontFamily:'Poppins',fontSize:'1rem', fontWeight:'500'}}>Schedule A Demo</Button>
        <Button 
          component={Link} 
          to="#" 
          sx={{
            backgroundColor: '#534998', 
            color: 'white',          
            borderRadius: '4px',      
            padding: '12px 20px',
            fontFamily:'Poppins',
            fontSize:'1rem',
            fontWeight:'500',   
            '&:hover': {
              backgroundColor: '#ff79b0',
            }
          }}
        >
          Contact
        </Button>
</div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
