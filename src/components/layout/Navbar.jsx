import React from "react";
import logo from "../../../public/assets/images/logo.png";
import callIcon from "../../../public/assets/images/phone-icon.png";

const navLinks = [
  { name: "Home", href: "#", active: true },
  { name: "About", href: "#" },
  {
    name: "Services",
    dropdown: true,
    items: [
      { name: "Service One", href: "#" },
      { name: "Service Two", href: "#" },
    ],
  },
  { name: "Contact", href: "#" },
];

const Navbar = () => {
  return (
    <header className="w-full h-[80px] bg-gradient-to-r from-[#05071E] via-[#05071E] via-50% to-[#111A89] to-100%">
      <nav className="max-w-[1440px] h-full mx-auto px-[100px] flex items-center justify-between">
        {/* Logo */}
        <div className="w-[184.55px] h-[50.04px]">
          <img
            src={logo}
            alt="KeySystem Logo"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Navigation Links */}
        <ul className="flex gap-[55px] items-center text-white font-medium">
          {navLinks.map((link, index) =>
            link.dropdown ? (
              <li key={index} className="relative group cursor-pointer">
                <span className="flex items-center gap-1">
                  {link.name}
                  <svg
                    className="w-3 h-3 ml-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
                <ul className="absolute hidden group-hover:block mt-2 bg-white text-black rounded shadow-md p-2 min-w-[160px] z-10">
                  {link.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="px-4 py-2 hover:bg-gray-100 transition"
                    >
                      <a href={item.href}>{item.name}</a>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li
                key={index}
                className={`${
                  link.active ? "font-bold text-white" : "text-white"
                } hover:text-gray-300 transition`}
              >
                <a href={link.href}>{link.name}</a>
              </li>
            )
          )}
        </ul>

        {/* CTA */}
        <a
            href="tel:+2348184441404"
            className="w-[234.98px] h-[48.39px] rounded-full border border-[#4169E1] bg-gradient-to-br from-[#000080] via-[#4169E1] to-[#000080] text-white flex items-center justify-center gap-[13.63px] shadow-[0px_2.71px_14.9px_rgba(65,105,225,0.55)] hover:scale-105 transition-transform duration-200"
            >
            <img src={callIcon} alt="Call Icon" className="w-[24px] h-[24px]" />
            <span className="text-sm font-semibold">+234 818 444 1404</span>
            </a>
      </nav>
    </header>
  );
};

export default Navbar;
