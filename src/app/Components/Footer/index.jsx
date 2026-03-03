import React from "react";
import Link from "next/link";
import { Twitter, Facebook, Instagram, Github } from "lucide-react";

const Footer = () => {

  const footerSections = [
    {
      title: "Company",
      links: [
        { name: "About", href: "/about" },
        { name: "Features", href: "/features" },
        { name: "Works", href: "/works" },
        { name: "Career", href: "/career" },
      ],
    },
    {
      title: "Help",
      links: [
        { name: "Customer Support", href: "/support" },
        { name: "Delivery Details", href: "/delivery" },
        { name: "Terms & Conditions", href: "/terms" },
        { name: "Privacy Policy", href: "/privacy" },
      ],
    },
    {
      title: "FAQ",
      links: [
        { name: "Account", href: "/account" },
        { name: "Manage Deliveries", href: "/manage-deliveries" },
        { name: "Orders", href: "/orders" },
        { name: "Payments", href: "/payments" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Free eBooks", href: "/ebooks" },
        { name: "Development Tutorial", href: "/tutorials" },
        { name: "How to - Blog", href: "/blog" },
        { name: "Youtube Playlist", href: "/youtube" },
      ],
    },
  ];

  return (
    <footer className="bg-[#F0F0F0] pt-20 pb-10 px-4 md:px-10 lg:px-20 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Sol Brend Bölməsi */}
          <div className="lg:col-span-1">
            <h2 className="font-black text-3xl mb-4 tracking-tighter">
              SHOP.CO
            </h2>
            <p className="text-gray-600 mb-6 text-sm leading-relaxed">
              We have clothes that suits your style and help you to build your
              own unique personality.
            </p>
            {/* Sosial Linklər */}
            <div className="flex gap-3">
              {[
                { Icon: Twitter, href: "https://twitter.com" },
                { Icon: Facebook, href: "https://facebook.com" },
                { Icon: Instagram, href: "https://instagram.com" },
                { Icon: Github, href: "https://github.com" },
              ].map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  target="_blank"
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 bg-white hover:bg-black hover:text-white transition-all duration-300"
                >
                  <social.Icon size={18} />
                </Link>
              ))}
            </div>
          </div>

          {/* Dinamik Link Bölmələri */}
          {footerSections.map((section, idx) => (
            <div key={idx}>
              <h4 className="font-bold uppercase mb-6 tracking-[0.2em] text-sm text-black">
                {section.title}
              </h4>
              <ul className="space-y-4">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-black hover:pl-1 transition-all duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Alt Müəllif Hüquqları Hissəsi */}
        <div className="border-t border-gray-200 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            SHOP.CO © 2000-2023, All Rights Reserved
          </p>
          <div className="flex gap-4 items-center">
            {/* Ödəniş ikonları yerinə kiçik placeholder-lər və ya real şəkillər qoya bilərsən */}
            <img src="/visa.svg" alt="Visa" className="h-6 opacity-70" />
            <img
              src="/mastercard.svg"
              alt="Mastercard"
              className="h-6 opacity-70"
            />
            <img src="/paypal.svg" alt="Paypal" className="h-6 opacity-70" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
