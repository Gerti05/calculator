//@ts-check
export default (
  state = {
    stack: ["0"],
    stack2: null,
    operations: null,
    inputState: "replace",
    isNegative: false,
    submitted: false,
    prevOperation: null
  },
  action
) => {
  switch (action.type) {
    case "NUMBER_VALUE":
      if (state.inputState === "append") {
        console.log("1");
        return {
          stack: [
            (state.stack[0] || "0") + action.payload,
            ...state.stack.slice(1)
          ],
          stack2: state.stack2,
          operations: state.operations,
          inputState: "append",
          isNegative: state.isNegative,
          submitted: false,
          prevOperation: null
        };
      } else if (
        state.inputState === "replace" &&
        action.payload !== "0" &&
        action.payload !== "."
      ) {
        console.log("2");
        return {
          stack: [action.payload, ...state.stack.slice(1)],
          stack2: state.stack2,
          operations: state.operations,
          inputState: "append",
          isNegative: state.isNegative,
          submitted: false,
          prevOperation: null
        };
      } else if (state.inputState === "replace" && action.payload === "0") {
        console.log("3");
        return {
          stack: [(state.stack[0] = "0"), ...state.stack.slice(1)],
          stack2: state.stack2,
          operations: state.operations,
          inputState: "replace",
          isNegative: state.isNegative,
          submitted: false,
          prevOperation: null
        };
      } else if (
        state.inputState === "replace" &&
        state.stack[0] === "0" &&
        action.payload === "."
      ) {
        console.log("4");
        return {
          stack: [
            (state.stack[0] || ".") + action.payload,
            ...state.stack.slice(1)
          ],
          stack2: state.stack2,
          operations: state.operations,
          inputState: "append",
          isNegative: state.isNegative,
          submitted: false,
          prevOperation: null
        };
      }
      break;
    case "NEGATIVE":
      if (state.inputState === "append" && !state.isNegative) {
        console.log("5");
        return {
          stack: [
            action.payload + (state.stack[0] || "0"),
            ...state.stack.slice(1)
          ],
          stack2: state.stack2,
          operations: state.operations,
          inputState: "append",
          isNegative: true,
          submitted: false,
          prevOperation: null
        };
      } else if (state.inputState === "append" && state.isNegative) {
        console.log("6");
        return {
          stack: [state.stack[0].slice(1), ...state.stack.slice(1)],
          stack2: state.stack2,
          operations: state.operations,
          inputState: "append",
          isNegative: false,
          submitted: false,
          prevOperation: null
        };
      } else if (state.inputState === "replace" && !state.isNegative) {
        console.log("7");
        return {
          stack: [
            action.payload + (state.stack[0] || "0"),
            ...state.stack.slice(1)
          ],
          stack2: state.stack2,
          operations: state.operations,
          inputState: "replace",
          isNegative: true,
          submitted: false,
          prevOperation: null
        };
      } else if (state.inputState === "replace" && state.isNegative) {
        console.log("8");
        return {
          stack: [state.stack[0].slice(1), ...state.stack.slice(1)],
          stack2: state.stack2,
          operations: state.operations,
          inputState: "replace",
          isNegative: false,
          submitted: false,
          prevOperation: null
        };
      }
      break;
    case "OPERATIONS":
      if (state.operations === null) {
        console.log("9");
        return {
          stack2: parseFloat(state.stack[0]),
          stack: state.stack,
          operations: action.payload,
          inputState: "replace",
          isNegative: false,
          submitted: false,
          prevOperation: null
        };
      } else if (state.operations !== null && state.inputState === "replace") {
        console.log("10");
        return {
          stack: state.stack,
          stack2: state.stack2,
          prevOperation: state.operations,
          operations: action.payload,
          inputState: "replace",
          isNegative: false,
          submitted: state.submitted
        };
      } else if (
        state.operations !== null &&
        state.inputState === "append" &&
        state.operations === "+"
      ) {
        console.log("11");
        return {
          stack2: state.stack2 + parseFloat(state.stack[0]),
          stack: state.stack,
          operations: action.payload,
          inputState: "replace",
          isNegative: false,
          submitted: state.submitted,
          prevOperation: null
        };
      } else if (
        state.operations !== null &&
        state.inputState === "append" &&
        state.operations === "-"
      ) {
        console.log("12");
        return {
          stack2: state.stack2 - parseFloat(state.stack[0]),
          stack: state.stack,
          operations: action.payload,
          inputState: "replace",
          isNegative: false,
          submitted: state.submitted,
          prevOperation: null
        };
      } else if (
        state.operations !== null &&
        state.inputState === "append" &&
        state.operations === "/"
      ) {
        console.log("13");
        return {
          stack2: state.stack2 / parseFloat(state.stack[0]),
          stack: state.stack,
          operations: action.payload,
          inputState: "replace",
          isNegative: false,
          submitted: state.submitted,
          prevOperation: null
        };
      } else if (
        state.operations !== null &&
        state.inputState === "append" &&
        state.operations === "*"
      ) {
        console.log("14");
        return {
          stack2: state.stack2 * parseFloat(state.stack[0]),
          stack: state.stack,
          operations: action.payload,
          inputState: "replace",
          isNegative: false,
          submitted: state.submitted,
          prevOperation: null
        };
      }
      break;
    case "CLEAR":
      return {
        stack: ["0"],
        stack2: null,
        operations: null,
        inputState: "replace",
        isNegative: false,
        submitted: false,
        prevOperation: null
      };
    case "BACKSPACE":
      if (
        state.stack[0].length > 1 &&
        state.stack[0] !== "-" &&
        state.isNegative === false &&
        state.submitted === false
      ) {
        console.log("15");
        return {
          stack: [
            state.stack[0].slice(0, state.stack[0].length - 1),
            ...state.stack.slice(1)
          ],
          stack2: state.stack2,
          operations: state.operations,
          inputState: "append",
          isNegative: state.isNegative,
          submitted: false,
          prevOperation: null
        };
      } else if (
        state.stack[0].length > 1 &&
        state.isNegative === false &&
        state.submitted === true
      ) {
        console.log("15.5");
        return {
          stack: [(state.stack[0] = "0"), ...state.stack.slice(1)],
          stack2: null,
          operations: null,
          inputState: "replace",
          isNegative: state.isNegative,
          submitted: false,
          prevOperation: null
        };
      } else if (
        state.stack[0].length === 1 &&
        state.isNegative === false &&
        state.submitted === false
      ) {
        console.log("16");
        return {
          stack: [(state.stack[0] = "0"), ...state.stack.slice(1)],
          stack2: state.stack2,
          operations: state.operations,
          inputState: "replace",
          isNegative: false,
          submitted: false,
          prevOperation: null
        };
      } else if (
        state.stack[0].length === 1 &&
        state.isNegative === true &&
        state.submitted === true
      ) {
        console.log("16.5");
        return {
          stack: [(state.stack[0] = "0"), ...state.stack.slice(1)],
          stack2: null,
          operations: null,
          inputState: "replace",
          isNegative: false,
          submitted: false,
          prevOperation: null
        };
      } else if (
        state.stack[0].length === 1 &&
        state.isNegative === false &&
        state.submitted === true
      ) {
        console.log("16.7");
        return {
          stack: [(state.stack[0] = "0"), ...state.stack.slice(1)],
          stack2: null,
          operations: null,
          inputState: "replace",
          isNegative: false,
          submitted: false,
          prevOperation: null
        };
      } else if (
        state.stack[0].length === 1 &&
        state.isNegative === true &&
        state.submitted === false
      ) {
        console.log("16.6");
        return {
          stack2: state.stack2,
          stack: [(state.stack[0] = "0"), ...state.stack.slice(1)],
          operations: state.operations,
          inputState: "replace",
          isNegative: false,
          submitted: false,
          prevOperation: null
        };
      } else if (
        state.stack[0].length > 2 &&
        state.isNegative === true &&
        state.submitted === false
      ) {
        console.log("17");
        return {
          stack: [
            state.stack[0].slice(0, state.stack[0].length - 1),
            ...state.stack.slice(1)
          ],
          stack2: state.stack2,
          operations: state.operations,
          inputState: "append",
          isNegative: state.isNegative,
          submitted: false,
          prevOperation: null
        };
      } else if (
        state.stack[0].length === 2 &&
        state.isNegative === true &&
        state.submitted === false
      ) {
        console.log("18");
        return {
          stack: [(state.stack[0] = "0"), ...state.stack.slice(1)],
          stack2: state.stack2,
          operations: state.operations,
          inputState: "replace",
          isNegative: false,
          submitted: false,
          prevOperation: null
        };
      } else if (
        state.stack[0].length === 2 &&
        state.isNegative === true &&
        state.submitted === true
      ) {
        console.log("18.5");
        return {
          stack: [(state.stack[0] = "0"), ...state.stack.slice(1)],
          stack2: null,
          operations: null,
          inputState: "replace",
          isNegative: false,
          submitted: false,
          prevOperation: null
        };
      }
      break;
    case "SUBMIT":
      if (state.submitted === false && state.stack2 === null) {
        console.log("19");
        return {
          stack2: parseFloat(state.stack[0]),
          stack: state.stack,
          operations: state.operations,
          inputState: "replace",
<<<<<<< HEAD
          isNegative: parseFloat(state.stack[0]) >= 0 ? false : true,
=======
          isNegative: parseFloat(state.stack) >= 0 ? false : true,
>>>>>>> 88b0ed84e86224d80bf44fa5af92daa161bb1139
          submitted: true,
          prevOperation: null
        };
      } else if (
        state.stack2 !== null &&
        state.operations === "+" &&
        state.submitted === false
      ) {
        console.log("20");
        return {
          stack2: state.stack2 + parseFloat(state.stack[0]),
          stack: state.stack,
          operations: state.operations,
          inputState: "replace",
          isNegative: state.stack2 >= 0 ? false : true,
          submitted: true,
          prevOperation: null
        };
      } else if (
        state.stack2 !== null &&
        state.operations === "-" &&
        state.submitted === false
      ) {
        console.log("21");
        return {
          stack2: state.stack2 - parseFloat(state.stack[0]),
          stack: state.stack,
          operations: state.operations,
          inputState: "replace",
          isNegative: state.stack2 >= 0 ? false : true,
          submitted: true,
          prevOperation: null
        };
      } else if (
        state.stack2 !== null &&
        state.operations === "*" &&
        state.submitted === false
      ) {
        console.log("22");
        return {
          stack2: state.stack2 * parseFloat(state.stack[0]),
          stack: state.stack,
          operations: state.operations,
          inputState: "replace",
          isNegative: state.stack2 >= 0 ? false : true,
          submitted: true,
          prevOperation: null
        };
      } else if (
        state.stack2 !== null &&
        state.operations === "/" &&
        state.submitted === false
      ) {
        console.log("23");
        return {
          stack2: state.stack2 / parseFloat(state.stack[0]),
          stack: state.stack,
          operations: state.operations,
          inputState: "replace",
          isNegative: state.stack2 >= 0 ? false : true,
          submitted: true,
          prevOperation: null
        };
      } else if (
        state.stack2 !== null &&
        state.operations === "/" &&
        state.submitted === true
      ) {
        console.log("24");
        return {
          stack2: state.stack2 / parseFloat(state.stack[0]),
          stack: state.stack,
          operations: state.operations,
          inputState: "replace",
          isNegative: state.stack2 >= 0 ? false : true,
          submitted: false,
          prevOperation: null
        };
      } else if (
        state.stack2 !== null &&
        state.operations === "*" &&
        state.submitted === true
      ) {
        console.log("25");
        return {
          stack: state.stack,
          stack2: state.stack2 * parseFloat(state.stack[0]),
          operations: state.operations,
          inputState: "replace",
          isNegative: state.stack2 >= 0 ? false : true,
          submitted: false,
          prevOperation: null
        };
      } else if (
        state.stack2 !== null &&
        state.operations === "+" &&
        state.submitted === true
      ) {
        console.log("26");
        return {
          stack2: state.stack2 + parseFloat(state.stack[0]),
          stack: state.stack,
          operations: state.operations,
          inputState: "replace",
          isNegative: state.stack2 >= 0 ? false : true,
          submitted: false,
          prevOperation: null
        };
      } else if (
        state.stack2 !== null &&
        state.operations === "-" &&
        state.submitted === true
      ) {
        console.log("27");
        return {
          stack2: state.stack2 - parseFloat(state.stack[0]),
          stack: state.stack,
          operations: state.operations,
          inputState: "replace",
          isNegative: state.stack2 >= 0 ? false : true,
          submitted: false,
          prevOperation: null
        };
      } else if (
        state.stack2 !== null &&
        state.operations === null &&
        state.submitted === true
      ) {
        console.log("28");
        return {
          stack2: state.stack2,
          stack: [(state.stack[0] = "0"), ...state.stack.slice(1)],
          operations: state.operations,
          inputState: "replace",
          isNegative: state.isNegative,
          submitted: false,
          prevOperation: null
        };
      } else if (
        state.stack2 !== null &&
        state.operations === null &&
        state.submitted === false
      ) {
        console.log("29");
        return {
          stack2: state.stack2,
          stack: [(state.stack[0] = "0"), ...state.stack.slice(1)],
          operations: state.operations,
          inputState: "replace",
          isNegative: false,
          submitted: true,
          prevOperation: null
        };
      }
      break;
    default:
      return state;
  }
};

