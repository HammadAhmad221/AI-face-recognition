import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { styled } from '@mui/system';

// Styled component for the background image section
const SectionContainer = styled(Box)({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '20px',
    gap: '3rem',
});

// Styled component for the image
const StyledImage = styled('img')({
    width: '50%',
    height: '50%',
    borderRadius:"0.5rem",
    flex: 1,
});

const ThirdSection = () => {
    return (
        
        <Container        
        maxWidth={false}
        sx={{
                backgroundImage: 'url("/marcus-dall-col-5gJwzBZZzRk-unsplash.jpg")', // Replace with your background image URL
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                padding: '40px',
                minHeight: '100vh',
                width:"100%",
            }}>
            {/* Background Section */}
            <Typography
          variant="h3"
          component="h2"
          sx={{
            fontSize: '4rem',  // Increase heading font size
            textAlign: 'center',
            color:'white'
          }}
        >
         Transform your<br/> Business with future<br/><span style={{
            color:'#fff'
         }}>AI Solutions</span>
        </Typography>
        <Typography
                        variant="body1"
                        sx={{ color: 'white',
                          fontSize:'1.5rem',
                        //   paddingLeft:'3rem'
                        textAlign:"center",
                        marginBottom:'5rem'
                    
                         }}
                    >
                        Empower your business to grow without limits. Our AI tool <br/>integrates seamlessly into your existing systems, providing
                    </Typography>

          <SectionContainer>
            {/* Text Content */}
            <div>

            <Typography
          variant="h3"
          component="h2"
          sx={{
              fontSize: '4rem',  // Increase heading font size
              color:'white'
              // textAlign: 'center'
            }}
        >
         Transform your<br/> Business with future<br/><span style={{
             color:'#fff'
            }}>AI Solutions</span>
        </Typography>
        <Typography
                        variant="body1"
                        sx={{ color: 'white',
                          fontSize:'1.5rem',
                          width:'80%'
                         }}
                    >
                        Empower your business to grow without limits. Our AI tool integrates seamlessly into your existing systems, providing
                    </Typography>
            </div>

            {/* Image */}
            <StyledImage src="/justin-little-hxUnNtWIjso-unsplash.jpg" alt="Placeholder" />
        </SectionContainer>
        </Container>
    );
};

export default ThirdSection;
