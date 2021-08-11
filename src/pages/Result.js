import React, { useContext } from "react";
import AppBarWithBack from "../components/AppBarWithBack";
import Suggestion from "../components/Suggestion";
import { GlobalContext } from "../context/GlobalState";

const Result = () => {
  const { weight, height, result } = useContext(GlobalContext);

  const bbIdeal = height - 110;
  const bbButuh = bbIdeal - weight;

  return (
    <div>
      <AppBarWithBack />
      {result ? (
        <div>
          <div className="text-center mt-20">
            <h1 className="px-14 py-18 text-6xl font-bold text-blue-400 inline-block rounded-full">
              {result}
            </h1>
            <div className="mt-4">
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
