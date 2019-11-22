export const fetchNumberValue = response => {
  return {
    type: "NUMBER_VALUE",
    payload: response
  };
};

export const fetchNegative = () => {
  return {
    type: "NEGATIVE",
    payload: "-"
  }
}

export const fetchClear = () => {
  return {
    type: "CLEAR"
  }
}

export const fetchBackspace = () => {
  return {
    type: "BACKSPACE"
  }
}

export const fetchSubmit = () => {
  return {
    type: "SUBMIT"
  }
}

export const fetchOperations = response => {
  return {
    type: "OPERATIONS",
    payload: response
  }
}