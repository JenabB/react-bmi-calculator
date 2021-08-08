import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Suggestion = () => {
  const { result } = useContext(GlobalContext);

  return (
    <div className="mt-10 bg-blue-400 w-5/6 text-white mx-auto p-4 rounded-xl">
      <h1>Suggestion: </h1>
      <h1>------------------------------------------------</h1>
      {result > 0 ? (
        result < 20.7 ? (
          <h1>need {Math.round(20.7 - result)} to ideal BMI</h1>
        ) : (
          <h1>need {Math.round(result - 20.7)} to ideal BMI</h1>
        )
      ) : (
        ""
      )}
    </div>
  );
};

export default Suggestion;
