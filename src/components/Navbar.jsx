import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaGraduationCap, FaBars, FaTimes } from "react-icons/fa";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Courses", href: "#courses" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("Home");

  return (
    <header className="sticky top-4 z-50 mx-4 md:mx-8 lg:mx-12">
      <div className="flex items-center justify-between rounded-2xl bg-white px-5 py-3 shadow-md shadow-gray-200/70 md:px-8">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#55B592] text-white">
            <FaGraduationCap size={20} />
          </span>
          <span className="text-lg font-bold text-gray-800">EduLearn</span>
        </div>

        {/* Center Nav - Desktop */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setActive(link.label)}
              className={`group relative cursor-pointer text-sm font-medium text-gray-600 transition-colors duration-300 hover:text-[#55B592] ${
                active === link.label ? "text-[#55B592]" : ""
              }`}
            >
              {link.label}
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-[#55B592] transition-all duration-300 ${
                  active === link.label ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </a>
          ))}
        </nav>

        {/* Right Buttons - Desktop */}
        <div className="hidden items-center gap-3 md:flex">
          <button
            onClick={() => navigate("Signin")}
            className="cursor-pointer rounded-lg border border-gray-300 bg-white px-5 py-2 text-sm font-semibold text-gray-700 transition-all duration-300 hover:scale-105 hover:border-[#55B592] hover:text-[#55B592]"
          >
            Login
          </button>
          <button
            onClick={() => navigate("/signup")}
            className="cursor-pointer rounded-lg bg-[#55B592] px-5 py-2 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-[#469c7d] hover:shadow-lg"
          >
            Get Started
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="cursor-pointer text-gray-700 md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mt-2 flex flex-col gap-4 rounded-2xl bg-white px-6 py-5 shadow-md shadow-gray-200/70 md:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => {
                setActive(link.label);
                setMenuOpen(false);
              }}
              className="cursor-pointer text-sm font-medium text-gray-600 transition-colors duration-300 hover:text-[#55B592]"
            >
              {link.label}
            </a>
          ))}
          <div className="flex flex-col gap-3 pt-2">
            <button
              onClick={() => navigate("/signin")}
              className="cursor-pointer rounded-lg border border-gray-300 bg-white px-5 py-2 text-sm font-semibold text-gray-700 transition-all duration-300 hover:border-[#55B592] hover:text-[#55B592]"
            >
              Login
            </button>
            <button
              onClick={() => navigate("/signup")}
              className="cursor-pointer rounded-lg bg-[#55B592] px-5 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#469c7d] hover:shadow-lg"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
