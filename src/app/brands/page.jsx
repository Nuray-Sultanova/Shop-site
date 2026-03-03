"use client";
import React from "react";
import MiniLogin from "../Components/MiniLogin/page";
;

const Brands = () => {
  const brands = [
    { id: 1, name: "Versace", logo: "VERSACE" },
    { id: 2, name: "Zara", logo: "ZARA" },
    { id: 3, name: "Gucci", logo: "GUCCI" },
    { id: 4, name: "Prada", logo: "PRADA" },
    { id: 5, name: "Calvin Klein", logo: "Calvin Klein" },
    { id: 6, name: "Nike", logo: "NIKE" },
    { id: 7, name: "Adidas", logo: "ADIDAS" },
    { id: 8, name: "Puma", logo: "PUMA" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Üst hissə: Başlıq */}
      <div className="bg-[#F0EEED] py-24 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-8xl font-black uppercase italic mb-6 tracking-tighter">
            Our Brands
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg md:text-xl font-medium">
            The world's most iconic fashion houses and labels, all in one place. 
            Curated style for the modern individual.
          </p>
        </div>
      </div>

      {/* Brendlər Grid-i */}
      <div className="max-w-7xl mx-auto py-24 px-4 md:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
          {brands.map((brand) => (
            <div 
              key={brand.id} 
              className="group relative flex items-center justify-center text-center h-48 border border-gray-100 rounded-3xl bg-white transition-all duration-500 ease-in-out hover:border-black hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] cursor-pointer"
            >
              <span className="text-2xl md:text-4xl font-black text-gray-300 group-hover:text-black transition-all duration-500 uppercase tracking-[0.2em]">
                {brand.logo}
              </span>
              
              {/* Brendin altına kiçik bir "View Collection" mətni çıxsın (Opsional) */}
              <div className="absolute bottom-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-[10px] font-bold uppercase tracking-widest border-b border-black">View Collection</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action Bölməsi */}
      <div className="max-w-7xl mx-auto px-4 mb-32">
        <div className="relative overflow-hidden bg-black rounded-[40px] py-16 md:py-24 px-10 text-center text-white">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
          
          <h2 className="text-4xl md:text-6xl font-black mb-8 uppercase italic tracking-tighter">
            Don't miss out <br /> on new arrivals
          </h2>
          <p className="text-gray-400 mb-10 max-w-xl mx-auto text-lg">
            Be the first to know about new collections and exclusive collaborations.
          </p>
          <button className="bg-white text-black px-12 py-5 rounded-full font-bold hover:bg-gray-200 transition-all active:scale-95 cursor-pointer uppercase tracking-wider text-sm">
            Shop All Brands
          </button>
        </div>
      </div>

  <MiniLogin/>
    </div>
  );
};

export default Brands;