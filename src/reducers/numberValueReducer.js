export default (state = { stack: ["0"], inputState: "replace" }, action) => {
  switch (action.type) {
    case "NUMBER_VALUE":
      if (state.inputState === "append") {
        return {
          stack: [
            (state.stack[0] || "0") + action.payload,
            ...state.stack.slice(1)
          ],
          inputState: "append"
        };
      } else if (
        state.inputState === "replace" &&
        state.stack[0] === "0" && action.payload !== "."
      ) {
        return {
          stack: [action.payload, ...state.stack.slice(1)],
          inputState: "append"
        };
      } else if (
        state.inputState === "replace" &&
        state.stack[0] === "0" && action.payload === "."
      ) {
        return {
          stack: [
            (state.stack[0] || ".") + action.payload,
            ...state.stack.slice(1)
          ],
          inputState: "append"
        };
      }
      break;
    default:
      return state;
  }
};
