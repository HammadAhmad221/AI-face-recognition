import React from 'react';
import { Container, Typography, Box, Card, CardContent } from '@mui/material';

const SectionWithCards = () => {
  return (
    <Box sx={{ display: 'flex', width: '100%', height: '60vh', alignItems: 'center', justifyContent: 'space-around' }}>
      {/* First Section: Heading and Paragraph */}
      <Container sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '50%' }}>
        <Typography
          variant="h3"
          component="h2"
          sx={{
            fontSize: '4rem',  
            // textAlign: 'center'
          }}
        >
         Transform your<br/> Business with future<br/><span style={{
            color:'#6A0DAD'
         }}>AI Solutions</span>
        </Typography>
        <Typography
          variant="body1"
          // component="h2"
          sx={{ color: 'gray',
            fontSize:'1.5rem',
            }}
        >
        Empower your business to grow without limits. Our AI <br/> tool integrates seamlessly into your existing<br/> systems, providing
        </Typography>
      </Container>

      {/* Second Section: Cards */}
      <Box 
        sx={{ 
          position: 'relative', 
          width: '50%', 
          height: '80%', 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center',
          '&:hover .card': {
            transform: 'scale(1.2)',
          }
        }}
      >
        {/* Card 1 */}
        <Card
          className="card"
          sx={{
            position: 'absolute',
            zIndex: 1,
            transform: 'scale(1) rotate(-5deg)',
            transition: 'transform 0.3s ease-in-out, top 0.3s ease-in-out, left 0.3s ease-in-out',
            width: '70%',  // Increased card width
            height: 150, // Decreased card height
            margin: '0',
            top: '10%',  // Position from top
            left: '15%', // Position from left
            '&:hover': {
              transform: 'scale(1.2) rotate(0deg)',
            },
          }}
        >
          <CardContent>
            <Typography variant="h6">Feature 1</Typography>
            <Typography variant="body2">Description for feature 1.</Typography>
          </CardContent>
        </Card>
        {/* Card 2 */}
        <Card
          className="card"
          sx={{
            position: 'absolute',
            zIndex: 2,
            transform: 'scale(1) rotate(0deg)',
            transition: 'transform 0.3s ease-in-out, top 0.3s ease-in-out, left 0.3s ease-in-out',
            width: '70%',  // Increased card width
            height: 150, // Decreased card height
            margin: '0',
            top: '30%',  // Position from top
            left: '20%', // Position from left
            '&:hover': {
              transform: 'scale(1.2) rotate(-5deg)',
            //   left:"10%",
            },
          }}
        >
          <CardContent>
            <Typography variant="h6">Feature 2</Typography>
            <Typography variant="body2">Description for feature 2.</Typography>
          </CardContent>
        </Card>
        {/* Card 3 */}
        <Card
          className="card"
          sx={{
            position: 'absolute',
            zIndex: 3,
            transform: 'scale(1) rotate(-5deg)',
            transition: 'transform 0.3s ease-in-out, top 0.3s ease-in-out, left 0.3s ease-in-out',
            width: '70%', 
            height: 150, 
            margin: '0',
            top: '50%',  
            left: '14%', 
            '&:hover': {
              transform: 'scale(1.2)',
            },
          }}
        >
          <CardContent>
            <Typography variant="h6">Feature 3</Typography>
            <Typography variant="body2">Description for feature 3.</Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default SectionWithCards;
