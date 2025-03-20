import React from "react";

export default function CallToAction() {
  return (
    <section className="bg-lightBackground dark:bg-darkBackground text-lightText dark:text-darkText transition-colors duration-100 ease-in-out py-16 px-6">
      <div className="container mx-auto max-w-[1200px] flex flex-col md:flex-row items-center justify-between lg:space-y-12 md:space-y-0 gap-6 lg:gap-12">
        {/* Left: Image Section */}
        <div className="relative flex items-center justify-center w-full md:w-1/2">
          <img
            src="/woman.jpg" // Replace with the actual image path
            alt="Woman using laptop"
            className="rounded-lg shadow-lg object-cover w-full"
          />

          {/* Play Button Overlay */}
          <div className="absolute top-0 inset-0 flex justify-center items-center">
            <i
              className="fa-solid fa-play"
              style={{ color: "#e0b23a", fontSize: "50px" }}
            ></i>
          </div>
        </div>

        {/* Right: Text and Button Section */}
        <div className="w-full md:w-1/2 flex flex-col items-center text-left md:text-center space-y-6 lg:mt-8 sm:mt-0">
        <p className="text-sm sm:text-sm text-center md:text-xl leading-relaxed">
          Take the next step towards your continuous professional development
          goals with ICPAK e-learning.
        </p>

            <button className="bg-gold text-[15px] md:text-[15px] text-black px-9 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition">
              Start Now
            </button>
          </div>

      </div>
    </section>
  );
}