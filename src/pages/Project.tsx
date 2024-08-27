import { Stack, Typography } from "@mui/material";
import React from "react";
import ProjectRow from "../components/ProjectRow";

const Project = () => {
  return (
    <Stack alignItems="start" mt={8}>
      <Typography variant="h2">Projects</Typography>
      <Stack gap={2}>
        <ProjectRow
          imageSrc="https://via.placeholder.com/600x400"
          content="This is a description of the project. It includes key details and highlights."
          reverse={false}
        />
        <ProjectRow
          imageSrc="https://via.placeholder.com/600x400"
          content="Another project description with its own unique details and points of interest."
          reverse={true}
        />
        <ProjectRow
          imageSrc="https://via.placeholder.com/600x400"
          content="Yet another project description. Continue to add more rows as needed."
          reverse={false}
        />
      </Stack>
    </Stack>
  );
};

export default Project;
