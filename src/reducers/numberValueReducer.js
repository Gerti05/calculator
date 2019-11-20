export default (
  state = {
    stack: ["0"],
    stack2: ["0"],
    operations: [],
    submitted: ["0"],
    inputState: "replace",
    isNegative: false
  },
  action
) => {
  switch (action.type) {
    case "NUMBER_VALUE":
      if (state.inputState === "append") {
        console.log("i");
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
        action.payload !== "0" &&
        action.payload !== "."
      ) {
        console.log("ge");
        return {
          stack: [action.payload, ...state.stack.slice(1)],
          inputState: "append",
          isNegative: state.isNegative
        };
      } else if (state.inputState === "replace" && action.payload === "0") {
        console.log("gerti");
        return {
          stack: [(state.stack[0] = "0"), ...state.stack.slice(1)],
          inputState: "replace",
          isNegative: state.isNegative
        };
      } else if (
        state.inputState === "replace" &&
        state.stack[0] === "0" &&
        action.payload === "."
      ) {
        console.log("g");
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
        console.log("f");
        return {
          stack: [
            action.payload + (state.stack[0] || "0"),
            ...state.stack.slice(1)
          ],
          inputState: "append",
          isNegative: true
        };
      } else if (state.inputState === "append" && state.isNegative) {
        console.log("e");
        return {
          stack: [state.stack[0].slice(1), ...state.stack.slice(1)],
          inputState: "append",
          isNegative: false
        };
      }else if (state.inputState === "replace" && !state.isNegative) {
        console.log("f");
        return {
          stack: [
            action.payload + (state.stack[0] || "0"),
            ...state.stack.slice(1)
          ],
          inputState: "replace",
          isNegative: true
        };
      } else if (state.inputState === "replace" && state.isNegative) {
        console.log("e");
        return {
          stack: [state.stack[0].slice(1), ...state.stack.slice(1)],
          inputState: "replace",
          isNegative: false
        };
      }
      break;
    case "CLEAR":
      return {
        stack: [(state.stack[0] = "0"), ...state.stack.slice(1)],
        inputState: "replace",
        isNegative: false
      };
    case "BACKSPACE":
      if (state.stack[0].length > 1 && state.isNegative === false) {
        console.log("d");
        return {
          stack: [
            state.stack[0].slice(0, state.stack[0].length - 1),
            ...state.stack.slice(1)
          ],
          inputState: "append",
          isNegative: state.isNegative
        };
      } else if (state.stack[0].length === 1 && state.isNegative === false) {
        console.log("c");
        return {
          stack: [(state.stack[0] = "0"), ...state.stack.slice(1)],
          inputState: "replace",
          isNegative: false
        };
      } else if (state.stack[0].length > 2 && state.isNegative === true) {
        console.log("b");
        return {
          stack: [
            state.stack[0].slice(0, state.stack[0].length - 1),
            ...state.stack.slice(1)
          ],
          inputState: "append",
          isNegative: state.isNegative
        };
      } else if (state.stack[0].length === 2 && state.isNegative === true) {
        console.log("a");
        return {
          stack: [(state.stack[0] = "0"), ...state.stack.slice(1)],
          inputState: "replace",
          isNegative: false
        };
      }
      break;
    case "SUBMIT":
      if (state.stack2 === undefined) {
        console.log(state.stack2)
        return {
          submitted: [state.stack[0], ...state.stack.slice(1)],
          stack: [state.stack[0], ...state.stack.slice(1)],
          stack2: ["0"],
          inputState: "replace",
          isNegative: false
        };
      }
      break;
    default:
      return state;
  }
};
