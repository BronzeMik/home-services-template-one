// components/Header.js
import Link from "next/link";
import ContactBanner from "./BannerComponent";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaChevronDown } from "react-icons/fa";  // Importing Chevron Down Icon
import { useState } from "react";
import Image from "next/image";
import logo from "../../../public/logo.png";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <>
      <header className="w-full bg-white text-black pb-4 border-b-2 border-slate-100 shadow-sm flex justify-between items-center">
        <Image src={logo} alt="Logo" className="w-[200px] mx-auto" />
        <GiHamburgerMenu
          className="w-[40%] mt-6 mr-5 text-2xl md:hidden"
          onClick={() => setShowMenu(!showMenu)}
        />
        {/* Mobile nav */}
        <ul
          className={`text-lg z-20 ${
            showMenu ? "absolute" : "hidden"
          } top-36 left-0 w-[100vw] bg-blue-900 flex flex-col items-center text-white md:hidden`}
        >
          <li className="py-3 border-b-2 border-b-white w-[100vw] text-center hover:text-blue-800 hover:bg-white">
            <Link href="/">Home</Link>
          </li>
          {/* Dropdown for mobile nav */}
          <li
            className="relative py-3 border-b-2 border-b-white w-[100vw] text-center hover:text-blue-800 hover:bg-white"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <button className="w-full flex justify-center items-center">Services <FaChevronDown className="ml-2" /></button>
            {showDropdown && (
              <ul className="absolute left-0 top-full w-full bg-blue-900 text-white">
                <li className="py-2 w-full text-center hover:bg-white hover:text-blue-900">
                  <Link href="/services/electrical">Electrical</Link>
                </li>
                <li className="py-2 w-full text-center hover:bg-white hover:text-blue-900">
                  <Link href="/services/plumbing">Plumbing</Link>
                </li>
                <li className="py-2 w-full text-center hover:bg-white hover:text-blue-900">
                  <Link href="/services/carpentry">Carpentry</Link>
                </li>
                <li className="py-2 w-full text-center hover:bg-white hover:text-blue-900">
                  <Link href="/services/roofing">Roofing</Link>
                </li>
              </ul>
            )}
          </li>
          <li className="py-3 w-[100vw] text-center hover:text-blue-800 hover:bg-white">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        <nav className="hidden container md:flex justify-end items-center md:w-full pb-3">
          <div className="hidden md:flex md:flex-col md:w-[90%]">
            <ContactBanner />
            {/* Desktop nav */}
            <ul className="space-x-4 text-lg hidden md:flex md:justify-end md:items-center md:pr-14 md:pt-6 gap-8">
              <li className="group relative">
                <Link href="/" className="uppercase pb-2 font-bold hover:text-blue-900 hover:border-b-2 hover:border-b-blue-900 transition duration-700 ease-in-out">
                  Home
                </Link>
              </li>
              <li className="group relative">
                <Link href="/about" className="uppercase pb-2 font-bold hover:text-blue-900 hover:border-b-2 hover:border-b-blue-900 transition duration-700 ease-in-out">
                  About Us
                </Link>
              </li>
              {/* Dropdown for desktop nav */}
              <li className="relative group" onClick={() => setShowDropdown(!showDropdown)}>
                <button className="flex items-center uppercase font-bold hover:text-blue-900 hover:border-b-2 hover:border-b-blue-900 transition duration-700 ease-in-out">
                  Services <FaChevronDown className="ml-2" />
                </button>
                {showDropdown && (
                  <ul className="absolute left-0 z-50 top-8 w-40 bg-white shadow-lg border border-gray-200">
                    <li className="py-2 px-4 hover:bg-blue-800 hover:text-white">
                      <Link href="/services/electrical">Electrical</Link>
                    </li>
                    <li className="py-2 px-4 hover:bg-blue-800 hover:text-white">
                      <Link href="/services/plumbing">Plumbing</Link>
                    </li>
                    <li className="py-2 px-4 hover:bg-blue-800 hover:text-white">
                      <Link href="/services/carpentry">Carpentry</Link>
                    </li>
                    <li className="py-2 px-4 hover:bg-blue-800 hover:text-white">
                      <Link href="/services/roofing">Roofing</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className="group relative">
                <Link href="/contact" className="uppercase pb-2 font-bold hover:text-blue-900 hover:border-b-2 hover:border-b-blue-900 transition duration-700 ease-in-out">
                  Contact
                </Link>
                

              </li>
              <li><button className="bg-blue-900 hover:bg-gradient-to-l hover:from-cyan-500 hover:to-blue-800 text-white px-6 py-3">Client Login</button></li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
