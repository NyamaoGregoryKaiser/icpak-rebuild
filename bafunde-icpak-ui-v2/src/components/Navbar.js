"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher";


export default function Navbar({ onMenuToggle }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname(); // Get the current path

  const handleToggle = () => {
    const newState = !isMenuOpen;
    setIsMenuOpen(newState);
    if (onMenuToggle) {
      onMenuToggle(newState); // Notify parent about the menu state
    }
  };

  return (
    
    //MAIN NAVBAR SECTION
    <nav
  className={`relative bg-lightBackground dark:bg-darkBackground text-lightText dark:text-darkText font-large  transition-colors duration-100 ease-in-out ${
    isMenuOpen ? pathname === "/videos"
    ? "pb-60" // Increased padding for the videos page
    : "pb-40"
  : "pb-0"
  }`}
>

         {/* All navbar content */}
      <div
        id="navbarContent"
        className=" mx-auto max-w-[1200px] flex items-center lg:justify-between py-4"
      >
        {/* Logo */}
        <div className="flex items-center">
          <img src="./cpa_logo.png" alt="iCPAK Logo" className="h-14 ml-4 w-auto" />
        </div>

      
        {/* Hamburger/X Button (Always Outside Menu) */}

       { /* Hamburger menu position */}
        <div className="lg:hidden z-50  space-x-4 absolute right-4 flex items-center">
          <button
  onClick={handleToggle} // Call handleToggle
  className="text-xl focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? (
              // X Icon as Favicon
              <i
                className="fa-solid fa-times text-black dark:text-white mt-5"
                style={{ fontSize: "30px" }}
              ></i>
            ) : (
              // Hamburger Icon Styling
              <i
                className="fa-solid fa-bars text-black dark:text-white mt-4"
                style={{ fontSize: "50px" }}
              ></i>
            )}
          </button>

 {/* ThemeSwitcher for Small screens */}
 <div className=" lg:hidden w-full flex mt-5  ">
                <ThemeSwitcher />
              </div>
          
        </div>
       
        {/* Navigation Links */}
        <div
          id="navLinks"
          className={`absolute top-28 right-4 z-40 w-[180px]  lg:p-0 lg:static lg:w-auto lg:flex lg:space-x-8  ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <div className=" border-2 border-black dark:border-gold sm:border   lg:border-none lg:ml-0 lg:mb-0 ">
          <div className="flex flex-col  lg:flex-row lg:items-center lg:space-x-8 p-4 lg:p-0 sm:p-0 sm:pl-0 text-left">
            <Link
              id="home"
              href="/"
              className="block text-xl hover:text-gold px-2 py-1"
            >
              Home
            </Link>
            <Link
              id="videoSeries"
              href="/video-series"
              className="block text-xl hover:text-gold px-2 py-1"
            >
              Video Series
            </Link>
            <Link
              id="certifications"
              href="/certifications"
              className="block text-xl hover:text-gold px-2 py-1"
            >
              Certifications
            </Link>
            <Link
              id="products"
              href="/products"
              className="block text-xl hover:text-gold px-2 py-1"
            >
              Categories
            </Link>

           

            </div>
 {/* Buttons on Small Screens */}
 <div className="mb-4  lg:hidden px-4 space-y-2  ">
 {pathname === "/" ? (
                <>
              <button
                id="registerButton"
                className=" flex items-center text-[13px] lg:text-[17px] border border-black dark:border-white text-black dark:text-gold rounded-md  px-8 py-2 lg:px-3 lg:py-2 hover:bg-gold hover:text-black dark:hover:text-black transition"
              >
                Register
                <i
                  className="fa-solid fa-user-plus ml-2"
                  style={{ fontSize: "17px" }}
                ></i>
              </button>

              <button
                id="loginButton"
                className="flex items-center text-[13px] lg:text-[17px] text-black dark:text-black bg-gold rounded-md px-11 py-2 lg:px-4 lg:py-2 hover:bg-gold hover:text-black dark:hover:text-black transition"
              >
                Login
                <i
                  className="fa-solid fa-arrow-right-to-bracket text-mutedBlack  dark:text-black  dark:hover:text-black ml-2"
                  style={{ fontSize: "17px" }}
                ></i>
              </button>
              </>
            ) : pathname === "/videos" ? (
                <>
                
                  <Link
                    href="/dashboard"
                    className="flex items-center text-[13px] lg:text-[17px] text-black dark:text-black bg-gold rounded-md px-11 py-2 lg:px-6 lg:py-2  hover:bg-gold hover:text-black dark:hover:text-black transition"
                  >
                    Dashboard
                  </Link>
                 
                </>
              ) : null}

              </div>
            </div>
        </div>

       {/* Buttons on Large Screens */}
       <div className="hidden lg:flex items-center space-x-7">
       {pathname === "/" ? (
            <>
          <button
            id="registerButton"
            className="text-[13px] lg:text-[17px] border border-black dark:border-white text-black dark:text-gold rounded-md px-2 py-2 lg:px-3 lg:py-2 hover:bg-gold hover:text-black dark:hover:text-black transition"
          >
            Register
            <i
              className="fa-solid fa-user-plus ml-2"
              style={{ fontSize: "17px" }}
            ></i>
          </button>

          <button
            id="loginButton"
            className="text-[13px] lg:text-[17px] text-black dark:text-black bg-gold rounded-md px-2 py-2 lg:px-4 lg:py-2 hover:bg-gold hover:text-black dark:hover:text-black transition"
          >
            Login
            <i
              className="fa-solid fa-arrow-right-to-bracket text-mutedBlack  dark:text-black  dark:hover:text-black ml-2"
              style={{ fontSize: "17px" }}
            ></i>
          </button>
          </>
          ) : pathname === "/videos" || pathname === "/course" ? (
            <>
             <div className="flex items-center space-x-2">
              <i class="fa-solid fa-user" style={{ fontSize: "22px" }}
              ></i>
                <span className="text-black dark:text-white text-[13px] lg:text-[17px]">
                  Hello, <strong>Silvia</strong>
                </span>
              </div>
              <Link
                href="/dashboard"
                className="text-[13px] lg:text-[17px] text-black dark:text-black bg-gold rounded-md px-2 py-2 lg:px-4 lg:py-2 hover:bg-gold hover:text-black dark:hover:text-black transition"
              >
                Dashboard
              </Link>
             
            </>
          ) : null}
          <ThemeSwitcher />
        </div>
      </div>
    </nav>
  );
}