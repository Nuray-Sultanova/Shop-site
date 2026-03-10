"use client";

import React from "react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 px-6 text-center">
      
      <h1 className="text-7xl sm:text-8xl md:text-[10rem] font-extrabold text-gray-800 mb-4 select-none">
        404
      </h1>
      
      <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 text-gray-300">
        Oops! Page Not Found
      </h2>
      
      <p className="text-gray-400 mb-10 text-sm sm:text-base max-w-[300px] sm:max-w-md mx-auto">
        The page you are looking for does not exist or has been moved.
      </p>

      <Link
        href="/"
        className="w-full sm:w-auto bg-gray-800 text-gray-200 px-10 py-4 rounded-2xl text-lg font-semibold hover:bg-gray-700 active:scale-95 transition duration-300"
      >
        Go Back Home
      </Link>

      <div className="mt-12 w-24 sm:w-40 h-1 bg-gray-700 rounded-full animate-pulse"></div>
    </div>
  );
};

export default NotFound;