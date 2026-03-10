import React from "react";
import Link from "next/link";
import { Twitter, Facebook, Instagram, Github, CreditCard } from "lucide-react";

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
    <footer className="bg-[#F0F0F1] pt-12 lg:pt-20 pb-10 px-6 lg:px-20 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10 lg:gap-12">
          
          <div className="lg:col-span-1 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h2 className="font-black text-3xl mb-4 tracking-tighter italic text-black">
              SHOP.CO
            </h2>
            <p className="text-gray-600 mb-6 text-sm leading-relaxed max-w-62.5">
              We have clothes that suits your style and help you to build your
              own unique personality.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: Twitter, href: "#" },
                { Icon: Facebook, href: "#" },
                { Icon: Instagram, href: "#" },
                { Icon: Github, href: "#" },
              ].map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 bg-white hover:bg-black hover:text-white transition-all duration-300"
                >
                  <social.Icon size={18} />
                </Link>
              ))}
            </div>
          </div>

          <div className="md:col-span-2 lg:col-span-4 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {footerSections.map((section, idx) => (
              <div key={idx}>
                <h4 className="font-bold uppercase mb-4 lg:mb-6 tracking-widest text-sm text-black">
                  {section.title}
                </h4>
                <ul className="space-y-3 lg:space-y-4">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <Link
                        href={link.href}
                        className="text-gray-500 hover:text-black transition-colors text-sm"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 lg:mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-xs lg:text-sm text-center">
            SHOP.CO © 2000-2023, All Rights Reserved
          </p>
          
          <div className="flex items-center gap-2 text-gray-500">
            <span className="text-xs font-medium uppercase tracking-wider">Secure Payment</span>
            <CreditCard className="w-6 h-6 text-black" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;