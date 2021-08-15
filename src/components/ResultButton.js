import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Link } from "react-router-dom";
const ResultButton = () => {
  const { weight, height, addResult } = useContext(GlobalContext);

  const handleClick = () => {
    const heightInCm = height / 100;
    const heightInSquare = heightInCm * heightInCm;
    const bmi = weight / heightInSquare;

    addResult(Math.round(bmi));
  };

  return (
    <Link to="/result">
      <div className="floating-button fixed bottom-10">
        <button
          className="bg-blue-400 text-white p-4 rounded-full"
          onClick={handleClick}
        >
          Count
        </button>
      </div>
    </Link>
  );
};

export default ResultButton;
