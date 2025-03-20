import React from "react";

export default function HeroSection({ isMenuOpen }) {
  return (
    <section
      className={`${
        isMenuOpen ? "mt-48" : "mt-0"
      } bg-lightBackground dark:bg-darkBackground text-lightText dark:text-darkText h-auto flex items-center justify-center px-6 py-14 md:py-10 transition-colors duration-100 ease-in-out relative`}
    >
      {/* Mobile Background Image */}
      <div className="absolute inset-0 md:hidden">
        <img
          src="./small.png"
          alt="Mobile Background"
          className="absolute inset-0 w-100 h-100 object-contain opacity-30 md:hidden"
        />
      </div>

      <div className="container mx-auto max-w-[1200px] flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-10 leading-tight relative">
        {/* Left Section: Text and Search */}
        <div className="flex flex-col space-y-8 max-w-2xl z-10">
          {/* Heading */}
          <h1
            id="headingOne"
            className="text-black dark:text-gold text-2xl md:text-6xl font-bold mt-6 text-center md:text-left"
          >
            Earn your CPDs effortlessly anywhere, any time!
          </h1>

          {/* Subheading */}
          <p className="text-black dark:text-white text-[17px] md:text-[17px] py-4 font-medium text-center md:text-left mt-0 mb-0">
  Explore tailored courses and certifications to stay current with industry trends. 
  Learn at your own pace and kickstart your professional growth now.
</p>


          {/* Search and Button Section */}
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 w-full">
            {/* Search Bar */}
            <div className="flex items-center bg-dullerWhite dark:bg-newerBlue border border-gray-300 dark:border-white rounded-lg overflow-hidden w-full">
              <input
                type="text"
                placeholder="Search for courses"
                className="px-4 py-2 lg:px-10 lg:py-4 text-black dark:text-white text-[15px] bg-transparent focus:outline-none w-full"
              />
              <button className="px-3 py-2 bg-transparent text-mutedBlack dark:text-white font-medium rounded-r-lg">
                <i
                  className="fa-solid fa-magnifying-glass"
                  style={{ fontSize: "18px" }}
                ></i>
              </button>
            </div>

            {/* Get Started Button */}
            <button className="bg-gold text-[15px] text-black px-6 py-3 lg:px-6 lg:py-3 rounded-lg font-semibold hover:bg-yellow-500 transition whitespace-nowrap">
              Get Started
            </button>
          </div>
        </div>

        {/* Right Section: Illustration */}
        <div className="hidden md:flex justify-center md:justify-end w-full md:w-1/2">
          <img
            src="./small.PNG"
            alt="Woman at a laptop"
            className="max-w-full h-auto md:max-w-lg"
          />
        </div>
      </div>
    </section>
  );
}
