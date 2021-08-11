import React from "react";
import {
  useGenderInput,
  useAgeInput,
  useHeightInput,
  useWeightInput,
} from "../hooks/useDataInput";
import Select from "react-select";

const Input = () => {
  const [gender, setGender] = useGenderInput("male");
  const [age, setAge] = useAgeInput(0);
  const [weight, setWeight] = useWeightInput(0);
  const [height, setHeight] = useHeightInput(0);

  const options = [
    {
      value: "male",
      label: "male",
    },
    {
      value: "female",
      label: "female",
    },
  ];

  return (
    <div className="text-center mt-6">
      <div className="grid grid-cols-2 px-4">
        <div className="mx-auto" style={{ width: "130px" }}>
          <h1>Gender</h1>
          <Select options={options} onChange={(e) => setGender(e.value)} />
        </div>

        <div className="mx-2">
          <h1>Age</h1>
          <input
            type="number"
            className="w-2/4 bg-gray-300 rounded-full px-3 py-1"
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />
        </div>
      </div>

      <div className="grid grid-cols-2">
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
    </div>
  );
};

export default Input;
