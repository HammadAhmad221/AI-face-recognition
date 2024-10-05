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

  const { t } = useTranslation(); // Initialize translation



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
              {/* Wht Sway AI ? */}
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
              {/* Schedule A Demo */}
              {t("schedule")}
            </Button>
            <LanguageSwitcher/>
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
              {/* Contact */}
              {t("contact")}
            </Button>
            {/* <button
        className="bg-blue-500 px-4 py-2 rounded"
        onClick={toggleLanguage}
      >
        {i18n.language === 'en' ? 'Switch to Arabic' : 'Switch to English'}
      </button> */}
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
              <ListItemText primary={t("whatSway")} sx={{ color: 'white' }}/>
            </ListItem>
            <ListItem button component={Link} to="/ppe-module" onClick={toggleDrawer}>
              <ListItemText primary="PPE Module" sx={{ color: 'white' }}/>
            </ListItem>
            <ListItem button component={Link} to="/attendance-module" onClick={toggleDrawer}>
              <ListItemText primary="Attendance Module" sx={{ color: 'white' }}/>
            </ListItem>
            <ListItem button component={Link} to="#" onClick={toggleDrawer}>
              <ListItemText primary={t("schedule")} sx={{ color: 'white' }}/>
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
                {/* Contact */}
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

// import React, { useEffect } from 'react';

// const Header = () => {
//   // setTimeout(() => {
//   //   window.location.reload(); // Reload the page after a delay
//   // }, 2000);
//   useEffect(() => {
//     // Dynamically inject the Google Translate script
//     const addGoogleTranslateScript = () => {
//       const script = document.createElement('script');
//       script.type = 'text/javascript';
//       script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
//       document.body.appendChild(script);
//     };

//     // Initialize the Google Translate element
//     const googleTranslateElementInit = () => {
//       new window.google.translate.TranslateElement(
//         {
//           pageLanguage: 'en', // Default page language
//           includedLanguages: 'en,ar', // Languages to support
//           layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
//         },
//         'google_translate_element' // The ID of the div where the dropdown will be rendered
//       );

//       // Hide the Google Translate banner after initialization
//       const hideTranslateBanner = () => {
//         const translateBanner = document.querySelector('.goog-te-banner-frame.skiptranslate');
//         if (translateBanner) {
//           translateBanner.style.display = 'none'; // Hide the banner
//         }
//       };

//       hideTranslateBanner(); // Call it once after initialization

//       // Observe the DOM for changes to hide the banner if it appears later
//       const observer = new MutationObserver(hideTranslateBanner);
//       observer.observe(document.body, { childList: true, subtree: true });
//     };

//     // Check if the Translate script is already loaded
//     if (!window.google) {
//       addGoogleTranslateScript();
//       window.googleTranslateElementInit = googleTranslateElementInit; // Ensure global access
//     } else {
//       googleTranslateElementInit();
//     }
//   }, []);

//   return (
//     <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
//       <h1>Welcome to the Dashboard</h1>

//       {/* Google Translate Dropdown */}
//       <div id="google_translate_element"></div>
//     </header>
//   );
// };

// export default Header;
