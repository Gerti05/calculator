export default (state = { stack: ["0"], inputState: "replace", isNegative: false }, action) => {
  switch (action.type) {
    case "NUMBER_VALUE":
      if (state.inputState === "append") {
        return {
          stack: [
            (state.stack[0] || "0") + action.payload,
            ...state.stack.slice(1)
          ],
          inputState: "append",
          isNegative: state.isNegative
        };
      } else if (
        state.inputState === "replace" &&
        state.stack[0] === "0" &&
        action.payload !== "."
      ) {
        return {
          stack: [action.payload, ...state.stack.slice(1)],
          inputState: "append",
          isNegative: state.isNegative
        };
      } else if (
        state.inputState === "replace" &&
        state.stack[0] === "0" &&
        action.payload === "."
      ) {
        return {
          stack: [
            (state.stack[0] || ".") + action.payload,
            ...state.stack.slice(1)
          ],
          inputState: "append",
          isNegative: state.isNegative
        };
      }
      break;
    case "NEGATIVE":
      if (state.inputState === "append" && !state.isNegative) {
        return {
          stack: [action.payload + (state.stack[0] || "0"), ...state.stack.slice(1)],
          inputState: "append",
          isNegative: true
        };
      } else if (state.inputState === "append" && state.isNegative) {
        return {
          stack: [state.stack[0].slice(1), ...state.stack.slice(1)],
          inputState: "append",
          isNegative: false
        };
      } 
      break;
    default:
      return state;
  }
};
