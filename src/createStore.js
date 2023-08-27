import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import Reducers from "./reducers/index.js";

export const middleware = [ReduxThunk];

export const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);

export const store = createStoreWithMiddleware(Reducers);