import React from "react";
import Image from "next/image"; 
import Shop from "./Components/Buttons/Shop";
import DivisionBar from "./Components/DivisionBar";
import Arrivals from "./Components/Sections/Arrivals";
import TopSelling from "./Components/Sections/TopSelling";
import MiniLogin from "./Components/MiniLogin/page";

const Home = () => {
  return (
    <div>
      <div className="px-6 lg:px-30 bg-[#F2F0F1] relative py-10 lg:py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center">
            
            <div className="z-10 w-full lg:w-1/2">
              <h2 className="font-extrabold text-4xl lg:text-6xl leading-tight">
                FIND CLOTHES THAT MATCHES YOUR STYLE
              </h2>

              <p className="font-light text-gray-700 py-6 lg:py-10 text-sm lg:text-base max-w-125">
                Browse through our diverse range of meticulously crafted
                garments, designed to bring out your individuality and cater to
                your sense of style.
              </p>
              
              <div className="w-full sm:w-max">
                <Shop />
              </div>

              <div className="grid grid-cols-2 lg:flex mt-10 lg:mt-20 gap-6 lg:gap-20">
                <div>
                  <p className="font-extrabold text-2xl lg:text-4xl">200+</p>
                  <p className="text-xs lg:text-sm text-gray-700">International Brands</p>
                </div>
                <div>
                  <p className="font-extrabold text-2xl lg:text-4xl">2,000+</p>
                  <p className="text-xs lg:text-sm text-gray-700">High-Quality Products</p>
                </div>
                <div className="col-span-2 lg:col-span-1">
                  <p className="font-extrabold text-2xl lg:text-4xl">30,000+</p>
                  <p className="text-xs lg:text-sm text-gray-700">Happy Customers</p>
                </div>
              </div>
            </div>

            <div className="relative w-full lg:w-1/2 mt-10 lg:mt-0 h-100 lg:h-150">
              <Image
                src="/img1.png"
                alt="Fashion Banner"
                fill
                className="object-contain lg:object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw" 
              />
            </div>
          </div>
        </div>
      </div>

      <DivisionBar />
      <Arrivals />
      <TopSelling />
      <MiniLogin />
    </div>
  );
};

export default Home;