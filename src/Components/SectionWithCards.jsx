// import React from "react";
// import { Container, Typography, Box, Card, CardContent } from "@mui/material";

// const SectionWithCards = () => {
//   return (
//     <Box
//       sx={{
//         display: "flex",
//         flexDirection: { xs: "column", md: "row" },
//         width: "100%",
//         height: "80vh",
//         alignItems: "center",
//         justifyContent: "center",
//         padding: "4rem",
//         my: 6,
//       }}
//     >
//       {/* First Section: Heading and Paragraph */}
//       <Container
//         sx={{ display: "flex", flexDirection: "column", width: "100%" }}
//       >
//         <Typography
//           variant="h3"
//           component="h2"
//           sx={{
//             fontSize: "3rem",
//             color: "#1C154F",
//             fontFamily: "Poppins",
//             fontWeight: 600,
//           }}
//         >
//           Transform Your
//           <br /> Business With Future
//           <br />
//           <span
//             style={{
//               background:
//                 "linear-gradient(90deg, #7266BE 0%, #63B1A7 64.58%, #42C09A 100%)",
//               backgroundClip: "text",
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//               marginTop: "24px",
//             }}
//           >
//             AI Solutions
//           </span>
//         </Typography>
//         <Typography
//           variant="body1"
//           sx={{
//             color: "#848484",
//             fontFamily: "Poppins",
//             fontSize: "16px",
//             fontStyle: "normal",
//             fontWeight: 500,
//             lineHeight: "24px",
//             marginTop: "24px",
//           }}
//         >
//           Empower your business to grow without limits. Our AI <br /> tool
//           integrates seamlessly into your existing
//           <br /> systems, providing
//         </Typography>
//       </Container>

//       {/* Second Section: Cards */}
//       <Box
//         sx={{
//           position: "relative",
//           width: "50%",
//           height: "80%",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           "&:hover .card": {
//             transform: "scale(1.2)",
//           },
//         }}
//       >
//         {/* Card 1 */}
//         <Card
//           className="card"
//           sx={{
//             position: "absolute",
//             zIndex: 1,
//             transform: "scale(1) rotate(-5deg)",
//             transition:
//               "transform 0.3s ease-in-out, top 0.3s ease-in-out, left 0.3s ease-in-out",
//             width: "70%",
//             height: 150,
//             margin: "0",
//             top: "10%",
//             left: "15%",
//             "&:hover": {
//               transform: "scale(1.2) rotate(0deg)",
//             },
//           }}
//         >
//           <CardContent>
//             <div className="flex gap-2">
//               <img src="/Group.svg" alt="Icon" />
//               <h3 className="text-[#1c144e] text-2xl font-semibold font-[Poppins]">
//                 Automation of Repetitive Tasks
//               </h3>
//             </div>
//             <p className="text-justify text-[#838383] text-base font-medium font-[Poppins]">
//               Eliminate time-consuming manual processes by automating repetitive
//               tasks, allowing your team to focus on.
//             </p>
//           </CardContent>
//         </Card>
//         {/* Card 2 */}
//         <Card
//           className="card"
//           sx={{
//             position: "absolute",
//             zIndex: 2,
//             transform: "scale(1) rotate(0deg)",
//             transition:
//               "transform 0.3s ease-in-out, top 0.3s ease-in-out, left 0.3s ease-in-out",
//             width: "70%",
//             height: 150,
//             margin: "0",
//             top: "30%",
//             left: "20%",
//             "&:hover": {
//               transform: "scale(1.2) rotate(-5deg)",
//               //   left:"10%",
//             },
//           }}
//         >
//           <CardContent>
//             <div className="flex gap-2">
//               <img src="/Group1.svg" alt="Icon" />
//               <h3 className="text-[#1c144e] text-2xl font-semibold font-[Poppins]">
//                 Scalable AI Infrastructure
//               </h3>
//             </div>
//             <p className="text-justify text-[#838383] text-base font-medium font-[Poppins]">
//               Seamlessly integrates into your existing systems, with the
//               capacity to add new modules as your business evolves.
//             </p>
//           </CardContent>
//         </Card>
//         {/* Card 3 */}
//         <Card
//           className="card"
//           sx={{
//             position: "absolute",
//             zIndex: 3,
//             transform: "scale(1) rotate(-5deg)",
//             transition:
//               "transform 0.3s ease-in-out, top 0.3s ease-in-out, left 0.3s ease-in-out",
//             width: "70%",
//             height: 150,
//             margin: "0",
//             top: "50%",
//             left: "14%",
//             "&:hover": {
//               transform: "scale(1.2)",
//             },
//           }}
//         >
//           <CardContent>
//             <div className="flex gap-2">
//               <img src="/Group2.svg" alt="Icon" />
//               <h3 className="text-[#1c144e] text-2xl font-semibold font-[Poppins]">
//                 Data-Driven Insights
//               </h3>
//             </div>
//             <p className="text-justify text-[#838383] text-base font-medium font-[Poppins]">
//               Seamlessly integrates into your existing systems, with the
//               capacity to add new modules as your business evolves.
//             </p>
//           </CardContent>
//         </Card>
//       </Box>
//     </Box>
//   );
// };

// export default SectionWithCards;

import React from "react";
import { Container, Typography, Box, Card, CardContent } from "@mui/material";

const SectionWithCards = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" }, // Stack vertically on small screens
        width: "100%",
        height: "auto",
        alignItems: "center",
        justifyContent: "center",
        padding: { xs: "2rem", md: "4rem" }, // Adjust padding for small screens
        my: 6,
      }}
    >
      {/* First Section: Heading and Paragraph */}
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          width: { xs: "100%", md: "50%" }, // Full width on small screens
          textAlign: { xs: "center", md: "left" }, // Center text on small screens
          mb: { xs: 4, md: 0 }, // Margin bottom for small screens
        }}
      >
        <Typography
          variant="h3"
          component="h2"
          sx={{
            fontSize: { xs: "2rem", md: "3rem" }, // Smaller font size on small screens
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
          width: { xs: "100%", md: "50%" }, // Full width on small screens
          height: "auto", // Make sure height adjusts automatically
          display: "flex",
          flexDirection: "column", // Stack cards vertically
          alignItems: "center",
          gap: 3, // Space between cards
        }}
      >

        <Card
          sx={{
            width: { xs: "90%", md: "70%" }, 
            height: 150,
            transition: "transform 0.3s ease-in-out",
            "&:hover": {
              transform: "scale(1.05)", 
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


        <Card
          sx={{
            width: { xs: "90%", md: "70%" },
            height: 150,
            transition: "transform 0.3s ease-in-out",
            "&:hover": {
              transform: "scale(1.05)",
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


        <Card
          sx={{
            width: { xs: "90%", md: "70%" },
            height: 150,
            transition: "transform 0.3s ease-in-out",
            zIndex: 3,
                        transform: "scale(1) rotate(-5deg)",
            "&:hover": {
              transform: "scale(1.05)",
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
