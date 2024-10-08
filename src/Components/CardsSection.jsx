import React from "react";
import { Container, Typography, Box, Card, CardContent } from "@mui/material";
import { useTranslation } from 'react-i18next';


const SectionWithCards = () => {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        width: "100%",
        height: "auto",
        alignItems: "center",
        justifyContent: "center",
        padding: { xs: "2rem", md: "4rem" },
        my: 6,
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          width: { xs: "100%", md: "50%" },
          textAlign: { xs: "center", md: "left" },
          mb: { xs: 4, md: 0 },
        }}
      >
        <Typography
          variant="h3"
          component="h2"
          sx={{
            fontSize: { xs: "2rem", md: "3rem" },
            color: "#1C154F",
            fontFamily: "Poppins",
            fontWeight: 600,
          }}
        >
          {t("csh")}
          <br /> 
          {t("csh1")}<br/>
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
            {t("cshc")}
          </span>
        </Typography>
        <Typography
          sx={{
            color: "#848484",
            fontFamily: "Poppins",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: 500,
            lineHeight: "24px",
            marginTop: "24px",
            xs:"100%",
            // lg:"30%"
          }}
        >
          {t("csp")}
        </Typography>
      </Container>

      <Box
        sx={{
          width: { xs: "100%", md: "50%" },
          height: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 3,
        }}
      >
        <Card
          sx={{
            width: { xs: "90%", md: "70%" },
            height: 150,
            transition: "transform 0.3s ease-in-out",
            transform: "scale(1) rotate(-5deg)",
            "&:hover": {
              transform: "scale(1.05)",
            },
          }}
        >
          <CardContent>
            <div className="flex gap-2">
              <img src="/Group.svg" alt="Icon" />
              <h3 className="text-[#1c144e] text-2xl font-semibold font-[Poppins]">
                {t("c1h")}
              </h3>
            </div>
            <p className="text-justify text-[#838383] text-base font-medium font-[Poppins]">
              {t("c1p")}
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
                {t("c2h")}
              </h3>
            </div>
            <p className="text-justify text-[#838383] text-base font-medium font-[Poppins]">
                {t("c2p")}
            </p>
          </CardContent>
        </Card>
        <Card
          sx={{
            width: { xs: "90%", md: "70%" },
            height: 150,
            transition: "transform 0.3s ease-in-out",
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
                {t("c3h")}
              </h3>
            </div>
            <p className="text-justify text-[#838383] text-base font-medium font-[Poppins]">
                {t("c3p")}
            </p>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default SectionWithCards;
