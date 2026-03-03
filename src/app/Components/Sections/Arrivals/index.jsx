import View from "../../Buttons/View";
import React from "react";

const Arrivals = () => {
  return (
    <div>
      <div className="px-30">
        <h2 className="font-extrabold text-center text-6xl py-20 ">
          New Arrivals
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="w-70 flex flex-col items-center bg-white p-4">
            <img src="/t-shirt.png" alt="" />
            <p className="font-bold mt-2 text-center">
              T-SHIRT WITH TAPE DETAILS
            </p>
            <p className="text-gray-700 text-center mt-1">$120</p>
          </div>

          <div className="w-70 flex flex-col items-center bg-white p-4">
            <img src="/trousers.png" alt="" />
            <p className="font-bold mt-2 text-center">SKINNY FIT JEANS</p>
            <p className="text-gray-700 text-center mt-1">$240</p>
          </div>

          <div className="rounded-2xl w-70 flex flex-col items-center bg-white p-4">
            <img className="rounded-2xl" src="/shirt.png" alt="" />
            <p className="font-bold mt-2 text-center">CHECKERED SHIRT</p>
            <p className="text-gray-700 text-center mt-1">$180</p>
          </div>

          <div className="rounded-2xl w-70 flex flex-col items-center bg-white p-4">
            <img className="rounded-2xl" src="/t-shirt2.png" alt="" />
            <p className="font-bold mt-2 text-center">SLEEVE STRIPED T-SHIRT</p>
            <p className="text-gray-700 text-center mt-1">$130</p>
          </div>
        </div>{" "}
      </div>
    <View/>
    </div>
  );
};

export default Arrivals;
