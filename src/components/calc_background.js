import React from "react";
import CalcButtons from "./calc_buttons";
import CalcDisplay from "./calc_display";

const Calc_Background = () => {
  return (
      <div className="background">
        <CalcDisplay />
        <CalcButtons />
      </div>
  );
};

export default Calc_Background;
