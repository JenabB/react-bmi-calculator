import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const ResultButton = () => {
  const { weight, height, addResult } = useContext(GlobalContext);

  const handleClick = (e) => {
    e.preventDefault();
    const heightInCm = height / 100;
    const heightInSquare = heightInCm * heightInCm;
    const bmi = weight / heightInSquare;
    addResult(Math.round(bmi));
  };

  return (
    <div className="text-center mt-20">
      <div>
        <button
          className="bg-blue-400 text-white inline-block px-4 py-2 rounded-full"
          onClick={handleClick}
        >
          Count
        </button>
      </div>
    </div>
  );
};

export default ResultButton;
