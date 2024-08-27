import React from "react";
import {
  Grid,
  Typography,
  Box,
  Divider,
  Stack,
  Chip,
  List,
  ListItem,
} from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import { grey } from "@mui/material/colors";

// Sample data for experiences
const experiences = [
  {
    title: "UI/Front End Developer",
    year: "2022 - 2024",
    description: [
      `Developed an application for product metering, weighing, and dynamic shipping label generation tailored to carrier and weight parameters. Utilized Chrome's HID device and shipping APIs, successfully replacing an outdated warehouse system and cutting annual licensing costs.`,
      `Designed and implemented a user-friendly drag-and-drop email editor with React and MJML, enabling users to create responsive emails without coding skills and eliminating compatibility issues across email clients.`,
      `Created touchpad devices using React and Node.js to simulate keypresses for embroidery machines, facilitating file retrieval and tracking user input. This setup improved issue detection and reduced costs through early error prevention.`,
      `Migrated frontend applications from Create React App (CRA) to Vite,
          resulting in improved build times and a transition away from
          deprecated tools.`,
      `Migrated frontend applications from Create React App (CRA) to Vite, resulting in faster build times and a transition away from deprecated tools.`,
      `Used various UI methodologies to design efficient wireframes and prototypes, ensuring rapid updates and clear communication. Employed Figma and plugins to adhere to Material UI guidelines.`,
    ],
    keyFocus: ["React", "Web Application", "UI/UX", "Material UI", "Figma"],
  },
  {
    title: "Front End Developer",
    year: "2018 - 2022",
    description: [
      `Implemented automated build and deployment processes using GitHub Actions and environment/repository variables, streamlining production and staging deployments. Introduced status checks for pull requests to identify and resolve build issues, dependency problems, and missing variables.`,
      `Designed and developed a secure login system and hub page for internal applications, using JSON Web Tokens (JWTs) for authentication and request validation`,
      `Managed and maintained over 200 partner sites, ensuring their functionality and relevance. Revamped site management procedures to improve efficiency, reducing the need for manual updates across all sites.`,
    ],
    keyFocus: ["React", "Web Application", "NodeJS", "Express", "JWT", "EC2"],
  },
];

const Experience: React.FC = () => {
  return (
    <Grid
      id="experience"
      container
      direction="column"
      mt={10}
      sx={{ justifyItem: "center", alignItems: "center" }}
    >
      {/* Typography on top */}
      <Grid item xs={12} width="100%">
        <Typography textAlign="center" variant="h2" mb={4}>
          Experience
        </Typography>
      </Grid>
      <Grid item xs={12} md={12} sx={{ maxWidth: "900px !important" }}>
        {experiences.map((experience, index) => (
          <Stack textAlign="left" key={index} direction="row" gap={5} mb={6}>
            <Typography textAlign="right" typography="h4">
              {experience.year}
            </Typography>
            <Stack alignItems="center" gap={1.5}>
              <CircleIcon color="secondary" />
              <Box
                height="100%"
                width={2}
                sx={{ backgroundColor: grey[400] }}
              ></Box>
            </Stack>
            <Stack direction="column" textAlign="left" gap={1} flex={1}>
              <Typography variant="h4">Front End Developer</Typography>
              <Stack direction="row" alignItems="center" gap={1.6}>
                <Typography variant="h6">Key Focus: </Typography>
                <Stack direction="row" gap={1} alignItems="center">
                  {experience.keyFocus.map((focus) => {
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
                <List sx={{ listStyleType: "disc", px: 4 }}>
                  {experience.description.map((copy) => {
                    return (
                      <ListItem sx={{ display: "list-item" }}>{copy}</ListItem>
                    );
                  })}
                </List>
              </Typography>
            </Stack>
          </Stack>
        ))}
      </Grid>
    </Grid>
  );
};

export default Experience;
