import React, { useState } from "react";
import { Typography, Box, Button } from "@mui/material";
import Layout from "./Layout";

function Home() {
  const [language, setLanguage] = useState("en");

  const handleToggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "en" ? "fr" : "en"));
  };
  return (
    <Layout>
      <Box
        sx={{
          paddingTop: { xs: 4, sm: 6, md: 8 },
          paddingBottom: { xs: 4, sm: 6, md: 8 },
        }}
      >
        {language === "en" ? (
          <>
            <Typography variant="h4" component="h1" gutterBottom>
              Frontend Developer
            </Typography>
            <Typography
              variant="h2"
              component="h2"
              color="primary"
              gutterBottom
            >
              Alan Rich
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{
                paddingBottom: 2,
              }}
            >
              I'm a software engineer with over five years of experience
              developing React applications for Fortune 500 corporations and
              national security contractors. A sample of my work can be found at{" "}
              <a
                href="https://www.decouvrirpatrimoine.fr"
                target="_blank"
                rel="noopener noreferrer"
              >
                DecouvrirPatrimoine.fr
              </a>
              , a data-driven dashboard application that aggregates and
              visualizes government data on French heritage. In my previous
              career, I was an organic chemist developing enantiomer-specifc
              organocatalytic reactions. I have been living in France since
              2020, working remotely for American corporations. I am currently
              seeking my first role with a French organization, motivated by a
              desire to more fully integrate into society and also return to
              Paris after satiating my desire to experience provincial life. I
              am excited to contribute my unique experiences and skills, whilst
              embracing new lessons that will support my ongoing professional
              development.
            </Typography>
          </>
        ) : (
          <>
            <Typography variant="h4" component="h1" gutterBottom>
              Développeur Frontend
            </Typography>
            <Typography
              variant="h2"
              component="h2"
              color="primary"
              gutterBottom
            >
              Alan Rich
            </Typography>
            <Typography variant="body1" paragraph>
              Je suis ingénieur logiciel avec plus de cinq ans d'expérience dans
              le développement d'applications React pour des entreprises du
              Fortune 500 et des contractants en sécurité nationale. Un exemple
              de mon travail peut être consulté sur{" "}
              <a
                href="https://www.decouvrirpatrimoine.fr"
                target="_blank"
                rel="noopener noreferrer"
              >
                DecouvrirPatrimoine.fr
              </a>
              , une application de tableau de bord axée sur les données qui
              agrège et visualise les données gouvernementales sur le patrimoine
              français. Dans ma carrière précédente, j'étais chimiste organicien
              développant des réactions organocatalytiques spécifiques aux
              énantiomères. Je vis en France depuis 2020, en télétravail pour
              des entreprises américaines. Je suis actuellement à la recherche
              de mon premier poste dans une enterprise française, motivé par le
              désir de m'intégrer pleinement dans la société et de retourner à
              Paris après avoir satisfait mon envie de découvrir la vie
              provinciale. Je suis enthousiaste à l'idée de contribuer mes
              expériences et compétences uniques, tout en adoptant de nouvelles
              leçons qui soutiendront mon développement professionnel.
            </Typography>
          </>
        )}
        <Button variant="contained" onClick={handleToggleLanguage}>
          {language === "en" ? "Traduire en français" : "Translate to English"}
        </Button>
      </Box>
    </Layout>
  );
}

export default Home;
