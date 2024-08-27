import React, { useRef } from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  Stack,
  IconButton,
  Divider,
  ImageList,
  ImageListItem,
  Paper,
  Chip,
} from "@mui/material";

import HtmlIcon from "@mui/icons-material/Html";
import CssIcon from "@mui/icons-material/Css";
import JavascriptIcon from "@mui/icons-material/Javascript";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";
import Project from "./Project";
import Contact from "./Contact";
import Experience from "./Experience";
import { DevIcons } from "../utils/icons";

const Home = () => {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);

  const scrollToSection = (sectionRef) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Stack alignItems="center" justifyContent="center">
      <Grid
        container
        sx={{ height: "calc(100vh - 131px)" }}
        justifyContent="center"
        alignItems="center"
      >
        {/* Left Column */}
        <Grid
          item
          xs={12}
          md={6.5}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "start",
          }}
          gap={3}
          px={1}
          // top={-30}
          // position="relative"
        >
          <Stack textAlign="left" alignItems="start" gap={2}>
            <Stack>
              <Typography variant="h4">Hey I'm</Typography>
              <Typography variant="h2">Mark Nguyen</Typography>
            </Stack>
            <Typography variant="h6">
              a Front-End/UI developer with 5 years of commercial experience
              creating web applications and websites.
            </Typography>
          </Stack>
          <Stack direction="row" justifyContent="center" gap={4}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              target="_blank"
              href="https://drive.google.com/file/d/1SBh4BzmENvSaGIfiqKJ06_V6e4QgbKOg/view?usp=sharing"
            >
              Resume
            </Button>
            <Button
              component={Link}
              to="/contact"
              variant="contained"
              color="secondary"
              size="large"
            >
              Contact
            </Button>
          </Stack>
          <Stack alignItems="start" gap={2} mt={4}>
            <Typography variant="h5">My Skills</Typography>
            <Stack
              direction="row"
              gap={1.8}
              useFlexGap
              flexWrap="wrap"
              alignItems="start"
              justifyContent="flex-start"
            >
              {DevIcons.map((icon) => {
                return (
                  <Chip
                    sx={{ px: 0.8, py: 2, gap: 0.6 }}
                    variant="outlined"
                    size="medium"
                    icon={icon.icon}
                    label={
                      <Typography fontSize={13}>
                        {icon.name.toUpperCase()}
                      </Typography>
                    }
                  />
                );
              })}
            </Stack>
          </Stack>
        </Grid>

        {/* Right Column */}
        <Grid
          item
          xs={12}
          md={5.5}
          sx={{
            height: "100%",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundImage:
              "url(https://static.vecteezy.com/system/resources/previews/027/513/296/original/cute-astronaut-working-on-laptop-cartoon-icon-illustration-science-technology-icon-concept-isolated-premium-flat-cartoon-style-vector.jpg)",
          }}
        ></Grid>
      </Grid>
      <Experience ref={section1Ref} />
      {/* <Project /> */}
      <Contact ref={section1Ref} />
    </Stack>
  );
};

export default Home;
