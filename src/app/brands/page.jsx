"use client";
import React from "react";
import MiniLogin from "../Components/MiniLogin/page";

const Brands = () => {
  const brands = [
    { id: 1, logo: "VERSACE" },
    { id: 2, logo: "ZARA" },
    { id: 3, logo: "GUCCI" },
    { id: 4, logo: "PRADA" },
    { id: 5, logo: "CALVIN KLEIN" },
    { id: 6, logo: "NIKE" },
    { id: 7, logo: "ADIDAS" },
    { id: 8, logo: "PUMA" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-[#F0EEED] py-16 md:py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black uppercase italic mb-6 tracking-tighter leading-none">
            Our Brands
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm sm:text-base md:text-xl font-medium">
            The world's most iconic fashion houses and labels, all in one place.
            Curated style for the modern individual.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-12 md:py-24 px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-10">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="group relative flex items-center justify-center text-center h-32 md:h-48 border border-gray-100 rounded-2xl md:rounded-3xl bg-white transition-all duration-500 hover:border-black hover:-translate-y-1 md:hover:-translate-y-2 hover:shadow-xl cursor-pointer"
            >
              <span className="text-xl md:text-3xl lg:text-4xl font-black text-gray-300 group-hover:text-black transition-all duration-500 uppercase tracking-widest px-4">
                {brand.logo}
              </span>

              <div className="hidden md:block absolute bottom-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-[10px] font-bold uppercase tracking-widest border-b border-black">
                  View Collection
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mb-20 md:mb-32">
        <div className="relative overflow-hidden bg-black rounded-[30px] md:rounded-[40px] py-12 md:py-24 px-6 text-center text-white">
          <div className="absolute top-0 right-0 w-32 h-32 md:w-64 md:h-64 bg-white/5 rounded-full -mr-16 -mt-16 md:-mr-32 md:-mt-32"></div>

          <h2 className="text-3xl md:text-6xl font-black mb-6 md:mb-8 uppercase italic tracking-tighter leading-tight">
            Don't miss out <br className="hidden sm:block" /> on new arrivals
          </h2>
          <p className="text-gray-400 mb-8 md:mb-10 max-w-xl mx-auto text-sm md:text-lg">
            Be the first to know about new collections and exclusive
            collaborations.
          </p>
          <button className="w-full sm:w-auto bg-white text-black px-10 py-4 md:px-12 md:py-5 rounded-full font-bold hover:bg-gray-200 transition-all active:scale-95 cursor-pointer uppercase tracking-wider text-xs md:text-sm">
            Shop All Brands
          </button>
        </div>
      </div>

      <MiniLogin />
    </div>
  );
};

export default Brands;
