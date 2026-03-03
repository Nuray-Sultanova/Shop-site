import React from "react";
import Shop from "./Components/Buttons/Shop";
import DivisionBar from "./Components/DivisionBar";
import Arrivals from "./Components/Sections/Arrivals";
import TopSelling from "./Components/Sections/TopSelling";
import Footer from "./Components/Footer";
import MiniLogin from "./Components/MiniLogin/page";
// className="px-30 bg-[#F2F0F1] relative py-20"
const Home = () => {
  return (
    <div>
      <div className="px-30 bg-[#F2F0F1] relative py-20">
        <div>
          <div>
            <div>
              <h2 className="w-150 font-extrabold text-6xl  ">
                FIND CLOTHES THAT MATCHES YOUR STYLE
              </h2>

              <p className=" w-150 font-light text-gray-700 py-10 ">
                Browse through our diverse range of meticulously crafted
                garments, designed to bring out your individuality and cater to
                your sense of style.
              </p>
              <Shop />
              <div className="flex mt-20 gap-20 ">
                <div>
                  <p className="font-extrabold text-4xl">200+</p>
                  <p className=" text-gray-700">Internatioanl Brands</p>
                </div>
                <div>
                  <p className="font-extrabold text-4xl">2,000+</p>
                  <p className=" text-gray-700">High-Quality Products</p>
                </div>
                <div>
                  <p className="font-extrabold text-4xl">30,000+</p>
                  <p className=" text-gray-700">Happy Customers</p>
                </div>
              </div>
            </div>
            <img
              src="/img1.png "
              alt=""
              className=" absolute right-0 bottom-0"
            />
          </div>
        </div>
      </div>
      <DivisionBar />

      {/* Arrivalss hissesi buradadir */}
      <Arrivals />
      <TopSelling />
  <MiniLogin/>

    </div>
  );
};
//  <p>FIND CLOTHES THAT MATCHES YOUR STYLE</p>
export default Home;
