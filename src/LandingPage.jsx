import { useState, useEffect } from "react";
import { Container, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { keyframes } from "@mui/system";
import SectionWithCards from "./Components/SectionWithCards";
import ThirdSection from "./Components/ThirdSection";
import MyForm from "./Components/MyForm";
import Footer from "./Components/Footer";

const LandingPage = () => {
  const slideInFromTop = keyframes`
  0% { transform: translateY(-100%); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
`;

  const slideInFromBottom = keyframes`
  0% { transform: translateY(100%); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
`;
  const headings = [
    {
      text: "Increase Productivity",
      color: "linear-gradient(90deg, #42C09A 0%, #ECFF76 100%)",
      animation: slideInFromTop,
    },
    {
      text: 'Ensure Workplace Safety"',
      color: "linear-gradient(90deg, #FA4CF3 0%, #FFFFFF 100%)",
      animation: slideInFromBottom,
    },
  ];
  const [currentHeading, setCurrentHeading] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeading((prevHeading) => (prevHeading + 1) % headings.length);
    }, 1050);

    return () => clearInterval(interval);
  }, [headings.length]);
  return (
    <>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "842px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(0deg, rgba(37, 30, 84, 0.96) 0%, rgba(37, 30, 84, 0.96) 100%)",
          }}
        ></div>
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
          <source src="/headerVedio.mp4" type="video/mp4" />
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
            sx={{
              textAlign: "center",
              fontFamily: "Inria Sans",
              fontWeight: 700,
            }}
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
              fontWeight: 700,
              background: headings[currentHeading].color,
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              animation: `${headings[currentHeading].animation} 1s ease-in-out`,
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
              borderRadius: "10px",
              border: "3px solid #42C09A",
              boxShadow: "0px 0px 15.4px 0px rgba(155, 250, 221, 0.16)",
              padding: "12px 24px",
              fontSize: "1.5rem",
              backgroundColor: "transparent",
              color: "#CBC3E3",
              "&:hover": {
                background: "linear-gradient(90deg, #42C09A 0%, #ECFF76 100%)",
                color: "#fff",
              },
            }}
          >
            Schedule a Demo
          </Button>
        </Container>
      </Box>
      <SectionWithCards />
      <div className="w-full h-[842px] bg-[#130c44] flex items-center justify-center">
        {/* <div className="relative"> */}
        <div className="pt-[16.50px] flex flex-col items-center gap-[48.50px]">
          <div className="self-stretch flex flex-col justify-start items-center gap-6">
            <div className="self-stretch text-center">
              <span className="text-white text-7xl font-semibold font-poppins">
                Empowering <br /> Businesses with &nbsp;
              </span>
              <span className="text-[#7166be] text-7xl font-semibold font-poppins">
                AI-
                <br />
                PPE Solutions
              </span>
            </div>
            <div className="w-[50%] text-center text-white text-xl font-medium font-poppins leading-normal">
              Our modules streamline attendance tracking and PPE detection,
              giving you the tools to enhance safety and productivity.
            </div>
          </div>
          <div className="flex flex-col justify-start items-start">
            <div className=" px-5 py-2.5 bg-gradient-to-r from-[#534998] to-[#42c09a] rounded-[10px] shadow border-2 flex flex-col justify-center items-center">
              <div className="rounded flex justify-start items-center gap-2">
                <div className="text-center text-white text-2xl font-normal font-poppins">
                  Schedule a Demo
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
      <div className="mx-10 py-8 flex flex-col flex-wrap gap-16">
        <div className="flex flex-wrap gap-8 justify-between items-center">
          <img src="/M.png" alt="img" />
          <div className="w-[600px]">
            <div className="text-center">
              <span className="text-[#7166be] text-5xl font-semibold font-poppins">
                50% Boost
                <br />
              </span>
              <span className="text-[#1c154f] text-5xl font-semibold font-poppins">
                in Sales.
              </span>
            </div>
            <div className="text-center text-[#1c154f] text-xl font-medium font-poppins word-wrap">
              Ensuring worker safety makes operations smooth, precise, and fast,
              leading to a significant boost in sales.
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-between gap-8 items-center md:gap-8">
          <img src="/M1.png" alt="img" className="block md:hidden" />

          <div className="w-[600px]">
            <div className="text-center">
              <span className="text-[#7166be] text-5xl font-semibold font-poppins">
                50% Increase
                <br />
              </span>
              <span className="text-[#1c154f] text-5xl font-semibold font-poppins">
                in Productivity.
              </span>
            </div>
            <div className="text-center text-[#1c154f] text-xl font-medium font-poppins">
              Ensuring worker safety makes operations smooth, precise, and fast,
              leading to a significant boost in sales.
            </div>
          </div>
          <img src="/M1.png" alt="img" className="hidden md:block" />
        </div>
      </div>
      {/* Form Section */}
      <div className="px-40 py-9 flex flex-wrap p-8 w-full">
        <div className="w-[40%] pt-8">
          <span className="text-[#1c154f] text-2xl font-semibold font-poppins">
            Speak with a <br />
          </span>
          <span className="text-[#42c09a] text-2xl font-semibold font-poppins">
            Sawy AI Expert <br />
          </span>
          <span className="text-[#1c154f] text-2xl font-semibold font-poppins">
            Today
          </span>
          <p className="w-full md:w-[55%] text-justify text-[#949494] text-base font-normal font-poppins mt-4">
            At Sway AI, we specialize in AI-powered solutions that streamline
            your operations. Whether you’re looking to enhance workplace safety
            or gain real-time insights, our team is here to guide you with
            cutting-edge tools designed for your business needs.
            <br />
            Fill out the form, and let’s start transforming your processes with
            the power of AI.
          </p>
        </div>

        <div className="flex items-center justify-center w-[60%]">
          <MyForm />
        </div>
      </div>
      <div className="flex flex-col flex-wrap items-center justify-center gap-8">
        <div className="w-[524px] text-center text-[#42c09a] text-[40px] font-semibold font-poppins leading-[48px]">
          Enjoy Using Customize & Train with Ease, No-Code AI Modules
        </div>
        <div className="h-16 flex-col justify-start items-start inline-flex">
          <div className="w-[415px] h-16 px-5 py-2.5 bg-gradient-to-r from-[#534998] to-[#42c09a] rounded-[10px] shadow border-2 flex-col justify-center items-center flex">
            <div className="rounded justify-start items-center gap-2 inline-flex">
              <div className="text-center text-white text-2xl font-normal font-poppins leading-normal">
                Schedule a Demo
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <img
        className="w-[1564px] h-[1174px]"
        src="https://via.placeholder.com/1564x1174"
      /> */}
      {/* <ThirdSection /> */}
      <Footer />
    </>
  );
};

export default LandingPage;
