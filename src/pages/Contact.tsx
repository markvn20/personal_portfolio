import React, { useState } from "react";
import {
  TextField,
  Button,
  Grid,
  Typography,
  Stack,
  Snackbar,
  Paper,
} from "@mui/material";
import emailjs from "@emailjs/browser";
import Captcha from "../components/Contact/Captcha";
import useGenerateCaptcha from "../hooks/useGenerateCaptcha";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import SnackBar from "../components/Common/Snackbar";
// Define the types for form state
interface FormState {
  name: string;
  email_from: string;
  message: string;
}

const Contact: React.FC = () => {
  const {
    captcha,
    userInput,
    setUserInput,
    submitAnswer,
    isValid,
    generateCaptcha,
  } = useGenerateCaptcha();
  const [form, setForm] = useState<FormState>({
    name: "",
    email_from: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [open, setOpen] = useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setForm({
      name: "",
      email_from: "",
      message: "",
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isCorrect = submitAnswer(userInput);
    if (isCorrect && open) {
      setOpen(false);

      emailjs
        .sendForm(
          import.meta.env.VITE_Token_One,
          "template_ebugade",
          e.target,
          import.meta.env.VITE_Token_Two
        )
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            setSubmitted(true);
            resetForm();
            generateCaptcha();
            setTimeout(() => {
              setSubmitted(false);
              setOpen(true);
            }, 5000);
          }
        })
        .catch((err) => {
          alert(err);
        });
    } else {
      alert("Incorrect CAPTCHA. Please try again.");
    }
    console.log("Form submitted:", form);
  };

  return (
    <Grid
      container
      spacing={2}
      justifyContent="center"
      alignItems="center"
      pt={4}
    >
      <Grid item xs={12} sm={8} md={6}>
        {submitted && (
          <SnackBar setOpen={setOpen} open={submitted}>
            <CheckCircleIcon sx={{ color: "success.light", fontSize: 50 }} />
            <Stack gap={0.6}>
              <Typography variant="h4">Thank you!</Typography>
              <Typography variant="h6">Your message has been sent.</Typography>
              <Typography variant="h6">
                I will be in touch as soon as I can.
              </Typography>
            </Stack>
          </SnackBar>
        )}

        <Typography
          mb={6}
          textAlign="left"
          variant="h2"
          gutterBottom
          align="center"
        >
          Let's start a <br />
          project together.
        </Typography>
        <form onSubmit={handleSubmit}>
          <Stack gap={3}>
            <TextField
              label="Name"
              name="name"
              variant="outlined"
              fullWidth
              value={form.name}
              onChange={handleChange}
              required
            />
            <TextField
              label="Email"
              name="email_from"
              type="email"
              variant="outlined"
              fullWidth
              value={form.email_from}
              onChange={handleChange}
              required
            />
            <TextField
              label="Message"
              name="message"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              value={form.message}
              onChange={handleChange}
              required
            />
          </Stack>
          <Captcha
            submitAnswer={submitAnswer}
            generateCaptcha={generateCaptcha}
            captcha={captcha}
            userInput={userInput}
            setUserInput={setUserInput}
          />
          <Button
            sx={{ mt: 4 }}
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
            disabled={userInput.length != 0 || open ? false : true}
          >
            Send
          </Button>
        </form>
        {isValid}
      </Grid>
    </Grid>
  );
};

export default Contact;
