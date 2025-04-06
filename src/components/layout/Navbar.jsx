import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

// Note: Adjust these import paths to match your project structure
const logo = "/assets/images/logo.png";
const callIcon = "/assets/images/phone-icon.png";

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
  const [menuOpen, setMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);

  // Handle click outside to close mobile menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  // Set body overflow based on menu state
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  // Toggle desktop dropdown on click
  const toggleDesktopDropdown = (index, e) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  // Toggle mobile dropdown visibility
  const toggleMobileDropdown = (index) => {
    setActiveMobileDropdown(activeMobileDropdown === index ? null : index);
  };

  // Close menu when clicking on a non-dropdown mobile menu item
  const handleMobileItemClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="w-full h-[80px] bg-gradient-to-r from-[#05071E] via-[#05071E] via-50% to-[#111A89] fixed top-0 z-40">
      <nav className="max-w-[1440px] h-full mx-auto px-[20px] lg:px-[100px] flex items-center justify-between">
        {/* Logo */}
        <div className="w-[160px] h-[50px] z-30 relative">
          <img src={logo} alt="KeySystem Logo" className="w-full h-full object-contain" />
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex gap-[55px] items-center text-white font-medium">
          {navLinks.map((link, index) =>
            link.dropdown ? (
              <li 
                key={index} 
                className="relative cursor-pointer"
                tabIndex={0}
                aria-expanded={activeDropdown === index}
                aria-haspopup="true"
              >
                <span 
                  className="flex items-center gap-1"
                  onClick={(e) => toggleDesktopDropdown(index, e)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      toggleDesktopDropdown(index, e);
                    }
                  }}
                >
                  {link.name}
                  <svg
                    className="w-3 h-3 ml-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    onClick={(e) => toggleDesktopDropdown(index, e)}
                  >
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </span>

                {/* Desktop Dropdown Menu */}
                {activeDropdown === index && (
                  <ul 
                    className="absolute top-full left-0 mt-2 bg-white text-black rounded shadow-md py-2 min-w-[160px] z-50"
                    role="menu"
                  >
                    {link.items.map((item, idx) => (
                      <li key={idx} className="px-4 py-2 hover:bg-gray-100" role="menuitem">
                        <a 
                          href={item.href}
                          onClick={() => setActiveDropdown(null)}
                          tabIndex={0}
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
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

        {/* CTA (Desktop only) */}
        <a
          href="tel:+2348184441404"
          className="hidden lg:flex w-[234.98px] h-[48.39px] rounded-full border border-[#4169E1] bg-gradient-to-br from-[#000080] via-[#4169E1] to-[#000080] text-white items-center justify-center gap-[13.63px] shadow-[0px_2.71px_14.9px_rgba(65,105,225,0.55)] hover:scale-105 transition-transform duration-200"
        >
          <img src={callIcon} alt="Call Icon" className="w-[24px] h-[24px]" />
          <span className="text-sm font-semibold">+234 818 444 1404</span>
        </a>

        {/* Hamburger Menu */}
        <button
          className="lg:hidden text-white text-2xl z-50 relative"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              ref={mobileMenuRef}
              key="mobile-menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="fixed top-0 right-0 w-[80%] h-screen bg-[#05071E] z-40 flex flex-col justify-center px-6 text-white overflow-y-auto"
              role="dialog"
              aria-modal="true"
            >
              <div className="flex flex-col items-center w-full">
                <ul className="flex flex-col gap-8 text-lg font-semibold items-center w-full">
                  {navLinks.map((link, index) =>
                    link.dropdown ? (
                      <li key={index} className="w-full text-center">
                        <div 
                          className="cursor-pointer flex items-center justify-center gap-2"
                          onClick={() => toggleMobileDropdown(index)}
                        >
                          {link.name}
                          <svg
                            className={`w-4 h-4 transition-transform ${activeMobileDropdown === index ? "rotate-180" : ""}`}
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                          >
                            <path d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                        
                        <AnimatePresence>
                          {activeMobileDropdown === index && (
                            <motion.ul 
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="mt-2 space-y-2 text-sm font-normal overflow-hidden"
                            >
                              {link.items.map((item, idx) => (
                                <li key={idx} className="py-1">
                                  <a 
                                    href={item.href}
                                    onClick={handleMobileItemClick}
                                    className="hover:text-gray-300"
                                  >
                                    {item.name}
                                  </a>
                                </li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </li>
                    ) : (
                      <li key={index} className="w-full text-center">
                        <a 
                          href={link.href}
                          onClick={handleMobileItemClick}
                          className="hover:text-gray-300"
                        >
                          {link.name}
                        </a>
                      </li>
                    )
                  )}
                </ul>

                {/* CTA - properly centered in mobile */}
                <a
                  href="tel:+2348184441404"
                  className="mt-10 w-[90%] h-[48.39px] rounded-full border border-[#4169E1] bg-gradient-to-br from-[#000080] via-[#4169E1] to-[#000080] text-white flex items-center justify-center gap-[13.63px] shadow-[0px_2.71px_14.9px_rgba(65,105,225,0.55)] hover:scale-105 transition-transform duration-200"
                >
                  <img src={callIcon} alt="Call Icon" className="w-[24px] h-[24px]" />
                  <span className="text-sm font-semibold">+234 818 444 1404</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;