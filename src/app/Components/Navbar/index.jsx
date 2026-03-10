"use client";

import Link from "next/link";
import React, { useState } from "react";
import { ShoppingCart, CircleUserRound, Search, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white sticky top-0 z-50 border-b border-gray-100 shadow-sm">
      <div className="flex px-4 lg:px-30 items-center justify-between py-5 lg:py-6 gap-4 max-w-360 mx-auto">
        
        <div className="lg:hidden cursor-pointer p-1" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </div>

        <Link href="/" className="font-extrabold text-2xl lg:text-3xl shrink-0 tracking-tighter">
          SHOP.CO
        </Link>

        <div className="hidden lg:flex gap-8 items-center">
          <div className="flex gap-6 text-[16px] font-medium text-black">
            <Link href="/shop" className="hover:opacity-60 transition">Shop</Link>
            <Link href="/onsale" className="hover:opacity-60 transition whitespace-nowrap">On Sale</Link>
            <Link href="/newarrivals" className="hover:opacity-60 transition whitespace-nowrap">New Arrivals</Link>
            <Link href="/brands" className="hover:opacity-60 transition">Brands</Link>
            <Link href="/users" className="hover:opacity-60 transition text-black">Workers</Link>
          </div>
        </div>

        <div className="hidden md:flex relative flex-1 max-w-125 mx-4">
          <div className="absolute left-4 top-1/2 -translate-y-1/2">
            <Search className="text-gray-400 w-5 h-5" />
          </div>
          <input
            type="text"
            className="w-full pl-12 pr-4 py-3 rounded-full bg-[#F0F0F0] border-none focus:ring-1 focus:ring-gray-300 outline-none text-sm"
            placeholder="Search for products..."
          />
        </div>

        <div className="flex items-center gap-3 lg:gap-5 shrink-0">
          <button className="md:hidden p-1">
            <Search className="w-6 h-6 text-black" />
          </button>
          
          <Link href="/cart" className="p-1">
            <ShoppingCart className="w-6 h-6 text-black hover:scale-110 transition" />
          </Link>
          
          <Link href="/login" className="p-1">
            <CircleUserRound className="w-6 h-6 text-black hover:scale-110 transition" />
          </Link>
        </div>
      </div>

      <div 
        className={`lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 transition-all duration-300 ease-in-out z-40 ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 invisible pointer-events-none"
        }`}
      >
        <div className="flex flex-col p-6 gap-5 font-semibold text-lg text-black">
          <Link href="/shop" onClick={() => setIsOpen(false)} className="hover:pl-2 transition-all">Shop</Link>
          <Link href="/onsale" onClick={() => setIsOpen(false)} className="hover:pl-2 transition-all">On Sale</Link>
          <Link href="/newarrivals" onClick={() => setIsOpen(false)} className="hover:pl-2 transition-all">New Arrivals</Link>
          <Link href="/brands" onClick={() => setIsOpen(false)} className="hover:pl-2 transition-all">Brands</Link>
          <Link href="/users" onClick={() => setIsOpen(false)} className="hover:pl-2 transition-all text-black">Workers</Link>
          
          <div className="relative mt-2">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-100 border-none outline-none text-sm"
              placeholder="Search products..."
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;