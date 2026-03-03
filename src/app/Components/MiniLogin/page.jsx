import React from "react";
import { Mail } from "lucide-react";

const MiniLogin = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-10 -mb-20 relative ">
      <div className="bg-black rounded md:rounded-[40px] py-9 px-6 md:px-16 flex flex-col lg:flex-row justify-between items-center gap-8 shadow-xl">
        
        {/* Sol tərəf: Başlıq */}
        <div className="lg:max-w-137.5">
          <h2 className="text-3xl md:text-5xl font-black text-white leading-tight uppercase italic italic-none tracking-tighter">
            STAY UP TO DATE ABOUT OUR LATEST OFFERS
          </h2>
        </div>

        {/* Sağ tərəf: Form hissəsi */}
        <div className="w-full md:w-87.5 flex flex-col gap-3">
          
          {/* Email Inputu */}
          <div className="relative group">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <Mail className="text-gray-400 group-focus-within:text-black transition-colors" size={20} />
            </div>
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full bg-white text-black py-3 pl-12 pr-5 rounded-full outline-none focus:ring-2 ring-gray-300 transition-all text-sm md:text-base font-medium"
            />
          </div>

          {/* Abunə Ol Düyməsi */}
          <button className="w-full bg-white text-black py-3 rounded-full font-bold hover:bg-gray-200 transition-all active:scale-95 text-sm md:text-base cursor-pointer">
            Subscribe to Newsletter
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default MiniLogin;