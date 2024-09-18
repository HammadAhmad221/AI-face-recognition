// import React from 'react';
// import { Container, Typography, Button, Box } from '@mui/material';
// import { Link } from 'react-router-dom';

// const LandingPage = () => {
//   return (
//     <Container>
//       <Box textAlign="center" mt={4}>
//         <Typography variant="h2" component="h1" gutterBottom>
//           Welcome to My Application
//         </Typography>
//         <Typography variant="h5" component="p" gutterBottom>
//           This is the home page of your awesome application built with React and Material-UI.
//         </Typography>
//         <Button
//           variant="contained"
//           color="primary"
//           component={Link}
//           to="/about"
//           sx={{ mt: 2 }}
//         >
//           Learn More
//         </Button>
//       </Box>
//     </Container>
//   );
// };

// export default LandingPage;

import React, { useState, useEffect } from "react";
import { Container, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { keyframes } from '@mui/system';
import SectionWithCards from "./Components/SectionWithCards";
import ThirdSection from "./Components/ThirdSection";
import Form from "./Components/Form";
// import { useNavigation } from "react-router-dom";

const LandingPage = () => {

  // const navigate = useNavigation();

  const slideInFromTop = keyframes`
  0% { transform: translateY(-100%); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
`;

const slideInFromBottom = keyframes`
  0% { transform: translateY(100%); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
`;
const headings = [
  { text: "Increase Productivity", color: "#6A0DAD",animation : slideInFromTop },
  { text: 'Ensure Workplace Safety"', color: "#FF6F61",animation: slideInFromBottom },
];
  const [currentHeading, setCurrentHeading] = useState(0);
  // const [isFormVisible, setIsFormVisible] = useState(false);

  // const handleButtonClick = () => {
  //   setIsFormVisible(!isFormVisible);
  // };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeading((prevHeading) => (prevHeading + 1) % headings.length);
    }, 1050);

    return () => clearInterval(interval);
  }, [headings.length]);
  return (
    <>
      {/* First Section: Full Width, 700px Height, Video Background */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "800px",
          overflow: "hidden",
        }}
      >
        <video
          autoPlay
          loop
          muted
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: -1,
          }}
        >
          <source
            src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <Container
          sx={{
            position: "relative",
            zIndex: 1,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
          }}
        >
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{ textAlign: "center" }}
          >
            Unlock Your Business
            <br />
            Potential With AI:
          </Typography>
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{
              textAlign: "center",
              fontSize: "3rem",
              color: headings[currentHeading].color,
              animation: `${headings[currentHeading].animation} 1s ease-in-out`
            }}
          >
            {headings[currentHeading].text}
          </Typography>
              <Button
      variant="outlined"
      color="primary"
      component={Link}
      to="/form"
      sx={{
        mt: 2,
        padding: '12px 24px', 
        border: '4px solid', 
        borderRadius: '8px', 
        fontSize:'1.5rem',
        backgroundColor: 'transparent', 
        color: '#CBC3E3', 
        '&:hover': {
          backgroundColor: '#CBC3E3',
          color: '#fff',
        }
      }}
    >
      Schedule a Demo
    </Button>
    {/* {isFormVisible && <Form />} */}
        </Container>
      </Box>

      {/* Second Section */}
      <SectionWithCards/>

      {/* Third Section */}
      <ThirdSection/>
    </>
  );
};

export default LandingPage;
