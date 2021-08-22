import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const AddToFavoriteButton = () => {
  const { result, status, need, addToSaved } = useContext(GlobalContext);

  const handleAdd = (e) => {
    e.preventDefault();
    addToSaved({
      id: "_" + Math.random().toString(36).substr(2, 9),
      date: new Date(),
      result: result,
      status: status,
      need: need,
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
