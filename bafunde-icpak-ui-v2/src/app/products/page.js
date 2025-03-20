"use client";  // Ensure this is a client component

import React, { useEffect, useRef, useState } from "react";
import { categories } from "../../components/products"; // Import the categories array instead

const ProductsPage = () => {
  const containerRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 2; // 2 rows, 1 column
  const totalPages = Math.ceil(categories.length / itemsPerPage);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
    }, 3000);
    return () => clearInterval(interval);
  }, [totalPages]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        left: currentPage * containerRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  }, [currentPage]);

  return (
    <div className="container mx-auto px-12 py-8">
      <h1 className="text-3xl font-bold mb-4">Categories</h1>
      <div className="bg-gray-900 p-4 rounded-lg overflow-hidden sm:hidden">
        <div
          ref={containerRef}
          className="flex overflow-x-scroll scroll-smooth snap-x snap-mandatory no-scrollbar"
          style={{ scrollBehavior: "smooth" }}
        >
          {Array.from({ length: totalPages }).map((_, pageIndex) => (
            <div key={pageIndex} className="min-w-full grid grid-rows-2 grid-cols-1 gap-2 p-4">
              {categories
                .slice(pageIndex * itemsPerPage, (pageIndex + 1) * itemsPerPage)
                .map((category, index) => (
                  <div key={index} className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                    <div className="text-4xl mb-3">{category.icon}</div>
                    <h2 className="text-xl font-semibold text-white">{category.name}</h2>
                    <p className="text-gray-300">
                      {category.certifications ? `${category.certifications} Certification | ` : ""}
                      {category.courses} {category.courses === 1 ? "Course" : "Courses"}
                    </p>
                  </div>
                ))}
            </div>
          ))}
        </div>
        {/* Dots Indicator */}
        <div className="flex justify-center mt-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <span
              key={index}
              className={`h-2 w-2 mx-1 rounded-full ${index === currentPage ? "bg-white" : "bg-gray-500"}`}
            ></span>
          ))}
        </div>
      </div>
      {categories.length === 0 ? (
        <p className="text-gray-600 dark:text-gray-300">No products available.</p>
      ) : (
        <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div key={index} className="group h-48 perspective-1000">
              <div className="relative w-full h-full transition-transform duration-500 transform-style-preserve-3d group-hover:rotate-y-180">
                {/* Front of card */}
                <div className="absolute w-full h-full p-6 bg-white dark:bg-darkBackground rounded-lg shadow-md backface-hidden">
                  <div className="text-4xl mb-3">{category.icon}</div>
                  <h2 className="text-xl font-semibold">{category.name}</h2>
                  <p className="text-yellow-700 dark:text-gray-300">
                    {category.certifications ? `${category.certifications} Certification | ` : ""}
                    {category.courses} {category.courses === 1 ? "Course" : "Courses"}
                  </p>
                </div>
                
                {/* Back of card */}
                <div className="absolute w-full h-full p-6 bg-white dark:bg-White rounded-lg shadow-md backface-hidden rotate-y-180">
                  <h3 className="text-lg font-semibold mb-2 dark:text-black">{category.name} Courses</h3>
                  <ul className="text-sm">
                    {category.courses > 0 ? (
                      Array(category.courses).fill(0).map((_, i) => (
                        <li key={i} className="mb-1 text-yellow-700 dark:text-red">
                          • {category.name} Course {i + 1}
                        </li>
                      ))
                    ) : (
                      <li className="text-gray-500 dark:text-gray-400">No courses available</li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductsPage;
