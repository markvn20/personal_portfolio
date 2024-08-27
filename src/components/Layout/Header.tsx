import { Stack, Button, Grid } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../images/main-logo.png";
import { LayoutWrapProps } from "./Layout";

const activeStyle = {
  borderBottom: "1px solid black",
  borderRadius: 0,
};

const Header = ({ maxWidth }: LayoutWrapProps) => {
  const location = useLocation().pathname;
  console.log(location);
  return (
    <Grid
      container
      justifyContent="center"
      position="sticky"
      top={0}
      sx={{ backgroundColor: "#f6f7eb" }}
      zIndex={4}
      boxShadow="0px 0px 4px 0px #ccc"
    >
      <Stack
        p={4}
        direction="row"
        justifyContent="space-between"
        maxWidth={maxWidth}
        width="100%"
      >
        <Link to="/">
          <img
            style={{ width: "170px", filter: "grayscale(100%)" }}
            src={Logo}
          />
        </Link>
        <Stack direction="row" gap={2}>
          <Button
            sx={location === "/home" ? activeStyle : {}}
            component={Link}
            to="#home"
            variant="text"
          >
            Home
          </Button>
          <Button
            sx={location === "/about" ? activeStyle : {}}
            component={Link}
            to="#experience"
            variant="text"
          >
            About
          </Button>
          <Button
            sx={location === "/project" ? activeStyle : {}}
            component={Link}
            to="#project"
            variant="text"
          >
            Project
          </Button>
          <Button
            color="secondary"
            component={Link}
            to="/contact"
            variant="outlined"
          >
            Contact
          </Button>
        </Stack>
      </Stack>
    </Grid>
  );
};

export default Header;
