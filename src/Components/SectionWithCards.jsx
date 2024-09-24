import React from "react";
import { Container, Typography, Box, Card, CardContent } from "@mui/material";

const SectionWithCards = () => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: "80vh",
        alignItems: "center",
        justifyContent: "center",
        padding: "4rem",
        my: 6,
      }}
    >
      {/* First Section: Heading and Paragraph */}
      <Container
        sx={{ display: "flex", flexDirection: "column", width: "50%" }}
      >
        <Typography
          variant="h3"
          component="h2"
          sx={{
            fontSize: "3rem",
            color: "#1C154F",
            fontFamily: "Poppins",
            fontWeight: 600,
          }}
        >
          Transform Your
          <br /> Business With Future
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
          >
            AI Solutions
          </span>
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#848484",
            fontFamily: "Poppins",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: 500,
            lineHeight: "24px",
            marginTop: "24px",
          }}
        >
          Empower your business to grow without limits. Our AI <br /> tool
          integrates seamlessly into your existing
          <br /> systems, providing
        </Typography>
      </Container>

      {/* Second Section: Cards */}
      <Box
        sx={{
          position: "relative",
          width: "50%",
          height: "80%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          "&:hover .card": {
            transform: "scale(1.2)",
          },
        }}
      >
        {/* Card 1 */}
        <Card
          className="card"
          sx={{
            position: "absolute",
            zIndex: 1,
            transform: "scale(1) rotate(-5deg)",
            transition:
              "transform 0.3s ease-in-out, top 0.3s ease-in-out, left 0.3s ease-in-out",
            width: "70%",
            height: 150,
            margin: "0",
            top: "10%",
            left: "15%",
            "&:hover": {
              transform: "scale(1.2) rotate(0deg)",
            },
          }}
        >
          <CardContent>
            <div className="flex gap-2">
              <img src="/Group.svg" alt="Icon" />
              <h3 className="text-[#1c144e] text-2xl font-semibold font-[Poppins]">
                Automation of Repetitive Tasks
              </h3>
            </div>
            <p className="text-justify text-[#838383] text-base font-medium font-[Poppins]">
              Eliminate time-consuming manual processes by automating repetitive
              tasks, allowing your team to focus on.
            </p>
          </CardContent>
        </Card>
        {/* Card 2 */}
        <Card
          className="card"
          sx={{
            position: "absolute",
            zIndex: 2,
            transform: "scale(1) rotate(0deg)",
            transition:
              "transform 0.3s ease-in-out, top 0.3s ease-in-out, left 0.3s ease-in-out",
            width: "70%",
            height: 150,
            margin: "0",
            top: "30%",
            left: "20%",
            "&:hover": {
              transform: "scale(1.2) rotate(-5deg)",
              //   left:"10%",
            },
          }}
        >
          <CardContent>
            <div className="flex gap-2">
              <img src="/Group1.svg" alt="Icon" />
              <h3 className="text-[#1c144e] text-2xl font-semibold font-[Poppins]">
                Scalable AI Infrastructure
              </h3>
            </div>
            <p className="text-justify text-[#838383] text-base font-medium font-[Poppins]">
              Seamlessly integrates into your existing systems, with the
              capacity to add new modules as your business evolves.
            </p>
          </CardContent>
        </Card>
        {/* Card 3 */}
        <Card
          className="card"
          sx={{
            position: "absolute",
            zIndex: 3,
            transform: "scale(1) rotate(-5deg)",
            transition:
              "transform 0.3s ease-in-out, top 0.3s ease-in-out, left 0.3s ease-in-out",
            width: "70%",
            height: 150,
            margin: "0",
            top: "50%",
            left: "14%",
            "&:hover": {
              transform: "scale(1.2)",
            },
          }}
        >
          <CardContent>
            <div className="flex gap-2">
              <img src="/Group2.svg" alt="Icon" />
              <h3 className="text-[#1c144e] text-2xl font-semibold font-[Poppins]">
                Data-Driven Insights
              </h3>
            </div>
            <p className="text-justify text-[#838383] text-base font-medium font-[Poppins]">
              Seamlessly integrates into your existing systems, with the
              capacity to add new modules as your business evolves.
            </p>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default SectionWithCards;
