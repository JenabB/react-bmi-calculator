import React from "react";
import {
  useAgeInput,
  useHeightInput,
  useWeightInput,
} from "../hooks/useDataInput";

const Input = () => {
  const [age, setAge] = useAgeInput(0);
  const [weight, setWeight] = useWeightInput(0);
  const [height, setHeight] = useHeightInput(0);

  return (
    <div className="grid grid-cols-2 text-center mt-6">
      <div className="mx-2 mt-5">
        <h1>Age</h1>
        <input
          type="number"
          className="w-1/2 bg-gray-300 rounded-full px-3 py-1"
          value={age}
          onChange={(e) => {
            setAge(e.target.value);
          }}
        />
      </div>
      <div className="mx-2 mt-5">
        <h1>Weight (Kg)</h1>
        <input
          type="number"
          className="w-1/2 bg-gray-300 rounded-full px-3 py-1"
          value={weight}
          onChange={(e) => {
            setWeight(e.target.value);
          }}
        />
      </div>
      <div className="mx-2 mt-5">
        <h1>Height (Cm)</h1>
        <input
          type="number"
          className="w-1/2 bg-gray-300 rounded-full px-3 py-1"
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
