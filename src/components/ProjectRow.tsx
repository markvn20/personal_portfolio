// src/components/ProjectRow.tsx
import React from "react";
import {
  Box,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { styled } from "@mui/system";

interface ProjectRowProps {
  imageSrc: string;
  content: string;
  reverse?: boolean;
}

const ImageBox = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "auto",
  [theme.breakpoints.up("md")]: {
    flex: 1,
  },
}));

const ContentBox = styled(Box)(({ theme }) => ({
  width: "100%",
  [theme.breakpoints.up("md")]: {
    flex: 1,
  },
}));

const ProjectRow: React.FC<ProjectRowProps> = ({
  imageSrc,
  content,
  reverse = false,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      display="flex"
      flexDirection={isMobile ? "column" : reverse ? "row-reverse" : "row"}
      alignItems="center"
      p={2}
      my={2}
      sx={{ textAlign: isMobile ? "center" : "left" }}
    >
      <ImageBox
        component="img"
        src={imageSrc}
        alt="Project Image"
        sx={{ maxWidth: "100%", height: "auto" }}
      />
      <ContentBox>
        <Typography variant="h5" gutterBottom>
          Project Title
        </Typography>
        <Typography variant="body1" paragraph>
          {content}
        </Typography>
        <Button variant="contained" color="primary">
          Learn More
        </Button>
      </ContentBox>
    </Box>
  );
};

export default ProjectRow;
