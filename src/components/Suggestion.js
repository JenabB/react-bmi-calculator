import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

import penurun from "../assets/images/penurun-bb.jpg";
import lari from "../assets/images/lari.webp";
import airputih from "../assets/images/air-putih.webp";

const Suggestion = () => {
  const { height, weight } = useContext(GlobalContext);

  const bbIdeal = height - 110;
  const bbButuh = bbIdeal - weight;

  return (
    <div className="mt-10 bg-blue-400 w-full lg:w-5/6 text-white mx-auto p-8 rounded-t-2xl">
      <h1>Suggestion: </h1>
      <h1>------------------------------------------------</h1>

      <div>
        {bbButuh < 0 ? (
          <div className="grid sm:grid-cols-1 xl:grid-cols-3">
            <div className="mx-auto mt-8">
              <div className="text-center">
                <img src={penurun} className="w-full" alt="penurun" />
              </div>
              <h1 className="p-4">
                Not only exercising regularly, losing weight needs to be
                balanced with a healthy diet. One of the keys to a healthy diet
                is choosing foods that can support your weight loss program.
              </h1>
            </div>

            <div className="mx-2">
              <div className="text-center">
                <img src={lari} className="w-full mt-10" alt="lari" />
              </div>
              <h1 className="p-4">
                Some sports can help you lose weight quickly because it can
                speed up the body's metabolic processes. Because with a fast
                metabolism, the number of calories burned will also increase, so
                weight loss will be easier to obtain.
              </h1>
            </div>

            <div className="mx-2">
              <div className="text-center">
                <img src={airputih} className="w-full mt-10 " alt="air putih" />
              </div>
              <h1 className="p-4">
                The human body normally consists of 60% water. This means that
                water plays an important role in almost every function of the
                body. That's why, a well-hydrated body will function well, from
                thinking to burning body fat.{" "}
              </h1>
            </div>
          </div>
        ) : (
          <div>
            <ul>
              <li></li>
            </ul>
            <h1>banyak makan</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Suggestion;
