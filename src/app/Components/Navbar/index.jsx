import Link from "next/link";
import React from "react";
import { ShoppingCart, CircleUserRound, Search } from "lucide-react";
const Navbar = () => {
  return (
    <div>
      <div className=" flex px-30 items-center justify-between  py-6">
        <Link href={"/#"} className="font-extrabold text-3xl">
          SHOP.CO
        </Link>
        <div className="flex  gap-6 items-center">
          <div className="flex gap-4">
            <div className="relative group">
              <Link href="/shop">Shop</Link>
            </div>
            <Link href={"/onsale"}>On Sale</Link>
            <Link href={"/newarrivals"}>New Arrivals</Link>
            <Link href={"/brands"}>Brands</Link>
            <Link href={"/users"}>Workers</Link>
          </div>
          <div className="relative">
            <div className="absolute  pl-2 pt-2 items-center ">
              <Search className="text-gray-500" />
            </div>
            <input
              type="text"
              className="border-0  w-150 px-10  py-2 rounded-2xl bg-gray-100 "
              placeholder=" Search for Products..."
            />
          </div>
        </div>

        <div className="flex gap-4">
          <ShoppingCart />
          <CircleUserRound />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
