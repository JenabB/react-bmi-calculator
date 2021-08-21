import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Suggestion from "./Suggestion";

const Result = () => {
  const { weight, height, result } = useContext(GlobalContext);

  const bbIdeal = height - 110;
  const bbButuh = bbIdeal - weight;

  return (
    <div>
      {result ? (
        <div>
          <div className="flex justify-center mt-20">
            <div className="bg-blue-300 px-4 text-white rounded-lg mx-4">
              {result}
            </div>
            {result < 18.5 ? (
              <h1>Less weight</h1>
            ) : result >= 18.5 && result <= 22.9 ? (
              <h1>Normal weight</h1>
            ) : result >= 23 && result <= 29.9 ? (
              <h1>Excess weight</h1>
            ) : (
              <h1>Obesity</h1>
            )}
          </div>
          <h1 className="mt-4 text-center">
            Need <b>{bbButuh} Kg</b> to ideal BMI
          </h1>
          <Suggestion />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Result;
