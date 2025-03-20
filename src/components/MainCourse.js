import React from "react";

export default function MainCourse() {
  return (
    <div>
      {/* Video Player */}
      <div className="bg-lightBackground dark:bg-darkBackground text-lightText dark:text-darkText p-4 mb-0 pb-0 rounded-lg shadow-lg overflow-hidden transition-colors duration-100 ease-in-out">
        <div className="relative w-full h-72 sm:h-96 bg-black">
          <img
            src="/community.jpeg"
            alt="Main Video"
            className="w-full h-full object-cover"
          />
         
        </div>
        {/* Video Title */}
        
      </div>

       {/* Video Actions in small screens */}
       <div className="lg:hidden  mt-4">
        <p className="text-[27px]  font-bold text-left text-gold pt-2">
        Trauma and Mental Health Full Course
        </p>
      </div>

      {/* Video Actions in big screens */}
      <div className="hidden lg:flex items-center mt-4">
        <p className="text-[17px] lg:text-2xl font-bold text-center text-gold pt-4">
        Trauma and Mental Health Full Course        </p>
      </div>
    </div>
  );
}
