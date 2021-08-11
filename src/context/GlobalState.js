import React, { createContext, useReducer } from "react";

import Reducer from "./Reducer";

const initialState = {
  gender: "male",
  age: 0,
  weight: 0,
  height: 0,
  result: 0,
  history: localStorage.getItem("BMI") ? localStorage.getItem("BMI") : [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  function getGender(gender) {
    dispatch({
      type: "GET_GENDER",
      payload: gender,
    });
  }

  function getAge(age) {
    dispatch({
      type: "GET_AGE",
      payload: age,
    });
  }

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
      payload: result,
    });
  }

  function createHistory(data) {
    dispatch({
      type: "CREATE_HISTORY",
      payload: data,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        gender: state.gender,
        age: state.age,
        weight: state.weight,
        height: state.height,
        result: state.result,
        history: state.history,
        getGender,
        getAge,
        getWeight,
        getHeight,
        addResult,
        createHistory,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
