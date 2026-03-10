import React from "react";
import View from "../../Buttons/View";
import Image from "next/image";

const TopSelling = () => {
  const products = [
    { id: 1, name: "VERTICAL STRIPED SHIRT", price: 212, img: "/topselling1.png" },
    { id: 2, name: "COURAGE GRAPHIC T-SHIRT", price: 145, img: "/topselling2.png" },
    { id: 3, name: "LOOSE FIT BERMUDA SHORTS", price: 80, img: "/topselling1.png" }, 
    { id: 4, name: "FADED SKINNY JEANS", price: 210, img: "/topselling4.png" },
  ];

  return (
    <section className="py-12 md:py-20 border-t border-gray-100 mt-10">
      <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-20">
        <h2 className="font-black text-center text-4xl md:text-6xl mb-12 uppercase italic">
          TOP SELLING
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
          {products.map((item) => (
            <div key={item.id} className="flex flex-col group cursor-pointer">
              <div className="relative aspect-square w-full bg-[#F0EEED] rounded-[20px] overflow-hidden mb-4">
                <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  className="object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="flex flex-col items-start px-1">
                <p className="font-bold text-sm md:text-base uppercase truncate w-full">
                  {item.name}
                </p>
                <div className="flex text-yellow-400 text-xs my-1">
                  ★★★★★ <span className="text-gray-400 ml-1">5.0/5</span>
                </div>
                <p className="font-black text-xl md:text-2xl mt-1">${item.price}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <View />
        </div>
      </div>
    </section>
  );
};

export default TopSelling;