import React from "react";
import { useHeightInput, useWeightInput } from "../hooks/useDataInput";

const Input = () => {
  const [weight, setWeight] = useWeightInput(0);
  const [height, setHeight] = useHeightInput(0);

  return (
    <div className="flex justify-evenly mt-6">
      <div>
        <h1>Weight (Kg)</h1>
        <input
          type="number"
          className="bg-gray-300 rounded-full px-3 py-1"
          value={weight}
          onChange={(e) => {
            setWeight(e.target.value);
          }}
        />
      </div>
      <div>
        <h1>Height (Cm)</h1>
        <input
          type="number"
          className="bg-gray-300 rounded-full px-3 py-1"
          value={height}
          onChange={(e) => {
            setHeight(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default Input;
