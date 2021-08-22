import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const AddToFavoriteButton = () => {
  const { addToSaved, result } = useContext(GlobalContext);

  const handleAdd = (e) => {
    e.preventDefault();
    addToSaved({
      id: Math.random(),
      result: result,
    });
  };

  return (
    <div
      className="fixed bottom-10 text-center bg-blue-400 rounded-full right-10"
      style={{ height: "80px", width: "80px" }}
    >
      <button className="text-white p-6" onClick={handleAdd}>
        <span className="material-icons md-18">save</span>
      </button>
    </div>
  );
};

export default AddToFavoriteButton;
