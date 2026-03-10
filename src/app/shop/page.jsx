"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image"; 
import { Trash2, Minus, Plus, Loader2 } from "lucide-react";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products?limit=3");
        const data = await res.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Məlumat gəlmədi:", error);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="animate-spin text-gray-400" size={48} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto py-10 px-4 md:px-10 lg:px-20">
        <h1 className="text-4xl font-black uppercase italic mb-8">Your Cart</h1>

        <div className="flex flex-col lg:flex-row gap-10">
          <div className="flex-1 border border-gray-200 rounded-[20px] p-6 space-y-6">
            {products.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 md:gap-6 border-b border-gray-100 pb-6 last:border-none last:pb-0"
              >
                <div className="relative w-28 h-28 md:w-32 md:h-32 bg-[#F0EEED] rounded-[15px] p-4 flex items-center justify-center shrink-0 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain p-2 mix-blend-multiply"
                    sizes="(max-width: 768px) 112px, 128px" 
                  />
                </div>

                <div className="flex flex-col justify-between w-full py-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h2 className="text-lg font-bold uppercase line-clamp-1 italic">
                        {item.title}
                      </h2>
                      <p className="text-sm text-gray-500 capitalize">
                        Category:{" "}
                        <span className="text-gray-400">{item.category}</span>
                      </p>
                      <p className="text-sm text-gray-500">
                        Stock: <span className="text-gray-400">Available</span>
                      </p>
                    </div>
                    <button className="text-red-500 hover:scale-110 transition-transform cursor-pointer">
                      <Trash2 size={20} />
                    </button>
                  </div>

                  <div className="flex justify-between items-end">
                    <span className="text-2xl font-black">${item.price}</span>

                    <div className="flex items-center gap-4 bg-[#F0F0F0] px-4 py-2 rounded-full">
                      <button className="cursor-pointer hover:opacity-50">
                        <Minus size={16} />
                      </button>
                      <span className="font-bold">1</span>
                      <button className="cursor-pointer hover:opacity-50">
                        <Plus size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="w-full lg:w-112.5">
            <div className="border border-gray-200 rounded-[20px] p-6 sticky top-5">
              <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

              <div className="space-y-4 text-gray-500">
                <div className="flex justify-between">
                  <p>Subtotal</p>
                  <p className="font-bold text-black">
                    $
                    {products
                      .reduce((acc, curr) => acc + curr.price, 0)
                      .toFixed(2)}
                  </p>
                </div>
                <div className="flex justify-between text-red-500">
                  <p>Discount (-20%)</p>
                  <p className="font-bold">
                    -${(products.reduce((acc, curr) => acc + curr.price, 0) * 0.2).toFixed(2)}
                  </p>
                </div>
                <div className="flex justify-between">
                  <p>Delivery Fee</p>
                  <p className="font-bold text-black">$15.00</p>
                </div>

                <hr className="border-gray-100" />

                <div className="flex justify-between text-xl font-bold text-black pt-2">
                  <p>Total</p>
                  <p>
                    $
                    {(
                      products.reduce((acc, curr) => acc + curr.price, 0) * 0.8 + 15
                    ).toFixed(2)}
                  </p>
                </div>

                <div className="flex gap-3 pt-4">
                  <input
                    className="flex-1 bg-[#F0F0F0] border-none rounded-full py-3 px-5 outline-none focus:ring-1 ring-gray-300 transition-all text-sm"
                    type="text"
                    placeholder="Add a promo code"
                  />
                  <button className="bg-black text-white px-8 py-3 rounded-full font-bold hover:bg-gray-800 transition-colors cursor-pointer">
                    Apply
                  </button>
                </div>

                <button className="w-full bg-black text-white py-4 rounded-full mt-4 font-bold hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer shadow-lg">
                  Go to Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;