import React, { ReactElement } from "react";
import { Typography, Box, Stack, Chip, List, ListItem } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import { grey } from "@mui/material/colors";

type IExperienceSection = {
  experience?: {
    year?: string;
    title?: string;
    keyFocus?: string[];
    description?: string[];
  };
  index: number;
};

const ExperienceSection = ({ experience, index }: IExperienceSection) => {
  return (
    <Stack textAlign="left" key={index} direction="row" gap={5} mb={6}>
      <Typography textAlign="right" typography="h4">
        {experience?.year}
      </Typography>
      <Stack alignItems="center" gap={1.5}>
        <CircleIcon color="secondary" />
        <Box height="100%" width={2} sx={{ backgroundColor: grey[400] }}></Box>
      </Stack>
      <Stack direction="column" textAlign="left" gap={1} flex={1}>
        <Typography variant="h4">Front End Developer</Typography>
        <Stack direction="row" alignItems="center" gap={1.6}>
          <Typography variant="h6">Key Focus: </Typography>
          <Stack direction="row" gap={1} alignItems="center">
            {experience?.keyFocus.map((focus) => {
              return (
                <Chip
                  label={focus}
                  color="primary"
                  variant="outlined"
                  size="small"
                />
              );
            })}
          </Stack>
        </Stack>
        <Typography textAlign="left" flex={1}>
          return (
          <List sx={{ listStyleType: "disc", px: 4 }}>
            {experience.description.map((copy) => {
              return <ListItem sx={{ display: "list-item" }}>copy</ListItem>;
            })}
          </List>
          )
        </Typography>
      </Stack>
    </Stack>
  );
};

export default ExperienceSection;
