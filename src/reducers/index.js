import { combineReducers } from "redux";
import NumberValueReducer from "./numberValueReducer";

export default combineReducers({
  numberValue: NumberValueReducer
});