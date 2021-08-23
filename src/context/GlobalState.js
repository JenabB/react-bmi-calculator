import React, { createContext, useReducer, useEffect } from "react";
import Reducer from "./Reducer";

const initialState = {
  gender: "male",
  weight: 0,
  height: 0,
  result: 0,
  status: "",
  need: 0,
  saved: localStorage.getItem("saved")
    ? JSON.parse(localStorage.getItem("saved"))
    : [],
};

//create context
export const GlobalContext = createContext(initialState);

//provider components
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  useEffect(() => {
    localStorage.setItem("saved", JSON.stringify(state.saved));
  }, [state]);

  function getGender(gender) {
    dispatch({
      type: "GET_GENDER",
      payload: gender,
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

  function getStatus(status) {
    dispatch({
      type: "GET_STATUS",
      payload: status,
    });
  }

  function getNeed(need) {
    dispatch({
      type: "GET_NEED",
      payload: need,
    });
  }

  function addToSaved(data) {
    dispatch({
      type: "ADD_TO_SAVED",
      payload: data,
    });
  }

  function removeFromSaved(id) {
    dispatch({
      type: "REMOVE_FROM_SAVED",
      payload: id,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        gender: state.gender,
        weight: state.weight,
        height: state.height,
        result: state.result,
        status: state.status,
        need: state.need,
        saved: state.saved,
        getGender,
        getWeight,
        getHeight,
        addResult,
        getStatus,
        getNeed,
        addToSaved,
        removeFromSaved,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
