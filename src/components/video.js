import React from "react";

export default function VideoSection() {
  return (
    <section className="flex justify-center items-center bg-blueCustom py-16 px-6 mt-20">
      <div className="relative w-full max-w-4xl">
        {/* Background Image */}
        <img
          src="/docs.jpeg" 
          alt="Video Thumbnail"
          className="rounded-lg shadow-lg object-cover w-full h-[500px]"
        />
        {/* Play Button */}
        <div className="absolute inset-0 flex justify-center items-center">
        <img
            src="./play-button.png"
            alt="Register Icon"
            className="h-20 w-21 mr-2"
          />  
                <button
          id="registerButton"
        >
         
        </button>
        </div>
      </div>
    </section>
  );
}
