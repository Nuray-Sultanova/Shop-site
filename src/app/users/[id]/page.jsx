"use client";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
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
  const router = useRouter(); // Geri qayıtmaq üçün
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
      <div className="p-20 text-center font-bold italic">
        Loading Profile...
      </div>
    );
  if (!user)
    return <div className="p-20 text-center text-red-500">User not found!</div>;

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Geri qayıtma düyməsi */}
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 mb-8 text-gray-500 hover:text-black transition-all font-medium cursor-pointer"
        >
          <ArrowLeft size={20} /> Back to Community
        </button>

        {/* Əsas Profil Kartı */}
        <div className="bg-white rounded-4xl shadow-sm border border-gray-100 overflow-hidden">
          {/* Üst rəngli hissə (Banner əvəzi) */}
          <div className="h-32 bg-[#F0EEED]"></div>

          <div className="px-8 pb-12">
            {/* Profil Şəkli */}
            <div className="relative -mt-16 mb-6 flex justify-center md:justify-start">
              <img
                src={user.image}
                alt={user.firstName}
                className="w-40 h-40 rounded-full border-8 border-white bg-[#F0EEED] shadow-md"
              />
            </div>

            {/* Ad və Başlıq */}
            <div className="text-center md:text-left mb-10">
              <h1 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter">
                {user.firstName} {user.lastName}
              </h1>
              <p className="text-gray-400 text-lg font-medium flex items-center justify-center md:justify-start gap-2 mt-2">
                <Briefcase size={18} /> {user.company.title} at{" "}
                {user.company.name}
              </p>
            </div>

            {/* Detal Grid-i */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Email Blok */}
              <div className="bg-[#F9F9F9] p-5 rounded-2xl flex items-center gap-4">
                <div className="bg-white p-3 rounded-xl shadow-sm">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase text-gray-400 italic">
                    Email Address
                  </p>
                  <p className="font-bold">{user.email}</p>
                </div>
              </div>

              {/* Telefon Blok */}
              <div className="bg-[#F9F9F9] p-5 rounded-2xl flex items-center gap-4">
                <div className="bg-white p-3 rounded-xl shadow-sm">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase text-gray-400 italic">
                    Phone Number
                  </p>
                  <p className="font-bold">{user.phone}</p>
                </div>
              </div>

              {/* Ünvan Blok */}
              <div className="bg-[#F9F9F9] p-5 rounded-2xl flex items-center gap-4">
                <div className="bg-white p-3 rounded-xl shadow-sm">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase text-gray-400 italic">
                    Location
                  </p>
                  <p className="font-bold">
                    {user.address.city}, {user.address.state}
                  </p>
                </div>
              </div>

              {/* Yaş Blok */}
              <div className="bg-[#F9F9F9] p-5 rounded-2xl flex items-center gap-4">
                <div className="bg-white p-3 rounded-xl shadow-sm">
                  <Calendar size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase text-gray-400 italic">
                    Birth Date
                  </p>
                  <p className="font-bold">
                    {user.birthDate} ({user.age} years old)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
