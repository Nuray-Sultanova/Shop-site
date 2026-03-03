"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

import Link from "next/link";
const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/users")
      .then((res) => {
        console.log(res.data.users);
        setUsers(res.data.users);
      })
      .catch((err) => console.log("xeta:", err));
  }, []);
  return (
    <div className="my-10">
      <h1 className="text-center font-extrabold text-4xl">Users List</h1>
      <div className="grid grid-cols-5 gap-5 px-30 py-10 ">
        {users.map((user) => {
          return (
            <div
              key={user.id}
              className="grid grid-cols-1 border border-gray-200 p-4 relative rounded-2xl bg-white text-black hover:bg-black hover:text-white transition-all ease-in-out cursor-pointer group"
            >
              <Link
                href={"/users/" + user.id}
                className="absolute inset-0 "
              ></Link>
              <p>
                {user.firstName} {user.lastName}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Users;
