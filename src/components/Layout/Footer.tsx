import { Box, Divider, Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/main-logo.png";
import { LayoutWrapProps } from "./Layout";

const Footer = ({ maxWidth }: LayoutWrapProps) => {
  return (
    <Stack width="100%" alignItems="center" mt={8}>
      <Divider sx={{ width: "100%" }} />
      <Stack
        maxWidth={maxWidth}
        width="100%"
        justifyContent="start"
        alignItems="start"
        py={4}
      >
        <Link to="/">
          <img
            style={{ width: "170px", filter: "grayscale(100%)" }}
            src={Logo}
          />
        </Link>
      </Stack>
    </Stack>
  );
};

export default Footer;
