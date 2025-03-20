"use client";

import React, { useState } from "react";
import { FaFilm , FaChevronRight, FaChevronDown } from "react-icons/fa"; // Added icon imports

export default function CourseCurriculum() {
  const [openIndex, setOpenIndex] = useState(null);

  const curriculum = [
    { id: 1, title: "Introduction to Mental Health", details: "Definition & Importance of Mental Health" },
    { id: 2, title: "Psychological Theories & Approaches", details: "Cognitive Behavioral Therapy (CBT)" },
    { id: 3, title: "Understanding Anxiety & Depression", details: "Symptoms & Causes" },
    { id: 4, title: "Stress Management & Resilience Building", details: "Effects of Stress on the Brain & Body" },
    { id: 5, title: "Trauma & PTSD Awareness", details: "Types of Trauma (Acute, Chronic, Complex)" },
    { id: 6, title: "Mental Health in the Workplace", details: "Strategies for a Healthier Work Environment" },
  ];

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white dark:bg-paleBlue text-black dark:text-white max-w-[790px] p-3 rounded-md mt-0 ml-0">
      <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4">Course Curriculum</h3>

      <div className="border border-gray-300 dark:border-gray-700 rounded-md">
        {curriculum.map((item, index) => (
          <div key={item.id} className="border-b border-gray-300 dark:border-gray-700">
            <button
              onClick={() => toggleDropdown(index)}
              className="w-full text-left flex justify-between items-center p-4 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <div className="flex items-center">
                {/* Changed to horizontal arrow icon */}
                <span className="inline-block w-6 text-gold transition-transform">
                  {openIndex === index ? <FaChevronDown /> : <FaChevronRight />}
                </span>
                <span className="ml-2">{item.title}</span>
              </div>
              {/* Removed the arrow from the right side */}
            </button>

            {openIndex === index && (
              <div className="p-4 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-white flex items-center space-x-3 ml-6 border-l-2 border-gold">
                < FaFilm  className="text-gold" />
                <span>{item.details}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}