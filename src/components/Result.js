import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Result = () => {
  const { weight, height, addResult } = useContext(GlobalContext);

  const handleClick = (e) => {
    e.preventDefault();
    const bmi = parseInt(weight) + parseInt(height);
    console.log(bmi);
    addResult(bmi);
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
      </div>
    </div>
  );
};

export default Result;
