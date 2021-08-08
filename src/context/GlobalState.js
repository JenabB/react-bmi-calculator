import React, { createContext, useReducer, useEffect } from "react";

import Reducer from "./Reducer";

const initialState = {
  weight: 0,
  height: 0,
  result: localStorage.getItem("BMI") ? localStorage.getItem("BMI") : [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  useEffect(() => {
    localStorage.setItem("BMI", JSON.stringify(state.result));
  }, [state]);

  function getWeight(weight) {
    dispatch({
      type: "GET_WEIGHT",
      payload: weight,
    });
  }

  function getHeight(height) {
    dispatch({
      type: "GET_HEIGHT",
      payload: height,
    });
  }

  function addResult(result) {
    dispatch({
      type: "ADD_RESULT",
      Payload: result,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        weight: state.weight,
        height: state.height,
        result: state.result,
        getWeight,
        getHeight,
        addResult,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};