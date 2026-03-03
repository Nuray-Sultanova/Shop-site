"use client";
import React from "react";
import { ShoppingCart, Heart } from "lucide-react";

const OnSale = () => {
  // Endirimdə olan məhsulların siyahısı
  const saleProducts = [
    {
      id: 1,
      name: "Vertical Striped Shirt",
      image: "/t-shirt.png", // Öz şəkil yollarını bura yaz
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
    <section className="py-16 px-4 md:px-10 lg:px-20 bg-white">
      {/* Başlıq hissəsi */}
      <div className="flex justify-between items-end mb-10">
        <div>
          <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter">
            On Sale
          </h2>
          <p className="text-gray-500 mt-2">Ən çox bəyənilən məhsullarda böyük fürsətlər!</p>
        </div>
        <button className="hidden md:block border-b-2 border-black font-bold uppercase pb-1 hover:text-red-600 hover:border-red-600 transition-all">
          View All
        </button>
      </div>

      {/* Məhsul Grid-i */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {saleProducts.map((product) => (
          <div key={product.id} className="group relative">
            {/* Məhsul Şəkli */}
            <div className="relative aspect-square bg-[#F0EEED] rounded-[20px] overflow-hidden flex items-center justify-center p-8">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* Endirim Etiketi */}
              <span className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                {product.discount}
              </span>

              {/* Hover olanda çıxan sürətli düymələr */}
              <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                <button className="bg-white p-3 rounded-full shadow-lg hover:bg-black hover:text-white transition-all">
                  <ShoppingCart size={20} />
                </button>
                <button className="bg-white p-3 rounded-full shadow-lg hover:bg-red-500 hover:text-white transition-all">
                  <Heart size={20} />
                </button>
              </div>
            </div>

            {/* Məhsul Məlumatları */}
            <div className="mt-4">
              <h3 className="font-bold text-lg md:text-xl truncate">{product.name}</h3>
              
              {/* Reytinq (Sadə formada) */}
              <div className="flex items-center gap-1 mt-1 text-yellow-500">
                {"★".repeat(Math.floor(product.rating))}
                <span className="text-gray-400 text-sm ml-1 font-medium">{product.rating}/5</span>
              </div>

              {/* Qiymətlər */}
              <div className="flex items-center gap-3 mt-2">
                <span className="text-2xl font-black">${product.currentPrice}</span>
                <span className="text-gray-400 line-through text-xl font-medium">
                  ${product.originalPrice}
                </span>
                <span className="bg-red-100 text-red-600 px-2 py-1 rounded-full text-xs font-bold italic">
                  {product.discount}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobil üçün "View All" düyməsi */}
      <div className="mt-10 md:hidden">
        <button className="w-full border-2 border-gray-200 py-4 rounded-full font-bold uppercase">
          View All
        </button>
      </div>
    </section>
  );
};

export default OnSale;