// import React from "react";
// import { AppBar, Toolbar, Typography, Button } from "@mui/material";
// import { Link } from "react-router-dom";

// const Header = () => {
//   return (
//     <AppBar
//       // position="static"
//       position="absolute"
//       sx={{
//         backgroundColor: "transparent",
//         boxShadow: "none",
//         top: "30px",
//       }}
//     >
//       <Toolbar>
//         <Typography
//           variant="h4"
//           component="div"
//           sx={{
//             flexGrow: 1,
//             fontFamily: "Inria Sans",
//             fontSize: "2rem",
//             fontWeight: "700",
//             gap: "2rem",
//           }}
//         >
//           SWAY AI
//         </Typography>
//         <div
//           style={{
//             display: "flex",
//             gap: "16px",
//           }}
//         >
//           <Button
//             color="inherit"
//             component={Link}
//             to="#"
//             sx={{ fontFamily: "Poppins", fontSize: "1rem", fontWeight: "500" }}
//           >
//             Wht Sway AI ?
//           </Button>
//           <Button
//             color="inherit"
//             component={Link}
//             to="#"
//             sx={{ fontFamily: "Poppins", fontSize: "1rem", fontWeight: "500" }}
//           >
//             PPE Module
//           </Button>
//           <Button
//             color="inherit"
//             component={Link}
//             to="/home"
//             sx={{ fontFamily: "Poppins", fontSize: "1rem", fontWeight: "500" }}
//           >
//             Attendance Module
//           </Button>
//           <Button
//             color="inherit"
//             component={Link}
//             to="#"
//             sx={{ fontFamily: "Poppins", fontSize: "1rem", fontWeight: "500" }}
//           >
//             Schedule A Demo
//           </Button>
//           <Button
//             component={Link}
//             to="#"
//             sx={{
//               backgroundColor: "#534998",
//               color: "white",
//               borderRadius: "4px",
//               padding: "12px 20px",
//               fontFamily: "Poppins",
//               fontSize: "1rem",
//               fontWeight: "500",
//               "&:hover": {
//                 backgroundColor: "#ff79b0",
//               },
//             }}
//           >
//             Contact
//           </Button>
//         </div>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Header;

import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import useMediaQuery from "@mui/material/useMediaQuery";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Check if the screen size is less than or equal to 800px
  const isMobile = useMediaQuery("(max-width: 1000px)");

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <AppBar
      position="absolute"
      sx={{
        backgroundColor: "transparent",
        boxShadow: "none",
        top: "30px",
      }}
    >
      <Toolbar>
        <Typography
          variant="h4"
          component="div"
          sx={{
            flexGrow: 1,
            fontFamily: "Inria Sans",
            fontSize: "2rem",
            fontWeight: "700",
            gap: "2rem",
          }}
        >
          SWAY AI
        </Typography>

        {/* Hamburger Menu Icon for mobile view */}
        {isMobile ? (
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
            sx={{ fontSize: "2rem" }}
          >
            {drawerOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        ) : (
          // Desktop View - Regular Menu
          <div style={{ display: "flex", gap: "16px" }}>
            <Button
              color="inherit"
              component={Link}
              to="#"
              sx={{
                fontFamily: "Poppins",
                fontSize: "1rem",
                fontWeight: "500",
              }}
            >
              Wht Sway AI ?
            </Button>
            <Button
              color="inherit"
              component={Link}
              to="#"
              sx={{
                fontFamily: "Poppins",
                fontSize: "1rem",
                fontWeight: "500",
              }}
            >
              PPE Module
            </Button>
            <Button
              color="inherit"
              component={Link}
              to="/home"
              sx={{
                fontFamily: "Poppins",
                fontSize: "1rem",
                fontWeight: "500",
              }}
            >
              Attendance Module
            </Button>
            <Button
              color="inherit"
              component={Link}
              to="#"
              sx={{
                fontFamily: "Poppins",
                fontSize: "1rem",
                fontWeight: "500",
              }}
            >
              Schedule A Demo
            </Button>
            <Button
              component={Link}
              to="#"
              sx={{
                backgroundColor: "#534998",
                color: "white",
                borderRadius: "4px",
                padding: "12px 20px",
                fontFamily: "Poppins",
                fontSize: "1rem",
                fontWeight: "500",
                "&:hover": {
                  backgroundColor: "#ff79b0",
                },
              }}
            >
              Contact
            </Button>
          </div>
        )}

        {/* Drawer for mobile view */}
        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
          <List>
            <ListItem button component={Link} to="#" onClick={toggleDrawer}>
              <ListItemText primary="Wht Sway AI ?" />
            </ListItem>
            <ListItem button component={Link} to="#" onClick={toggleDrawer}>
              <ListItemText primary="PPE Module" />
            </ListItem>
            <ListItem button component={Link} to="/home" onClick={toggleDrawer}>
              <ListItemText primary="Attendance Module" />
            </ListItem>
            <ListItem button component={Link} to="#" onClick={toggleDrawer}>
              <ListItemText primary="Schedule A Demo" />
            </ListItem>
            <ListItem
              button
              component={Link}
              to="#"
              onClick={toggleDrawer}
              sx={{ padding: "12px 20px" }}
            >
              <Button
                sx={{
                  backgroundColor: "#534998",
                  color: "white",
                  width: "100%",
                  "&:hover": {
                    backgroundColor: "#ff79b0",
                  },
                }}
              >
                Contact
              </Button>
            </ListItem>
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
