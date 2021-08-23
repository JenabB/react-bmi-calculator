import { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const useGenderInput = (gender) => {
  const [genderInput, setGenderInput] = useState(gender);

  const { getGender } = useContext(GlobalContext);

  const validateGenderData = (gender) => {
    if (gender) {
      setGenderInput(gender);
      getGender(gender);
    } else {
      console.log("please insert age");
    }
  };
  return [genderInput, validateGenderData];
};

export const useWeightInput = (weight) => {
  const [weightInput, setWeightInput] = useState(weight);

  const { getWeight } = useContext(GlobalContext);
  const validateWeighttData = (weight) => {
    if (weight < 600) {
      setWeightInput(weight);
      getWeight(parseInt(weight));
    } else {
      alert("you're not human");
    }
  };
  return [weightInput, validateWeighttData];
};

export const useHeightInput = (height) => {
  const [heightInput, setHeightInput] = useState(height);

  const { getHeight } = useContext(GlobalContext);

  const validateHeightData = (height) => {
    if (height < 2720) {
      setHeightInput(height);
      getHeight(parseInt(height));
    } else {
      alert("you're not human");
    }
  };
  return [heightInput, validateHeightData];
};
