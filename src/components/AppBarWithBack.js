import React from "react";
import { useHistory } from "react-router-dom";

const AppBarWithBack = () => {
  let history = useHistory();

  const handleBack = () => {
    history.goBack();
  };

  return (
    <div className="bg-blue-400 shadow-lg sticky z-10 top-0 text-white p-4">
      <button onClick={handleBack}>&#8592;</button>
    </div>
  );
};

export default AppBarWithBack;
