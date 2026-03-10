import View from "../../Buttons/View";
import React from "react";
import Image from "next/image";

const Arrivals = () => {
  const products = [
    { id: 1, name: "T-SHIRT WITH TAPE DETAILS", price: 120, img: "/t-shirt.png" },
    { id: 2, name: "SKINNY FIT JEANS", price: 240, img: "/trousers.png" },
    { id: 3, name: "CHECKERED SHIRT", price: 180, img: "/shirt.png" },
    { id: 4, name: "SLEEVE STRIPED T-SHIRT", price: 130, img: "/t-shirt2.png" },
  ];

  return (
    <section className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <h2 className="font-black text-center text-4xl md:text-6xl mb-12 uppercase italic tracking-tighter">
          New Arrivals
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              {/* Şəkil konteyneri */}
              <div className="relative aspect-square bg-[#F0EEED] rounded-[20px] overflow-hidden mb-4">
                <Image 
                  src={product.img} 
                  alt={product.name}
                  fill 
                  className="object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="text-left">
                <p className="font-bold text-sm md:text-base uppercase truncate">
                  {product.name}
                </p>
                <div className="flex text-yellow-400 text-xs my-1">
                  ★★★★★ <span className="text-gray-400 ml-1 text-[10px]">5.0/5</span>
                </div>
                <p className="font-black text-xl md:text-2xl mt-1">${product.price}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <View />
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6">
         <hr className="border-gray-200 mt-16" />
      </div>
    </section>
  );
};

export default Arrivals;