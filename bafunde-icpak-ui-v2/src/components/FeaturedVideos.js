"use client";

import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";

export default function FeaturedVideosCarousel() {
  const videos = [
    {
      id: 1,
      image: "/car-1.jpg",
      title: "Taxation of Income",
      lectures: "3 Lectures",
      facilitator: "Jane Ngugi",
      rating: "4.6",
    },
    {
      id: 2,
      image: "/car-2.jpg",
      title: "Leadership in time of crisis",
      lectures: "5 Lectures",
      facilitator: "John Oloo",
      rating: "4.6",
    },
    {
      id: 3,
      image: "/car-1.jpg",
      title: "Risk Management",
      lectures: "3 Lectures",
      facilitator: "Faith Katheu",
      rating: "4.6",
    },
    {
      id: 4,
      image: "/car-3.jpg",
      title: "Trauma and Mental Health",
      lectures: "7 Lectures",
      facilitator: "Mark Masai",
      rating: "4.6",
    },
    {
      id: 5,
      image: "/car-1.jpg",
      title: "Course 5",
      lectures: "4 Lectures",
      facilitator: "Lucy Khalayi",
      rating: "4.8",
    },
    {
      id: 6,
      image: "/car-3.jpg",
      title: "Course 6",
      lectures: "2 Lectures",
      facilitator: "Peter Iraki",
      rating: "4.5",
    },
    {
      id: 7,
      image: "/car-2.jpg",
      title: "Course 7",
      lectures: "6 Lectures",
      facilitator: "Lucy Khalayi",
      rating: "5.0",
    },
    {
      id: 8,
      image: "/car-3.jpg",
      title: "Course 8",
      lectures: "8 Lectures",
      facilitator: "Peter Iraki",
      rating: "4.9",
    },
        {
      id: 1,
      image: "/car-1.jpg",
      title: "Taxation of Income",
      lectures: "3 Lectures",
      facilitator: "Jane Ngugi",
      rating: "4.6",
    },
    {
      id: 2,
      image: "/car-2.jpg",
      title: "Leadership in time of crisis",
      lectures: "5 Lectures",
      facilitator: "John Oloo",
      rating: "4.6",
    },
    {
      id: 3,
      image: "/car-1.jpg",
      title: "Risk Management",
      lectures: "3 Lectures",
      facilitator: "Faith Katheu",
      rating: "4.6",
    },
    {
      id: 4,
      image: "/car-3.jpg",
      title: "Trauma and Mental Health",
      lectures: "7 Lectures",
      facilitator: "Mark Masai",
      rating: "4.6",
    },
    {
      id: 5,
      image: "/car-1.jpg",
      title: "Course 5",
      lectures: "4 Lectures",
      facilitator: "Lucy Khalayi",
      rating: "4.8",
    },
    {
      id: 6,
      image: "/car-3.jpg",
      title: "Course 6",
      lectures: "2 Lectures",
      facilitator: "Peter Iraki",
      rating: "4.5",
    },
    {
      id: 7,
      image: "/car-2.jpg",
      title: "Course 7",
      lectures: "6 Lectures",
      facilitator: "Lucy Khalayi",
      rating: "5.0",
    },
    {
      id: 8,
      image: "/car-3.jpg",
      title: "Course 8",
      lectures: "8 Lectures",
      facilitator: "Peter Iraki",
      rating: "4.9",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const updateScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);

    return () => {
      window.removeEventListener("resize", updateScreenSize);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 120000); // 2 minutes

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handlePrev = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? videos.length - (isSmallScreen ? 4 : 8) : Math.max(prevIndex - (isSmallScreen ? 4 : 8), 0)
      );
      setFade(false);
    }, 500);
  };

  const handleNext = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex + (isSmallScreen ? 4 : 8) >= videos.length ? 0 : Math.min(prevIndex + (isSmallScreen ? 4 : 8), videos.length - 1)
      );
      setFade(false);
    }, 500);
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    trackMouse: true,
  });

  return (
    <section
      className="bg-lightBackground dark:bg-darkBackground text-lightText dark:text-darkText py-1 transition-colors duration-100 ease-in-out mt-12"
      {...(isSmallScreen ? swipeHandlers : {})}
    >
      <div className="container mx-auto max-w-[1200px] text-center">
        {/* Section Title */}
        <h2 className="text-orangeGold dark:text-gold font-bold text-3xl md:text-5xl mb-12">
          Featured Video Series
        </h2>

        {/* Carousel */}
        <div className="relative">
          {/* Carousel Wrapper */}
          <div className="flex items-center justify-center px-4 sm:px-6 md:px-8">
            <div
              className={`w-full max-w-[900px] sm:max-w-[900px] md:max-w-[900px] lg:max-w-[1080px] mx-auto transition-opacity duration-500 ${
                fade ? "opacity-0" : "opacity-100"
              }`}
            >
              {/* Video Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 md:grid-rows-2 gap-6 transition-opacity duration-500 max-w-[960px] sm:max-w-[960px] md:max-w-[960px] lg:max-w-[1080px] mx-auto">
              {videos.slice(currentIndex, currentIndex + (isSmallScreen ? 4 : 8)).map((video) => (

                  <div
                    key={video.id}
                    className="flex flex-col items-center space-y-4 text-center bg-gray-100 dark:bg-dullWhite rounded-lg shadow-lg pb-6"
                  >
                    {/* Video Image */}
                    <div className="relative">
                      <img
                        src={video.image}
                        alt={video.title}
                        className="w-full h-auto object-cover rounded-md"
                      />
                    </div>

                    {/* Video Info */}
                    <div className="mt-4 w-full text-left text-lightText dark:text-lightText pl-4 pb-4">
                      <h3 className="text-[14px] md:text-[17px] lg:text-[17px] font-bold whitespace-nowrap overflow-hidden text-ellipsis max-w-[235px] text-left">
                        {video.title}
                      </h3>
                      <p className="text-[13px]  md:text-[15px] lg:text-[16px] mt-2 flex items-center mb-2">
                        <i
                          className="fa-solid fa-clapperboard mr-3"
                          style={{ color: "#000", fontSize: "16px" }}
                        ></i>
                        {video.lectures}
                      </p>
                      <p className="text-[14px] md:text-[17px] lg:text-[17px] flex items-center mb-2">
                        <i
                          className="fa-solid fa-chalkboard-user mr-2"
                          style={{ color: "#000" }}
                        ></i>
                        {video.facilitator}
                      </p>

                      <div className="text-xs md:text-sm lg:text-sm font-bold flex items-center">
                        <i
                          className="fa-regular fa-star mr-3"
                          style={{ color: "#000000", fontSize: "17px" }}
                        ></i>
                        {video.rating}

                        <i
                          className="fa-solid fa-star mr-2 ml-3"
                          style={{ color: "#000000" }}
                        ></i>
                        <i
                          className="fa-solid fa-star mr-2"
                          style={{ color: "#000000" }}
                        ></i>
                        <i
                          className="fa-solid fa-star mr-2"
                          style={{ color: "#000000" }}
                        ></i>
                        <i
                          className="fa-solid fa-star-half-stroke mr-2"
                          style={{ color: "#000000" }}
                        ></i>
                      </div>
                    </div>

                    {/* Button */}
                    <button className=" text-sm mt-4 px-4 py-2 lg:px-8 lg:py-2 bg-black text-white font-bold rounded-md hover:bg-yellow-400 hover:text-black">
                      View Course
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Buttons - Hidden on Small Screens */}
          <div className="hidden md:block">
            <button
              onClick={handlePrev}
              className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gold text-black px-4 py-2 rounded-full hover:bg-yellow-500 transition"
            >
              ❮
            </button>
            <button
              onClick={handleNext}
              className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gold text-black px-4 py-2 rounded-full hover:bg-yellow-500 transition"
            >
              ❯
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
