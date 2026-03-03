"use client";

import React from "react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 px-4 text-center">
      
      {/* 404 rəqəmləri */}
      <h1 className="text-[10rem] font-extrabold text-gray-700 mb-6 drop-shadow-lg">
        404
      </h1>
      
      {/* Başlıq */}
      <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-300">
        Oops! Page Not Found
      </h2>
      
      {/* İzah */}
      <p className="text-gray-400 mb-10 max-w-md">
        The page you are looking for does not exist or has been moved.
        Please check the URL or return to the homepage.
      </p>

      {/* Geri Home button */}
      <Link
        href="/"
        className="inline-block bg-gray-800 text-gray-200 px-8 py-4 rounded-2xl text-lg font-semibold shadow-lg hover:bg-gray-700 transition duration-300 ease-in-out"
      >
        Go Back Home
      </Link>

      {/* Dekorativ line */}
      <div className="mt-12 w-40 h-1 bg-gray-600 rounded-full animate-pulse"></div>
    </div>
  );
};

export default NotFound;