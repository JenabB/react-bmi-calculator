import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";
const AppBar = () => {
  const [fav, setFav] = useState(0);

  const { saved } = useContext(GlobalContext);

  useEffect(() => {
    setFav(saved.length);
  }, [saved]);

  return (
    <div className="bg-blue-400 flex justify-between shadow-lg sticky z-10 top-0 text-center text-white p-4">
      <div></div>
      <h1 className="font-bold">BMI Calculator</h1>
      <div>
        <Link to="/saved">
          <span className="material-icons md-18">save</span>
          <span className="">{fav}</span>
        </Link>
      </div>
    </div>
  );
};

export default AppBar;
