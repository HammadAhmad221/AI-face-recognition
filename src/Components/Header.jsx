// import React, { useState } from "react";
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Button,
//   IconButton,
//   Drawer,
//   List,
//   ListItem,
//   ListItemText,
// } from "@mui/material";
// import { Link } from "react-router-dom";
// import { useTranslation } from 'react-i18next';
// import MenuIcon from "@mui/icons-material/Menu";
// import CloseIcon from "@mui/icons-material/Close";
// import useMediaQuery from "@mui/material/useMediaQuery";
// import LanguageSwitcher from "./LanguageSwitcher";

// const Header = () => {
//   const [drawerOpen, setDrawerOpen] = useState(false);

//   const isMobile = useMediaQuery("(max-width: 1000px)");

//   const { t } = useTranslation(); // Initialize translation



//   const toggleDrawer = () => {
//     setDrawerOpen(!drawerOpen);
//   };

//   return (
//     <AppBar
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
//           component={Link}
//           to='/'
//           onClick={()=>{navigate('/')}}
//           sx={{
//             flexGrow: 1,
//             fontFamily: "Inria Sans",
//             fontSize: "2rem",
//             fontWeight: "700",
//           }}
//         >
//           SWAY AI
//         </Typography>
//         {isMobile ? (
//           <IconButton
//             edge="end"
//             color="inherit"
//             aria-label="menu"
//             onClick={toggleDrawer}
//             sx={{ fontSize: "2rem" }}
//           >
//             {drawerOpen ? <CloseIcon /> : <MenuIcon />}
//           </IconButton>
//         ) : (
//           <div style={{ display: "flex", gap: "16px" }}>
//             <Button
//               color="inherit"
//               component={Link}
//               to="#"
//               sx={{
//                 fontFamily: "Poppins",
//                 fontSize: "1rem",
//                 fontWeight: "500",
//               }}
//             >
//               {t("whatSway")}
//             </Button>
//             <Button
//               color="inherit"
//               component={Link}
//               to="/ppe-module"
//               sx={{
//                 fontFamily: "Poppins",
//                 fontSize: "1rem",
//                 fontWeight: "500",
//               }}
//             >
//               PPE Module
//             </Button>
//             <Button
//               color="inherit"
//               component={Link}
//               to="/attendance-module"
//               sx={{
//                 fontFamily: "Poppins",
//                 fontSize: "1rem",
//                 fontWeight: "500",
//               }}
//             >
//               Attendance Module
//             </Button>
//             <Button
//               color="inherit"
//               component={Link}
//               to="/form"
//               sx={{
//                 fontFamily: "Poppins",
//                 fontSize: "1rem",
//                 fontWeight: "500",
//               }}
//             >
//               {t("schedule")}
//             </Button>
//             <LanguageSwitcher/>
//             <Button
//               component={Link}
//               to="#"
//               sx={{
//                 backgroundColor: "#534998",
//                 color: "white",
//                 borderRadius: "4px",
//                 padding: "12px 20px",
//                 fontFamily: "Poppins",
//                 fontSize: "1rem",
//                 fontWeight: "500",
//               }}
//             >
//               {t("contact")}
//             </Button>
//           </div>
//         )}

//         {/* Drawer for mobile view */}
//         <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}   PaperProps={{
//     sx: {
//       backgroundColor: "transparent",
//       zIndex:10,
//       backdropFilter: "blur(5px)",
//     },
//   }}>
//           <List>
//             <ListItem button component={Link} to="/form" onClick={toggleDrawer}>
//               <ListItemText primary={t("whatSway")} sx={{ color: 'white' }}/>
//             </ListItem>
//             <ListItem button component={Link} to="/ppe-module" onClick={toggleDrawer}>
//               <ListItemText primary="PPE Module" sx={{ color: 'white' }}/>
//             </ListItem>
//             <ListItem button component={Link} to="/attendance-module" onClick={toggleDrawer}>
//               <ListItemText primary="Attendance Module" sx={{ color: 'white' }}/>
//             </ListItem>
//             <ListItem button component={Link} to="#" onClick={toggleDrawer}>
//               <ListItemText primary={t("schedule")} sx={{ color: 'white' }}/>
//             </ListItem>
//             <ListItem
//               button
//               component={Link}
//               to="#"
//               onClick={toggleDrawer}
//               sx={{ padding: "12px 20px" }}
//             >
//               <Button
//                 sx={{
//                   backgroundColor: "#534998",
//                   color: "white",
//                   width: "100%",
//                 }}
//               >
//                 {/* Contact */}
//                 {t("contact")}
//               </Button>
//             </ListItem>
//           </List>
//         </Drawer>
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
import { useTranslation } from 'react-i18next';
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import useMediaQuery from "@mui/material/useMediaQuery";
import LanguageSwitcher from "./LanguageSwitcher";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 1000px)");
  const { t } = useTranslation();

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
          component={Link}
          to='/'
          onClick={() => { navigate('/'); }}
          sx={{
            flexGrow: 2,
            fontFamily: "Inria Sans",
            fontSize: "2rem",
            fontWeight: "700",
          }}
        >
          SWAY AI
        </Typography>
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
          <div style={{ display: "flex", gap: "20px" }}>
            <Button
              color="inherit"
              component={Link}
              to="#"
              sx={{
                fontFamily: "Poppins",
                fontSize: "1rem",
                fontWeight: "500",
                textTransform: "capitalize", // Capitalize the text
              }}
            >
              {t("whatSway")}
            </Button>
            <Button
              color="inherit"
              component={Link}
              to="/ppe-module"
              sx={{
                fontFamily: "Poppins",
                fontSize: "1rem",
                fontWeight: "500",
                textTransform: "capitalize", // Capitalize the text
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
                textTransform: "capitalize", // Capitalize the text
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
                textTransform: "capitalize", // Capitalize the text
              }}
            >
              {t("schedule")}
            </Button>
            <LanguageSwitcher />
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
                textTransform: "capitalize", // Capitalize the text
              }}
            >
              {t("contact")}
            </Button>
          </div>
        )}

        {/* Drawer for mobile view */}
        <Drawer
          anchor="left"
          open={drawerOpen}
          onClose={toggleDrawer}
          PaperProps={{
            sx: {
              backgroundColor: "transparent",
              zIndex: 10,
              backdropFilter: "blur(5px)",
            },
          }}
        >
          <List>
            <ListItem button component={Link} to="/form" onClick={toggleDrawer}>
              <ListItemText primary={t("whatSway")} sx={{ color: 'white', textTransform: 'capitalize' }} />
            </ListItem>
            <ListItem button component={Link} to="/ppe-module" onClick={toggleDrawer}>
              <ListItemText primary="PPE Module" sx={{ color: 'white', textTransform: 'capitalize' }} />
            </ListItem>
            <ListItem button component={Link} to="/attendance-module" onClick={toggleDrawer}>
              <ListItemText primary="Attendance Module" sx={{ color: 'white', textTransform: 'capitalize' }} />
            </ListItem>
            <ListItem button component={Link} to="#" onClick={toggleDrawer}>
              <ListItemText primary={t("schedule")} sx={{ color: 'white', textTransform: 'capitalize' }} />
            </ListItem>
            <LanguageSwitcher/>
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
                  textTransform: 'capitalize', // Capitalize the text
                }}
              >
                {t("contact")}
              </Button>
            </ListItem>
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
