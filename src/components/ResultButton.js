import React, { useState, useEffect, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { motion } from "framer-motion";
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
          <motion.button
            whileHover={{
              scale: 1.5,
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.9 }}
            className="bg-blue-400 text-white p-4 rounded-full"
            onClick={handleClick}
          >
            Count
          </motion.button>
        ) : (
          <motion.button
            className="bg-gray-400 cursor-default text-white p-4 rounded-full"
            disabled
          >
            Count
          </motion.button>
        )}
      </div>
    </Link>
  );
};

export default ResultButton;
