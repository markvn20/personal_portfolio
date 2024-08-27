import * as React from "react";
import Box from "@mui/material/Box";
import Snackbar, { SnackbarCloseReason } from "@mui/material/Snackbar";

type ISnackbar = {
  open: boolean;
  setOpen: (open: boolean) => void;
  children: React.ReactNode;
};

type ISnackbarState = {
  vertical: "top" | "bottom";
  horizontal: "left" | "center" | "right";
};

const SnackBar: React.FC<ISnackbar> = ({
  children,
  open,
  setOpen,
}: ISnackbar) => {
  const [state, setState] = React.useState<ISnackbarState>({
    vertical: "bottom",
    horizontal: "left",
  });
  const { vertical, horizontal } = state;

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Box sx={{ width: 500 }}>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        message={children}
        key={vertical + horizontal}
      />
    </Box>
  );
};

export default SnackBar;
