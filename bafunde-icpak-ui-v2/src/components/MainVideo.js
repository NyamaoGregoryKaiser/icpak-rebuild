import React from "react";
import VideoActionButtons from "./VideoActionButtons";

export default function MainVideo() {
  return (
    <div>
      {/* Video Player */}
      <div className="bg-lightBackground dark:bg-darkBackground text-lightText dark:text-darkText p-4 rounded-lg shadow-lg overflow-hidden transition-colors duration-100 ease-in-out">
        <div className="relative w-full h-72 sm:h-96 bg-black">
          <img
            src="/videothread.jpeg"
            alt="Main Video"
            className="w-full h-full object-cover"
          />
          <button className="absolute inset-0 flex items-center justify-center group">
            <div className="w-16 h-16 rounded-full bg-black opacity-70 flex items-center justify-center transform transition-transform duration-300 group-hover:scale-125">
              <i className="fa-solid fa-play text-white text-4xl transform transition-transform duration-300 group-hover:scale-110"></i>
            </div>
          </button>
        </div>
        {/* Video Title */}
        <div className="pt-4 pb-4">
          <h3 className="text-lg font-bold">Trauma and Mental Health</h3>
        </div>
      </div>

       {/* Video Actions in small screens */}
       <div className="lg:hidden  mt-4">
        <p className="text-[23px]  font-bold text-left text-gold pt-4">
         Mental Health Series Promo
        </p>
        <VideoActionButtons likes="100" comments="2" />
      </div>

      {/* Video Actions in big screens */}
      <div className="hidden lg:flex items-center mt-4">
        <p className="text-[17px] lg:text-2xl font-bold text-center text-gold pt-4">
         Mental Health Series Promo
        </p>
        <VideoActionButtons likes="100" comments="2" />
      </div>
    </div>
  );
}
