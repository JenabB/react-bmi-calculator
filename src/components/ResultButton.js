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
    <div className="floating-button fixed bottom-10">
      <button
        className="bg-blue-400 text-white p-4 rounded-full"
        onClick={handleClick}
      >
        Count
      </button>
    </div>
  );
};

export default ResultButton;
