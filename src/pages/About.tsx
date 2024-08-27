import React from "react";
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
} from "@mui/material";

import HtmlIcon from "@mui/icons-material/Html";
import CssIcon from "@mui/icons-material/Css";
import JavascriptIcon from "@mui/icons-material/Javascript";

const About = () => {
  return (
    <Grid container sx={{ height: "calc(100vh - 131px)" }}>
      {/* Left Column */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          height: "100%",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage:
            "url(https://static.vecteezy.com/system/resources/previews/027/513/296/original/cute-astronaut-working-on-laptop-cartoon-icon-illustration-science-technology-icon-concept-isolated-premium-flat-cartoon-style-vector.jpg)",
        }}
      ></Grid>
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
        }}
        gap={6}
      >
        <Stack justifyContent="start" alignItems="start" px={6} py={3} gap={2}>
          <Typography variant="h2">About Me</Typography>
          <Typography textAlign="left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
        </Stack>
      </Grid>

      {/* Right Column */}
    </Grid>
  );
};

export default About;
