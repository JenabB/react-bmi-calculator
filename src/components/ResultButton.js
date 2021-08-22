import React, { useState, useEffect, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ResultButton = () => {
  const [isResult, setIsResult] = useState(false);
  const { weight, height, addResult, getNeed, getStatus, result } =
    useContext(GlobalContext);

  const handleClick = () => {
    const heightInCm = height / 100;
    const heightInSquare = heightInCm * heightInCm;
    const bmi = weight / heightInSquare;
    const finalBmi = Math.round(bmi);
    //weight need
    const weightIdeal = height - 110;
    const weightNeed = weightIdeal - weight;
    getNeed(weightNeed);

    //status
    if (finalBmi < 18.5) {
      getStatus("Less weight");
    } else if (finalBmi >= 18.5 && finalBmi <= 22.9) {
      getStatus("Normal weight");
    } else if (finalBmi >= 23 && result <= 29.9) {
      getStatus("Excess weight");
    } else {
      getStatus("Obesity");
    }

    addResult(finalBmi);
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
      <div className="z-10 floating-button fixed bottom-10">
        {isResult ? (
          <motion.button
            whileHover={{
              scale: 1.5,
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.9 }}
            className="bg-blue-400 text-white p-4 rounded-full"
            onClick={handleClick}
          >
            <span className="material-icons md-24">science</span>
          </motion.button>
        ) : (
          <motion.button
            className="bg-gray-400 cursor-default text-white p-4 rounded-full"
            disabled
          >
            <span className="material-icons md-24">science</span>
          </motion.button>
        )}
      </div>
    </Link>
  );
};

export default ResultButton;
