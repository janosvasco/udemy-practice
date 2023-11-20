import React, { useState } from "react";

export function useInput(defaultValue) {
  const [enteredValue, setEnteredValue] = useState(defaultValue);

  const [didEdit, setDidEdit] = useState(false);

  function handleInputChange(e) {
    setEnteredValue(e.target.value);
    setDidEdit(false);
  }

  function handleInputBlur() {
    setDidEdit(true);
  }

  return {
    value: enteredValue,
    handleInputChange,
    handleInputBlur,
  };
}
