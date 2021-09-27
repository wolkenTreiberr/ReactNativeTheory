import {useState} from 'react';

const useName = (initialValue: string) => {
  const [name, setState] = useState<string>(initialValue);
  const [nameError, setError] = useState<null | string>(null);

  const validateName = (validatedValue: string) => {
    const regEx = /^([a-zA-Z][a-zA-Z]{2,20})?$/;

    if (validatedValue === '') {
      setError(null);
    } else if (regEx.test(validatedValue)) {
      setError(null);
    } else {
      setError(
        'Invalid user name. Nmae must contain only latin letters and numbers',
      );
    }
  };

  const setName = (value: string) => {
    setState(value);

    validateName(value);
  };

  return [name, nameError, setName] as const;
};

export default useName;
