import React from "react";
import { shallow } from "enzyme";


import { findByTestAtrr, testStore } from "./../../Utils";

import CalcDisplay from "../components/calc_display";

const setUp = (initialState={}) => {
    const store = testStore(initialState);
    const wrapper = shallow(<CalcDisplay store={store} />);
    return wrapper;
}

describe("<CalDisplay />", () => {
  describe("render()", () => {
      let wrapper;
      beforeEach(() => {
        const initialState = {
            state: {
                stack: ["0"],
                stack2: null,
                operations: null,
                inputState: "replace",
                isNegative: false,
                submitted: false,
                prevOperation: null
              }
          }
          wrapper = setUp(initialState);
      })
      
      

    test("It should render without errors.", () => {
      const component = findByTestAtrr(wrapper, "calcDisplayComponent");

      expect(component.length).toBe(1);
    });
  });
});
