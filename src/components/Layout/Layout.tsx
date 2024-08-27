import React from "react";
import {
  Container,
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
} from "@mui/material";
import { CSSProperties } from "@emotion/react";
import Header from "./Header";
import Footer from "./Footer";

export interface LayoutWrapProps {
  children: React.ReactNode;
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl";
  style?: CSSProperties;
}

const LayoutWrap: React.FC<LayoutWrapProps> = ({
  children,
  maxWidth = "lg",
  style,
}) => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        ...style,
      }}
    >
      <Header maxWidth={maxWidth} children={undefined} />
      <Container
        sx={{
          flexGrow: 1,
          padding: "0 !important",
        }}
      >
        {children}
      </Container>
      <Footer maxWidth={maxWidth} children={undefined} />
    </Box>
  );
};

export default LayoutWrap;
