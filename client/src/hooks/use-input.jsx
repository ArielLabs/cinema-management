import { useState } from "react";

const useInput = (initValue, validateFunc) => {
  const [enteredValue, setEnteredValue] = useState(initValue);
  const [isTouched, setIsTouched] = useState(false);

  const updateValue = (event) => {
    if(typeof event === 'object'){
      setEnteredValue(event.target.value);
    }else{
      setEnteredValue(event);
    }
  };

  const valueInputBlurHandler = () => {
    setIsTouched(true);
  };

  const validValue = validateFunc(enteredValue);
  const hasError = isTouched && !validValue;

  return {
    value: enteredValue,
    valueInputChangedHandler: updateValue,
    valueInputBlurHandler: valueInputBlurHandler,
    validValue: validValue,
    error: hasError,
  };
};

export default useInput;
