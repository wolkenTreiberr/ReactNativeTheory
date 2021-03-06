import {useState} from 'react';

const useEmail = (initialValue: string) => {
  const [email, setState] = useState<string>(initialValue);
  const [emailError, setError] = useState<null | string>(null);

  const validateEmail = (validatedValue: string) => {
    const regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (validatedValue === '') {
      setError(null);
    } else if (regEx.test(validatedValue)) {
      setError(null);
    } else {
      setError(
        "Invalid email address. Email must contain only latin letters, numbers, '@' and '.'",
      );
    }
  };

  const setEmail = (value: string) => {
    setState(value);

    validateEmail(value);
  };

  return {email, emailError, setEmail};
};

export default useEmail;
