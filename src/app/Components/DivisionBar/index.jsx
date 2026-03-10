import React from "react";

const DivisionBar = () => {
  return (
    <div className="bg-black">
      <div className="max-w-7xl mx-auto py-6 lg:py-10 px-6 lg:px-10 flex flex-wrap justify-center lg:justify-between items-center gap-8 lg:gap-10">
        <p className="text-white text-2xl lg:text-4xl font-bold tracking-tighter">VERSACE</p>
        <p className="text-white text-2xl lg:text-4xl font-bold tracking-tighter">ZARA</p>
        <p className="text-white text-2xl lg:text-4xl font-bold tracking-tighter">GUCCI</p>
        <p className="text-white text-2xl lg:text-4xl font-bold tracking-tighter">PRADA</p>
        <p className="text-white text-2xl lg:text-4xl font-bold tracking-tighter whitespace-nowrap">CALVIN KLEIN</p>
      </div>
    </div>
  );
};

export default DivisionBar;