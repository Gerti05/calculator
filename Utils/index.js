import { applyMiddleware, createStore } from "redux";
import { middlewares } from "./../src/createStore";
import Reducer from "./../src/reducers/index.js";

export const findByTestAtrr = (component, attr) => {
    const wrapper = component.find(`[data-test="${attr}"]`);
    return wrapper;
}

export const testStore = (initialState) => {
    const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
    return createStoreWithMiddleware(Reducer, initialState);
}