"use client";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import Image from "next/image";
import {
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  Calendar,
} from "lucide-react";

const UserDetails = () => {
  const { id } = useParams();
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/users/${id}`)
      .then((res) => {
        setUser(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Xəta:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center font-bold italic animate-pulse">
          Loading Profile...
        </div>
      </div>
    );

  if (!user)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center text-red-500 font-bold">User not found!</div>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 mb-8 text-gray-500 hover:text-black transition-all font-medium cursor-pointer group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> 
          Back to Community
        </button>

        <div className="bg-white rounded-[40px] shadow-sm border border-gray-100 overflow-hidden">
          <div className="h-32 bg-[#F0EEED]"></div>

          <div className="px-8 pb-12">
            <div className="relative -mt-20 mb-6 flex justify-center md:justify-start">
              <div className="relative w-40 h-40 rounded-full border-8 border-white bg-[#F0EEED] shadow-md overflow-hidden">
                {/* Image komponenti və sizes propu əlavə edildi */}
                <Image
                  src={user.image}
                  alt={user.firstName}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 160px, 160px"
                />
              </div>
            </div>

            <div className="text-center md:text-left mb-10">
              <h1 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter">
                {user.firstName} {user.lastName}
              </h1>
              <p className="text-gray-400 text-lg font-medium flex items-center justify-center md:justify-start gap-2 mt-2">
                <Briefcase size={18} /> {user?.company?.title} at {user?.company?.name}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Detal Blokları */}
              {[
                { icon: <Mail size={20} />, label: "Email Address", value: user.email },
                { icon: <Phone size={20} />, label: "Phone Number", value: user.phone },
                { icon: <MapPin size={20} />, label: "Location", value: `${user?.address?.city}, ${user?.address?.state}` },
                { icon: <Calendar size={20} />, label: "Birth Date", value: `${user.birthDate} (${user.age} years old)` }
              ].map((item, index) => (
                <div key={index} className="bg-[#F9F9F9] p-5 rounded-3xl flex items-center gap-4 border border-transparent hover:border-gray-200 transition-colors">
                  <div className="bg-white p-3 rounded-2xl shadow-sm">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase text-gray-400 italic tracking-widest">
                      {item.label}
                    </p>
                    <p className="font-bold">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;