import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const AppBar = () => {
  const [fav, setFav] = useState(0);

  useEffect(() => {
    let ffav = 0;
  });
  return (
    <div className="bg-blue-400 flex justify-between shadow-lg sticky z-10 top-0 text-center text-white p-4">
      <div></div>
      <h1>BMI Calculator</h1>
      <div>
        <Link to="/saved">
          <span className="material-icons md-18">save</span>
        </Link>
      </div>
    </div>
  );
};

export default AppBar;
