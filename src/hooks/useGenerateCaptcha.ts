import { useState, useCallback } from 'react';

// Helper function to generate a random string of specified length
const generateRandomString = (length: number): string => {
  const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let randomString = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    randomString += charset[randomIndex];
  }
  return randomString;
};

const useGenerateCaptcha = () => {
  const [captcha, setCaptcha] = useState<string>('');
  const [userInput, setUserInput] = useState<string>('');
  const [isValid, setIsValid] = useState<boolean | null>(null);

  // Generate a new random CAPTCHA string
  const generateCaptcha = useCallback(() => {
    console.log("Sd")
    const newCaptcha = generateRandomString(4);
    setCaptcha(newCaptcha);
    setUserInput('');
    setIsValid(null);
  }, []);

  // Validate the user input against the CAPTCHA
  const validateCaptcha = useCallback(() => {
    if (userInput === captcha) {
      setIsValid(true);
      return true;
    } else {
      setIsValid(false);
      return false;
    }
  }, [userInput, captcha]);

  // Call this function to submit the answer
  const submitAnswer = (input: string) => {
    setUserInput(input);
    console.log(validateCaptcha())
    return validateCaptcha();
  };

  // Initialize CAPTCHA when hook is used
  useState(() => {
    generateCaptcha();
  });

  return {
    captcha,
    userInput,
    setUserInput,
    submitAnswer,
    isValid,
    generateCaptcha
  };
};

export default useGenerateCaptcha;
