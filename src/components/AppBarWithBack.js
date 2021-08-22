import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";
const AppBarWithBack = () => {
  let history = useHistory();

  const { getWeight, getHeight } = useContext(GlobalContext);

  const handleBack = () => {
    //take weight & height back to 0
    getWeight(0);
    getHeight(0);
    history.goBack();
  };

  return (
    <div className="bg-blue-400 shadow-lg sticky z-10 top-0 text-white p-4">
      <button onClick={handleBack}>
        {" "}
        <span className="material-icons md-24">arrow_back</span>
      </button>
    </div>
  );
};

export default AppBarWithBack;
