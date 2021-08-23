import React, { useContext } from "react";
import moment from "moment";
import AppBarWithBack from "../components/AppBarWithBack";
import { GlobalContext } from "../context/GlobalState";

const Saved = () => {
  const { saved, removeFromSaved } = useContext(GlobalContext);

  return (
    <div>
      <AppBarWithBack />
      <div>
        {saved.length > 0 ? (
          <div>
            {saved.map((data) => (
              <div key={data.id} className="shadow-lg m-4 p-4">
                <h1 className="text-blue-400 font-bold">{data.result}</h1>
                <p className="text-gray-400">
                  {moment(data.date).format("dddd, MMMM Do YYYY, h:mm:ss a")}
                </p>
                <h3>need {data.need} Kg</h3>
                <h4>{data.status}</h4>
                <button onClick={() => removeFromSaved(data.id)}>Remove</button>
              </div>
            ))}
          </div>
        ) : (
          <div>
            <h1>no favorite yet.</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Saved;
