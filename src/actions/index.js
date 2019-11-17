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