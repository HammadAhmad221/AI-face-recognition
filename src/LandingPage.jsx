import { useState, useEffect,useRef } from "react";
import { Container, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { keyframes } from "@mui/system";
import { FaPlay, FaPause } from 'react-icons/fa';
import SectionWithCards from "./Components/CardsSection";
import MyForm from "./Components/LandingPageForm";
import Footer from "./Components/Footer";
import { useTranslation } from 'react-i18next';

const LandingPage = () => {
  const { t, i18n } = useTranslation();
  // Create separate states and refs for each video
  const [isPlaying1, setIsPlaying1] = useState(false);
  const [isPlaying2, setIsPlaying2] = useState(false);
  const [isPlaying3, setIsPlaying3] = useState(false);
  const [isPlaying4, setIsPlaying4] = useState(false);

  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);
  const videoRef3 = useRef(null);
  const videoRef4 = useRef(null);

  const isRTL = i18n.language === 'ar';
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
      text: t("hsa1"),
      color: "linear-gradient(90deg, #42C09A 0%, #ECFF76 100%)",
      animation: slideInFromTop,
    },
    {
      text: t("hsa2"),
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

  const handleVideoToggle = ( videoRef, isPlaying, setIsPlaying) => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause(); // Pause the video
      } else {
        videoRef.current.play(); // Play the video
      }
      setIsPlaying(!isPlaying); // Toggle the state
    }
  };
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
            {/* Unlock Your Business */}
            {t('hsh1')}
            <br />
            {/* Potential With AI: */}
            {t('hsh2')}
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
          {/* <Button
            variant="outlined"
            color="primary"
            component={Link}
            to="/form"
            sx={{
              mt: 2,
              border: "3px solid",
              borderImage:"linear-gradient(90deg, #42C09A 0%, #ECFF76 100%)",
              boxShadow: "0px 0px 15.4px 0px rgba(155, 250, 221, 0.16)",
              borderImageSlice:1,
              borderRadius: "20px",
              padding: "12px 24px",
              fontSize: "1.2rem",
              backgroundColor: "transparent",
              color: "#CBC3E3",
              "&:hover": {
                background: "#534998",
              color: "#CBC3E3",
              },
            }}
          >
            {t("hsb")}
          </Button> */}
          <Button
  color="transparent"
  component={Link}
  to="/form"
  sx={{
    mt: 2,
    position: "relative", // Needed for the pseudo-element positioning
    padding: "12px 24px",
    fontSize: "1.2rem",
    borderRadius: "10px", // Ensures button corners are rounded
    backgroundColor: "transparent",
    color: "#CBC3E3",
    zIndex: 1, // Ensures the content stays above the gradient
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      borderRadius: "inherit", // Matches the border-radius of the button
      padding: "2px", // Defines the thickness of the gradient border
      background: "linear-gradient(90deg, #42c09a 0%, #534998 100%)",
      WebkitMask:
        "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
      mask:
        "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)", // Makes sure the gradient is on the border
      maskComposite: "exclude", // Ensures that the gradient doesn't fill the inner part
      zIndex: -1,
    },
    "&:hover": {
      background: "#534998",
      color: "#CBC3E3",
    },
    boxShadow: "0px 0px 15.4px 0px rgba(155, 250, 221, 0.16)",
  }}
>
  {t("hsb")}
</Button>

        </Container>
      </Box>
      <SectionWithCards />
      {/* <div className="w-full h-[842px] bg-[#130D44] flex items-center justify-center max-[1000px]:hidden">
        <div className="pt-[16.50px] flex flex-col items-center gap-[48.50px]">
          <div className="self-stretch flex flex-col justify-start items-center gap-6">
            <div className="self-stretch text-center">
              <span className="text-white text-6xl font-semibold font-poppins">
                Empowering <br /> Businesses with &nbsp;
              </span>
              <span className="text-[#7166be] text-6xl font-semibold font-poppins">
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
      </div> */}
      <div className="w-full h-[750px] bg-[url('/backroundb.png')] lg:flex flex-col items-center overflow-y-auto scrollbar-hide max-[1000px]:hidden relative">
      <div className="absolute w-full h-full inset-0 bg-[#130D44] opacity-80"></div>
        <div className="pt-[16.50px] min-h-[750px] flex flex-col items-center justify-center gap-[48.50px]">
          <div className="self-stretch flex flex-col justify-start items-center gap-6">
            <div className="self-stretch text-center">
              <span className="text-white text-6xl font-semibold font-poppins w-[50%] z-10 relative">
                {/* Empowering Businesses with  */}
                {t("ppeh")}
               <br />
               {t("ppeh1")}
              </span>
              <span
                style={{
                  background:
                    "linear-gradient(90deg, #7266BE 0%, #63B1A7 64.58%, #42C09A 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  marginTop: "24px",
                }}
                className="text-6xl font-semibold font-poppins z-10 relative"
              ><br/>
                {/* AI-PPE Solutions */}
                {t("ppehc")}
              </span>
            </div>
            <div className="w-[50%] text-center text-white text-xl font-medium font-poppins leading-normal z-10 relative">
              {/* Our modules streamline attendance tracking and PPE detection,
              giving you the tools to enhance safety and productivity. */}
              {t("ppep")}
            </div>
          </div>
          {/* <div className="flex flex-col justify-start items-start z-10 relative">
            <div className="px-5 py-2.5 bg-gradient-to-r from-[#534998] to-[#42c09a] rounded-[10px] shadow border-2 flex flex-col justify-center items-center">
              <div className="rounded flex justify-start items-center gap-2">
                <div className="text-center text-white text-2xl font-normal font-poppins">
                  {t("hsb")}
                </div>
              </div>
            </div>
          </div> */}
          {/* <button className="text-white px-5 py-2.5 bg-gradient-to-r from-[#42c09a] to-[#534998] rounded-[10px] shadow border-2 flex flex-col justify-center items-center">
            {t("hsb")}
          </button> */}
{/* <button class="relative block px-6 py-3 text-xl font-semibold bg-gradient-to-r from-[#534998] to-[#42C09A] text-[#CBC3E3] rounded-lg border-none hover:bg-[#534998] shadow-[0px_0px_15.4px_0px_rgba(155,250,221,0.16)]">
  Schedule a Demo
</button> */}
<button class="relative block px-8 py-3 text-2xl text-[#CBC3E3] rounded-lg border-none shadow-[0px_0px_15.4px_0px_rgba(155,250,221,0.16)] bg-gradient-to-r from-[#534998] to-[#42C09A] transition-all duration-300 ease-in-out hover:from-[#534998] hover:to-[#534998]">
  {/* Schedule a Demo */}
  {t("hsb")}
</button>



        </div>
        {/* adding button on vedio */}
        {/* <div className="w-full min-h-[750px] flex justify-end items-center relative px-32">
      <div className="absolute w-full h-full inset-0 bg-[#130D44] opacity-80"></div>
          <div>
            <div className={`absolute z-10 lg:bottom-80 ${isRTL ? 'lg:right-20' : 'lg:left-20'}`}>
              <span className="text-white text-5xl font-semibold font-poppins">
                {t("ppevh")}
              </span>
              <br />
              <span
                style={{
                  background:
                    "linear-gradient(90deg, #7266BE 0%, #63B1A7 64.58%, #42C09A 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  marginTop: "24px",
                }}
                className="text-5xl font-semibold font-poppins"
              >
                {t("ppevhc")}
              </span>
              <div className="text-white text-lg font-poppins w-[50%]">
          {t("ppevp")}
              </div>
            </div>
          </div>
          <video
            autoPlay
            loop
            muted
            src="vedio1.mp4"
            type="video/mp4"
            className=" w-full h-auto max-w-[950px] rounded-tl-[160px] rounded-br-[160px] shadow-lg"
          ></video>
        </div> */}
         <div className="w-full min-h-[750px] flex justify-end items-center relative px-32">
      <div className="absolute w-full h-full inset-0 bg-[#130D44] opacity-80"></div>
      <div>
        <div className={`absolute z-10 lg:bottom-80 ${isRTL ? 'lg:right-20' : 'lg:left-20'}`}>
          <span className="text-white text-5xl font-semibold font-poppins">
            {t("ppevh")}
          </span>
          <br />
          <span
            style={{
              background: "linear-gradient(90deg, #7266BE 0%, #63B1A7 64.58%, #42C09A 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              marginTop: "24px",
            }}
            className="text-5xl font-semibold font-poppins"
          >
            {t("ppevhc")}
          </span>
          <div className="text-white text-lg font-poppins w-[65%]">
            {t("ppevp")}
          </div>
        </div>
      </div>

      <div className="relative w-full h-auto max-w-[950px]">
        {/* Video element */}
        <video
          ref={videoRef1} // Reference to control video playback
          loop
          muted
          src="vedio1.mp4"
          type="video/mp4"
          className="w-full h-auto rounded-tl-[160px] rounded-br-[160px] shadow-lg"
        ></video>

        {/* Play/Pause button */}
        <button
          // onClick={handleVideoToggle}
          onClick={() => handleVideoToggle(videoRef1, isPlaying1, setIsPlaying1)}
          className={`absolute inset-0 flex items-center justify-center bg-green-500 text-white rounded-full w-16 h-16 z-20 ${isRTL ? "right-[50%]" : "left-[50%]"} top-[50%]`}
          style={{ transform: 'translate(-50%, -50%)' }}
        >
          {/* {isPlaying ? 'Pause' : 'Play'} */}
          {isPlaying1 ? <FaPause size={36} /> : <FaPlay size={36} />}
        </button>
      </div>
    </div>
      </div>

      {/* rest code */}
      <div className="sm:flex flex-col items-center justify-center lg:hidden bg-[#130c44]">
        <div className="lg:w-[50%] sm:w-full text-center">
          <span className="text-white text-[32px] font-semibold font-poppins">
            {/* AI-Driven PPE Monitoring: */}
            {t("ppevh")}
          </span>
          <span
            style={{
              background:
                "linear-gradient(90deg, #7266BE 0%, #63B1A7 64.58%, #42C09A 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            className="text-[#7166be] text-[32px] font-semibold font-poppins"
          >
            {/* Enhancing Safety with Precision */}
            {t("ppevhc")}
          </span>
        </div>
        <div className="lg:w-[40%] sm:w-full text-center text-white text-base font-medium font-poppins leading-normal">
          {/* "Ensure compliance and safety with our AI-powered PPE module,
          detecting protective gear in real-time and reducing risk across your
          operation." */}
          {t("ppevp")}
        </div>
        <div className="p-8 relative">
          <video
            // autoPlay
            ref={videoRef2}
            loop
            muted
            src="/vedio1.mp4"
            type="video/mp4"
            className="rounded-xl"
          ></video>
        {/* Play/Pause button */}
        <button
          // onClick={handleVideoToggle}
          onClick={() => handleVideoToggle(videoRef2, isPlaying2, setIsPlaying2)}
          // className="absolute inset-0 flex items-center justify-center bg-green-500 text-white rounded-full w-16 h-16 z-20"
          className={`absolute inset-0 flex items-center justify-center bg-green-500 text-white rounded-full w-16 h-16 z-20 ${isRTL ? "right-[50%]" : "left-[50%]"} top-[50%]`}
          style={{ transform: 'translate(-50%, -50%)', left: '50%', top: '50%' }}
        >
          {/* {isPlaying ? 'Pause' : 'Play'} */}
          {isPlaying2 ? <FaPause size={36} /> : <FaPlay size={36} />}
        </button>
        </div>
      </div>
      <div className="py-8 flex flex-col flex-wrap gap-16">
        <div className="flex flex-wrap gap-8 justify-center items-center ">
          <img src="/M.png" alt="img" />
          <div className="lg:w-[45%] sm:w-full px-4">
            <div className="text-center">
              <span className="text-[#7166be] text-5xl font-semibold font-poppins">
                {/* 50% Boost */}
                {t("boost")}
                <br />
              </span>
              <span className="text-[#1c154f] text-5xl font-semibold font-poppins">
                {/* in Sales. */}
                {t("sales")}
              </span>
            </div>
            <div className="text-center text-[#1c154f] text-xl font-medium font-poppins word-wrap">
              {/* Ensuring worker safety makes operations smooth, precise, and fast,
              leading to a significant boost in sales. */}
              {t("boostp")}
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-8 items-center md:gap-8">
          <img src="/M4.png" alt="img" className="block lg:hidden" />

          <div className="lg:w-[45%] sm:w-full px-4">
            <div className="text-center">
              <span className="text-[#7166be] text-5xl font-semibold font-poppins">
                {/* 50% Increase */}
                {t("increase")}
                <br />
              </span>
              <span className="text-[#1c154f] text-5xl font-semibold font-poppins">
                {/* in Productivity. */}
                {t("productivity")}
              </span>
            </div>
            <div className="text-center text-[#1c154f] text-xl font-medium font-poppins">
              {/* Ensuring worker safety makes operations smooth, precise, and fast,
              leading to a significant boost in sales. */}
              {t("boostp")}
            </div>
          </div>
          <img src="/M4.png" alt="img" className="hidden lg:block" />
        </div>
      </div>
      {/* <div className="w-full h-[842px] bg-[#130D44] flex items-center justify-center max-[1000px]:hidden">
        <div className="pt-[16.50px] flex flex-col items-center gap-[48.50px]">
          <div className="self-stretch flex flex-col justify-start items-center gap-6">
            <div className="self-stretch text-center">
              <span className="text-white text-6xl font-semibold font-poppins">
                Empowering <br /> Businesses with &nbsp;
              </span>
              <span className="text-[#7166be] text-6xl font-semibold font-poppins">
                AI-
                <br />
                Attendance Solutions
              </span>
            </div>
            <div className="w-[50%] text-center text-white text-xl font-medium font-poppins leading-normal">
              Our modules simplify attendance tracking and optimize efficiency,
              providing you with the tools to enhance safety and boost
              productivity.
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
      </div> */}
      <div className="w-full h-[750px] bg-[url('/backroundb.png')] lg:flex flex-col items-center overflow-y-auto scrollbar-hide max-[1000px]:hidden relative">
      <div className="absolute w-full h-full inset-0 bg-[#130D44] opacity-80"></div>
        <div className="pt-[16.50px] min-h-[750px] flex flex-col items-center justify-center gap-[48.50px] relative z-10">
          <div className="self-stretch flex flex-col justify-start items-center gap-6">
            <div className="self-stretch text-center">
              <span className="text-white text-6xl font-semibold font-poppins">
                {/* Empowering Businesses with  */}
                {t("ppeh")}
               <br />
               {t("ppeh1")}
              </span>
              <span
                style={{
                  background:
                    "linear-gradient(90deg, #7266BE 0%, #63B1A7 64.58%, #42C09A 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  marginTop: "24px",
                }}
                className="text-6xl font-semibold font-poppins"
              ><br />
                {/* AI-Attendance Solutions */}
                {t("amh")}
              </span>
            </div>
            <div className="w-[50%] text-center text-white text-xl font-medium font-poppins leading-normal">
              {/* Our modules simplify attendance tracking and optimize efficiency,
              providing you with the tools to enhance safety and boost
              productivity. */}
              {t("amp")}
            </div>
          </div>
          {/* <div className="flex flex-col justify-start items-start">
            <div className="px-5 py-2.5 bg-gradient-to-r from-[#534998] to-[#42c09a] rounded-[10px] shadow border-2 flex flex-col justify-center items-center">
              <div className="rounded flex justify-start items-center gap-2">
                <div className="text-center text-white text-2xl font-normal font-poppins">
                  {t("hsb")}
                </div>
              </div>
            </div>
          </div> */}
          <button class="relative block px-8 py-3 text-2xl text-[#CBC3E3] rounded-lg border-none shadow-[0px_0px_15.4px_0px_rgba(155,250,221,0.16)] bg-gradient-to-r from-[#534998] to-[#42C09A] transition-all duration-300 ease-in-out hover:from-[#534998] hover:to-[#534998]">
            {/* Schedule a Demo */}
            {t("hsb")}
          </button>
        </div>
        <div className="w-full min-h-[750px] flex justify-end items-center relative px-32">
      <div className="absolute w-full h-full inset-0 bg-[#130D44] opacity-80"></div>
          <div>
            <div className={`absolute z-10 lg:bottom-80 ${isRTL ? 'lg:right-20' : 'lg:left-20'}`}>
              <span className="text-white text-5xl font-semibold font-poppins">
                {/* AI-Driven Attendance <br /> Tracking: */}
                {t("amvh")}
              </span><br />
              <span
                style={{
                  background:
                    "linear-gradient(90deg, #7266BE 0%, #63B1A7 64.58%, #42C09A 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  marginTop: "24px",
                }}
                className="text-5xl font-semibold font-poppins"
              >
                {/* Optimize <br /> Workforce Management */}
                {t("amvhc")}
              </span><br />
              <div className="text-white text-lg font-poppins w-[50%]">
            {/* Efficiently manage employee attendance with our AI-powered module.
          Achieve accurate tracking and compliance, reducing admin tasks and
          boosting productivity. */}
          {t("amvp")}
              </div>
            </div>

          </div>
          {/* <video
            autoPlay
            loop
            muted
            src="vedio2.mp4"
            type="video/mp4"
            className=" w-full h-auto max-w-[750px] rounded-tl-[160px] rounded-br-[160px] shadow-lg"
          ></video> */}
                <div className="relative w-full h-auto max-w-[950px]">
        {/* Video element */}
        <video
          ref={videoRef3} // Reference to control video playback
          loop
          muted
          src="vedio2.mp4"
          type="video/mp4"
          className="w-full h-auto rounded-tl-[160px] rounded-br-[160px] shadow-lg"
        ></video>

        {/* Play/Pause button */}
        <button
          // onClick={handleVideoToggle}
          onClick={() => handleVideoToggle(videoRef3, isPlaying3, setIsPlaying3)}
          // className="absolute inset-0 flex items-center justify-center bg-green-500 text-white rounded-full w-16 h-16 z-20"
          className={`absolute inset-0 flex items-center justify-center bg-green-500 text-white rounded-full w-16 h-16 z-20 ${isRTL ? "right-[50%]" : "left-[50%]"} top-[50%]`}
          style={{ transform: 'translate(-50%, -50%)', left: '50%', top: '50%' }}
        >
          {/* {isPlaying ? 'Pause' : 'Play'} */}
          {isPlaying3 ? <FaPause size={36} /> : <FaPlay size={36} />}
        </button>
      </div>
        </div>
      </div>
      {/* rest code */}
      <div className="sm:flex flex-col items-center justify-center lg:hidden bg-[#130c44]">
        <div className="lg:w-[50%] sm:w-full text-center">
          <span className="text-white text-[32px] font-semibold font-poppins">
            {/* AI-Driven Attendance Tracking: */}
            {t("amvh")}
          </span>
          <span
            style={{
              background:
                "linear-gradient(90deg, #7266BE 0%, #63B1A7 64.58%, #42C09A 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            className="text-[#7166be] text-[32px] font-semibold font-poppins"
          >
            {/* Optimize Workforce Management */}
            {t("amvhc")}
          </span>
        </div>
        <div className="lg:w-[40%] sm:w-full text-center text-white text-base font-medium font-poppins leading-normal">
          {/* Efficiently manage employee attendance with our AI-powered module.
          Achieve accurate tracking and compliance, reducing admin tasks and
          boosting productivity. */}
          {t("amvp")}
        </div>
        <div className="p-8 relative">
          <video
            // autoPlay
            ref={videoRef4}
            loop
            muted
            src="/vedio2.mp4"
            type="video/mp4"
            className="rounded-xl"
          ></video>
        {/* Play/Pause button */}
        <button
          // onClick={handleVideoToggle}
          onClick={() => handleVideoToggle(videoRef4, isPlaying4, setIsPlaying4)}
          // className="absolute inset-0 flex items-center justify-center bg-green-500 text-white rounded-full w-16 h-16 z-20"
          className={`absolute inset-0 flex items-center justify-center bg-green-500 text-white rounded-full w-16 h-16 z-20 ${isRTL ? "right-[50%]" : "left-[50%]"} top-[50%]`}
          style={{ transform: 'translate(-50%, -50%)', left: '50%', top: '50%' }}
        >
          {/* {isPlaying ? 'Pause' : 'Play'} */}
          {isPlaying4 ? <FaPause size={36} /> : <FaPlay size={36} />}
        </button>
        </div>
      </div>
      <div className="py-8 flex flex-col flex-wrap gap-16">
        <div className="flex flex-wrap gap-8 justify-center items-center ">
          <img src="/M2.png" alt="img" />
          <div className="lg:w-[45%] sm:w-full px-4">
            <div className="text-center">
              <span className="text-[#7166be] text-5xl font-semibold font-poppins">
                {/* 50% Boost */}
                {t("boost")}
                <br />
              </span>
              <span className="text-[#1c154f] text-5xl font-semibold font-poppins">
                {/* in Sales. */}
                {t("sales")}
              </span>
            </div>
            <div className="text-center text-[#1c154f] text-xl font-medium font-poppins word-wrap">
              {/* Ensuring worker safety makes operations smooth, precise, and fast,
              leading to a significant boost in sales. */}
              {t("boostp")}
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-8 items-center md:gap-8">
          <img src="/M1.png" alt="img" className="block lg:hidden" />

          <div className="lg:w-[45%] sm:w-full px-4">
            <div className="text-center">
              <span className="text-[#7166be] text-5xl font-semibold font-poppins">
                {/* 50% Increase */}
                {t("increase")}
                <br />
              </span>
              <span className="text-[#1c154f] text-5xl font-semibold font-poppins">
                {/* in Productivity. */}
                {t("productivity")}
              </span>
            </div>
            <div className="text-center text-[#1c154f] text-xl font-medium font-poppins">
              {/* Ensuring worker safety makes operations smooth, precise, and fast,
              leading to a significant boost in sales. */}
              {t("boostp")}
            </div>
          </div>
          <img src="/M1.png" alt="img" className="hidden lg:block" />
        </div>
      </div>
      <div className="flex items-start justify-center flex-wrap w-[84%] mx-auto">
        <div className="lg:w-[40%] sm:w-full pt-8">
          <span className="text-[#1c154f] text-2xl font-semibold font-poppins">
            {/* Speak with a  */}
            {t("speak")}
            <br />
          </span>
          <span className="text-[#42c09a] text-2xl font-semibold font-poppins">
            {/* Sawy AI Expert  */}
            {t("sway")}
            <br />
          </span>
          <span className="text-[#1c154f] text-2xl font-semibold font-poppins">
            {/* Today */}
            {t("today")}
          </span>
          <p className="w-full text-justify text-[#949494] font-normal font-poppins mt-4 word-wrap">
            {/* At Sway AI, we specialize in AI-powered solutions that streamline
            your operations. Whether you’re looking to enhance workplace safety
            or gain real-time insights, our team is here to guide you with
            cutting-edge tools designed for your business needs.
            Fill out the form, and let’s start transforming your processes with
            the power of AI. */}
            {t("as")}
          </p>
        </div>

        <div className="flex items-center justify-center lg:w-[60%] sm:w-full">
          <MyForm />
        </div>
      </div>
      <div className="flex flex-col flex-wrap items-center justify-center gap-12">
        {/* <div className="lg:w-[35%] sm:w-full text-center text-[#42c09a] text-[40px] font-semibold font-poppins p-4">
          {t("hbf")}
        </div> */}
        <div className="lg:w-[35%] sm:w-full text-center text-transparent bg-clip-text bg-gradient-to-r from-[#534998] to-[#42c09a] text-[40px] font-semibold font-poppins p-4">
  {t("hbf")}
</div>

        <div className="h-16 flex-col justify-start items-start inline-flex">
          {/* <div className="h-16 px-5 py-2.5 bg-gradient-to-r from-[#534998] to-[#42c09a] rounded-[10px] shadow border-2 flex-col justify-center items-center flex text-center text-white text-2xl font-normal font-poppins">
            {t("hsb")}
          </div> */}
                    <button class="relative block px-8 py-3 text-2xl text-white rounded-lg border-none shadow-[0px_0px_15.4px_0px_rgba(155,250,221,0.16)] bg-gradient-to-r from-[#534998] to-[#42C09A] transition-all duration-300 ease-in-out hover:from-[#534998] hover:to-[#534998]">
  {/* Schedule a Demo */}
  {t("hsb")}
</button>
        </div>
      </div>
      <div className=" w-full h-[70%] flex items-center justify-center pt-16">
        <div className="lg:w-[70%] sm:w-full relative">
          <img src="/chatbotImage.png" alt="image" className="rounded-3xl shadow-2xl" />
          <img
            src="/chatbotAbove.png"
            alt="image"
            className="rounded-3xl absolute top-44 right-36 max-[800px]:hidden shadow-2xl"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
