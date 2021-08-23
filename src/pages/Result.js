import React, { useContext, useState, useEffect } from "react";
import AddToFavoriteButton from "../components/AddToFavoriteButton";
import AppBarWithBack from "../components/AppBarWithBack";
import Suggestion from "../components/Suggestion";
import { GlobalContext } from "../context/GlobalState";

const Result = () => {
  const { result, gender, need, status } = useContext(GlobalContext);
  const [byGender, setByGender] = useState("");

  useEffect(() => {
    if (gender === "male") {
      setByGender("male normally have 23-25");
    } else {
      setByGender("female normally have 20-22");
    }
  }, [gender]);

  return (
    <div>
      <AppBarWithBack />
      {result ? (
        <div>
          <div className="text-center mt-20">
            <h1 className="px-14 py-18 text-6xl font-bold text-blue-400 inline-block rounded-full">
              {result}
            </h1>
            <div className="mt-4">
              <h1>{status}</h1>
            </div>
          </div>
          <h1 className="mt-4 text-center">
            Need <b>{need} Kg</b> to ideal BMI
          </h1>
          <h2 className="text-center">{byGender}</h2>
          <Suggestion />
          <AddToFavoriteButton />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Result;
