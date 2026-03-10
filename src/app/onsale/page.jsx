"use client";
import React from "react";
import { ShoppingCart, Heart } from "lucide-react";
import Image from "next/image";

const OnSale = () => {
  const saleProducts = [
    {
      id: 1,
      name: "Vertical Striped Shirt",
      image: "/t-shirt.png", 
      currentPrice: 212,
      originalPrice: 235,
      discount: "-20%",
      rating: 5.0,
    },
    {
      id: 2,
      name: "Courage Graphic T-shirt",
      image: "/t-shirt2.png",
      currentPrice: 145,
      originalPrice: 160,
      discount: "-15%",
      rating: 4.8,
    },
    {
      id: 3,
      name: "Loose Fit Bermuda Shorts",
      image: "/trousers.png",
      currentPrice: 80,
      originalPrice: 120,
      discount: "-30%",
      rating: 4.5,
    },
    {
      id: 4,
      name: "Faded Skinny Jeans",
      image: "/yourcart1.png",
      currentPrice: 210,
      originalPrice: 250,
      discount: "-25%",
      rating: 4.9,
    },
  ];

  return (
    <section className="py-12 md:py-16 px-6 md:px-10 lg:px-20 bg-white">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
        <div>
          <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter leading-none">
            On Sale
          </h2>
          <p className="text-gray-500 mt-3 text-sm md:text-base">
            Big deals on our most-loved items! {"Don't"} miss out.
          </p>
        </div>
        <button className="hidden md:block border-b-2 border-black font-bold uppercase pb-1 hover:text-red-600 hover:border-red-600 transition-all text-sm">
          View All
        </button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {saleProducts.map((product) => (
          <div key={product.id} className="group cursor-pointer">
            {/* Image Container */}
            <div className="relative aspect-square bg-[#F0EEED] rounded-[20px] overflow-hidden flex items-center justify-center">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain p-6 sm:p-8 group-hover:scale-105 transition-transform duration-500"
              />
              
              {/* Badge */}
              <span className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-[10px] md:text-xs font-bold uppercase z-10">
                {product.discount}
              </span>

              {/* Hover Actions */}
              <div className="hidden lg:flex absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity items-center justify-center gap-3 z-20">
                <button className="bg-white p-3 rounded-full shadow-md hover:bg-black hover:text-white transition-all transform hover:-translate-y-1">
                  <ShoppingCart size={20} />
                </button>
                <button className="bg-white p-3 rounded-full shadow-md hover:bg-red-500 hover:text-white transition-all transform hover:-translate-y-1">
                  <Heart size={20} />
                </button>
              </div>
            </div>

            {/* Product Details */}
            <div className="mt-4">
              <h3 className="font-bold text-base md:text-lg lg:text-xl truncate text-black">
                {product.name}
              </h3>
              
              <div className="flex items-center gap-1 mt-1">
                <div className="flex text-yellow-400 text-sm">
                  {"★".repeat(Math.floor(product.rating))}
                </div>
                <span className="text-gray-400 text-xs md:text-sm font-medium">
                  {product.rating}/<span className="opacity-70">5</span>
                </span>
              </div>

              <div className="flex items-center flex-wrap gap-2 md:gap-3 mt-2">
                <span className="text-xl md:text-2xl font-black text-black">
                  ${product.currentPrice}
                </span>
                <span className="text-gray-400 line-through text-base md:text-xl font-medium">
                  ${product.originalPrice}
                </span>
                <span className="bg-red-100 text-red-600 px-2 py-1 rounded-full text-[10px] md:text-xs font-bold">
                  {product.discount}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile View All Button */}
      <div className="mt-10 md:hidden">
        <button className="w-full border-2 border-gray-200 py-4 rounded-full font-bold uppercase text-sm active:bg-black active:text-white transition-colors">
          View All
        </button>
      </div>
    </section>
  );
};

export default OnSale;