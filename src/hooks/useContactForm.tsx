import { useState } from "react";
import emailjs from "@emailjs/browser";
import useGenerateCaptcha from "./useGenerateCaptcha"; // Adjust the import based on your file structure

interface FormState {
  name: string;
  email_from: string;
  message: string;
}

const useContactForm = () => {
  const { userInput, submitAnswer } = useGenerateCaptcha();

  const [form, setForm] = useState<FormState>({
    name: "",
    email_from: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [open, setOpen] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isCorrect = submitAnswer(userInput);
    if (isCorrect) {
      try {
        const res = await emailjs.sendForm(
          "service_r23r6xe",
          "template_ebugade",
          e.target as HTMLFormElement,
          "J6IlG3zxQGEG2-Y07"
        );
        if (res.status === 200) {
          setSubmitted(true);
          setOpen(true);
          resetForm();
          setTimeout(() => {
            setSubmitted(false);
            setOpen(false);
          }, 5000);
        }
      } catch (err) {
        alert("An error occurred: " + err);
      }
    } else {
      alert("Incorrect CAPTCHA. Please try again.");
    }
  };

  return {
    form,
    submitted,
    open,
    userInput,
    handleChange,
    handleSubmit,
    setOpen,
  };
};

export default useContactForm;
