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
        {/* <Typography
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
        </Typography> */}
        <Typography
          variant="h4"
          component={Link}
          to='/'
          onClick={()=>{navigate('/')}}
          sx={{
            flexGrow: 1,
            fontFamily: "Inria Sans",
            fontSize: "2rem",
            fontWeight: "700",
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
              to="/ppe-module"
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
              to="/attendance-module"
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
              to="/form"
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
              }}
            >
              Contact
            </Button>
          </div>
        )}

        {/* Drawer for mobile view */}
        <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}   PaperProps={{
    sx: {
      backgroundColor: "transparent",
      zIndex:10,
      backdropFilter: "blur(5px)",
    },
  }}>
          <List>
            <ListItem button component={Link} to="/form" onClick={toggleDrawer}>
              <ListItemText primary="Wht Sway AI ?" sx={{ color: 'white' }}/>
            </ListItem>
            <ListItem button component={Link} to="/ppe-module" onClick={toggleDrawer}>
              <ListItemText primary="PPE Module" sx={{ color: 'white' }}/>
            </ListItem>
            <ListItem button component={Link} to="/attendance-module" onClick={toggleDrawer}>
              <ListItemText primary="Attendance Module" sx={{ color: 'white' }}/>
            </ListItem>
            <ListItem button component={Link} to="#" onClick={toggleDrawer}>
              <ListItemText primary="Schedule A Demo" sx={{ color: 'white' }}/>
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
