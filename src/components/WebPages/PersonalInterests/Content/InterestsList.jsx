import React from "react";
import { Typography, Box, Card, CardContent } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const InterestsList = ({
  language,
  personalInterestsContent,
  personalInterestsItemized,
}) => {
  const theme = useTheme();

  return (
    <Box mb={4}>
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        sx={{
          textTransform: "uppercase",
          color: theme.palette.primary.main,
        }}
      >
        {personalInterestsContent[language].interestsTitle}
      </Typography>
      <Card
        sx={{
          boxShadow: 3,
          borderRadius: "16px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f5f5f5",
        }}
      >
        <CardContent
          sx={{
            pt: 0,
            pb: 0,
          }}
        >
          <ul>
            {personalInterestsItemized.map((interest, index) => {
              const { bold, normal } = interest[language];
              return (
                <li key={index}>
                  <Typography
                    variant="body1"
                    component="span"
                    sx={{
                      fontWeight: "bold",
                      lineHeight: 1.8,
                      color: theme.palette.primary.main,
                    }}
                  >
                    {bold}
                  </Typography>
                  ,{" "}
                  {normal.includes("Un Gars") ? (
                    <Typography
                      variant="body1"
                      component="span"
                      sx={{
                        color: theme.palette.grey[700],
                      }}
                    >
                      {language === "en"
                        ? "currently addicted to"
                        : "actuellement accro à"}{" "}
                      <i>Un Gars, une fille</i>.
                    </Typography>
                  ) : (
                    <Typography
                      variant="body1"
                      component="span"
                      sx={{
                        color: theme.palette.grey[700],
                      }}
                    >
                      {normal}
                    </Typography>
                  )}
                </li>
              );
            })}
          </ul>
        </CardContent>
      </Card>
    </Box>
  );
};

export default InterestsList;
