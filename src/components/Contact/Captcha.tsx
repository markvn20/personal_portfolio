import React, { useState } from "react";
import RefreshIcon from "@mui/icons-material/Refresh";
import {
  IconButton,
  Paper,
  TextField,
  Typography,
  Stack,
  Box,
} from "@mui/material";

interface SimpleCaptchaProps {
  onValidate: (isValid: boolean) => void;
}

type ICaptcha = {
  captcha: string;
  userInput: string;
  setUserInput: React.Dispatch<React.SetStateAction<string>>;
  submitAnswer: (input: string) => void;
  generateCaptcha?: () => void;
};

const noSelectStyle: React.CSSProperties = {
  WebkitUserSelect: "none" /* Safari */,
  msUserSelect: "none" /* IE 10 and IE 11 */,
  userSelect: "none" /* Standard syntax */,
};

const SimpleCaptcha = ({
  captcha,
  userInput,
  setUserInput,
  submitAnswer,
  generateCaptcha,
}: ICaptcha) => {
  const [isValid, setIsValid] = useState<boolean | null>(null);

  return (
    <Box display="flex" justifyContent="center" alignItems="center" padding={2}>
      <Paper
        elevation={3}
        style={{
          padding: "16px",
          maxWidth: "300px", // Adjust the maxWidth as needed
          width: "100%",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            marginBottom: "16px",
            position: "relative",
            "::before": {
              content: '""',
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              height: 2,
              width: 140,
              backgroundColor: "secondary.main",
            },
            "::after": {
              content: '""',
              position: "absolute",
              left: "45%",
              top: "50%",
              transform: "translate(-50%, -50%) rotate(10deg)",
              height: 2,
              width: 100,
              backgroundColor: "secondary.main",
            },
          }}
          style={{ marginBottom: "16px", ...noSelectStyle }}
        >
          {captcha}
        </Typography>
        <Stack direction="row" spacing={2} alignItems="center">
          <TextField
            id="captcha-input"
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            fullWidth
            variant="outlined"
            placeholder="Enter CAPTCHA"
            size="small"
          />
          <IconButton onClick={generateCaptcha} color="primary">
            <RefreshIcon />
          </IconButton>
        </Stack>
        {isValid !== null && (
          <Typography
            variant="body2"
            color={isValid ? "success.main" : "error.main"}
            style={{ marginTop: "16px" }}
          >
            {isValid ? "Correct!" : "Incorrect. Please try again."}
          </Typography>
        )}
      </Paper>
    </Box>
  );
};

export default SimpleCaptcha;
