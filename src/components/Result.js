import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/GlobalState";

const Result = () => {
  const { weight, height, addResult, result } = useContext(GlobalContext);
  const [bmiResult, setBmiResult] = useState(0);
  const handleClick = (e) => {
    e.preventDefault();
    const heightInCm = height / 100;
    const heightInSquare = heightInCm * heightInCm;
    const bmi = weight / heightInSquare;
    addResult(Math.round(bmi));
    setBmiResult(Math.round(bmi));
  };

  const ua = () => {
    if (result < 18.5) {
      return <h1>Berat badan kurang</h1>;
    } else if (result >= 18.5 && result <= 22.9) {
      return <h1>Berat badan normal</h1>;
    } else if (result >= 23 && result <= 29.9) {
      return <h1>Berat badan berlebih</h1>;
    } else {
      return <h1>Obesitas</h1>;
    }
  };

  return (
    <div className="text-center mt-20">
      <div>
        <button
          className="bg-blue-400 text-white inline-block px-4 py-2 rounded-full"
          onClick={handleClick}
        >
          Result
        </button>
        {result ? (
          <div className="flex justify-center mt-20">
            <h1 className="bg-blue-300 px-4 text-white rounded-lg mx-4">
              {result}
            </h1>
            {result < 18.5 ? (
              <h1>Berat badan kurang</h1>
            ) : result >= 18.5 && result <= 22.9 ? (
              <h1>Berat badan normal</h1>
            ) : result >= 23 && result <= 29.9 ? (
              <h1>Berat badan berlebih</h1>
            ) : (
              <h1>Obesitas</h1>
            )}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Result;
