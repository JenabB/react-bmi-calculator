import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Result = () => {
  const { result } = useContext(GlobalContext);

  return (
    <div>
      {result ? (
        <div className="flex justify-center mt-20">
          <h1 className="bg-blue-300 px-4 text-white rounded-lg mx-4">
            {result}
          </h1>
          {result < 18.5 ? (
            <h1>Berat badan kurang</h1>
          ) : result >= 18.5 && result <= 22.9 ? (
            <h1>Berat badan normal</h1>
          ) : result >= 23 && result <= 29.9 ? (
            <h1>Berat badan berlebih</h1>
          ) : (
            <h1>Obesitas</h1>
          )}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Result;
