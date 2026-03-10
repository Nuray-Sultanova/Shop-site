"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/users")
      .then((res) => {
        setUsers(res.data.users);
        setLoading(false);
      })
      .catch((err) => {
        console.log("Error:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-black"></div>
      </div>
    );
  }

  return (
    <div className="my-10 px-6 lg:px-20 max-w-7xl mx-auto">
      <h1 className="text-center font-black text-3xl md:text-5xl uppercase italic tracking-tighter mb-10">
        Our Workers
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {users.map((user) => (
          <div
            key={user.id}
            className="group relative border border-gray-100 p-6 rounded-3xl bg-white text-black hover:bg-black hover:text-white transition-all duration-300 ease-in-out cursor-pointer shadow-sm hover:shadow-xl flex flex-col items-center text-center"
          >
            {/* Link kartın tamamını əhatə edir */}
            <Link href={"/users/" + user.id} className="absolute inset-0 z-10"></Link>
            
            {/* İstifadəçi Şəkli */}
            <div className="w-20 h-20 bg-gray-100 rounded-full mb-4 overflow-hidden group-hover:bg-gray-800 transition-colors">
              <img 
                src={user.image} 
                alt={user.firstName} 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="z-0">
              <p className="font-bold text-lg leading-tight">
                {user.firstName} {user.lastName}
              </p>
              <p className="text-sm text-gray-500 group-hover:text-gray-400 mt-1">
                {user.company?.title || "Staff Member"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;