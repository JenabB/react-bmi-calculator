import React, { useState, useEffect, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Link } from "react-router-dom";
const ResultButton = () => {
  const [isResult, setIsResult] = useState(false);
  const { weight, height, addResult, result } = useContext(GlobalContext);

  const handleClick = () => {
    const heightInCm = height / 100;
    const heightInSquare = heightInCm * heightInCm;
    const bmi = weight / heightInSquare;

    addResult(Math.round(bmi));
  };

  console.log({
    height: height,
    weight: weight,
    result: result,
    isResult: isResult,
  });

  useEffect(() => {
    if (weight !== 0 && height !== 0) {
      setIsResult(true);
    } else {
      setIsResult(false);
    }
  }, [height, weight]);

  return (
    <Link to="/result">
      <div className="floating-button fixed bottom-10">
        {isResult ? (
          <button
            className="result-button bg-blue-400 text-white p-4 rounded-full"
            onClick={handleClick}
          >
            Count
          </button>
        ) : (
          <button
            className="result-button bg-gray-400 text-white p-4 rounded-full"
            disabled
          >
            Count
          </button>
        )}
      </div>
    </Link>
  );
};

export default ResultButton;
