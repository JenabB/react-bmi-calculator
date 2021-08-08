import { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const useWeightInput = (weight) => {
  const [weightInput, setWeightInput] = useState(weight);

  const { getWeight } = useContext(GlobalContext);
  const validateWeigthtData = (weight) => {
    if (weight < 600) {
      setWeightInput(weight);
      getWeight(weight);
    } else {
      alert("you're not human");
    }
  };
  return [weightInput, validateWeigthtData];
};

export const useHeightInput = (height) => {
  const [heightInput, setHeightInput] = useState(height);

  const { getHeight } = useContext(GlobalContext);

  const validateHeightData = (height) => {
    if (height < 2720) {
      setHeightInput(height);
      getHeight(height);
    } else {
      alert("you're not human");
    }
  };
  return [heightInput, validateHeightData];
};
