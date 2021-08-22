import React, { useContext } from "react";
import AddToFavoriteButton from "../components/AddToFavoriteButton";
import AppBarWithBack from "../components/AppBarWithBack";
import Suggestion from "../components/Suggestion";
import { GlobalContext } from "../context/GlobalState";

const Result = () => {
  const { result, need, status } = useContext(GlobalContext);

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
