"use client"; // Ensure this file is a Client Component

import Image from "next/image";
import { useState } from "react";

export default function CourseCategories() {
  const curriculum = [
    { id: 1, title: "Introduction to Mental Health", details: "Definition & Importance of Mental Health", image: "/car-1.jpg" },
    { id: 2, title: "Psychological Theories & Approaches", details: "Cognitive Behavioral Therapy (CBT)", image: "/car-2.jpg" },
    { id: 3, title: "Understanding Anxiety & Depression", details: "Symptoms & Causes", image: "/car-3.jpg" },
    { id: 4, title: "Mental Health Disorders", details: "Common Types & Treatments", image: "/car-1.jpg" },
    { id: 5, title: "Stress Management Techniques", details: "Effective Coping Strategies", image: "/car-2.jpg" },
    { id: 6, title: "Mental Health in the Workplace", details: "Improving Work-Life Balance", image: "/car-3.jpg" },
  ];

  const handleCourseClick = (title) => {
    alert(`Course Selected: ${title}`);
  };

  return (
    <div className="bg-white dark:bg-paleBlue text-black dark:text-white p-8 rounded-lg mt-8 ml-0 max-w-2xl mx-auto shadow-lg">
      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Related Courses</h3>

      {/* Scrollable Div */}
      <div className="border border-gray-300 dark:border-gray-700 rounded-lg overflow-y-auto max-h-96">
        {curriculum.map((item) => (
          <div 
            key={item.id} 
            className="border-b border-gray-300 dark:border-gray-700 p-1 bg-white dark:bg-gray-800 text-gray-700 dark:text-white flex items-center space-x-4 text-sm cursor-pointer transition-all hover:bg-gray-300 dark:hover:bg-gray-400"
            onClick={() => handleCourseClick(item.title)}
          >
            <Image src={item.image} alt={item.title} width={80} height={80} className="rounded-lg" />
            <div>
              <p className="font-semibold">{item.title}</p>
              <p className="text-gray-600 dark:text-gray-300">{item.details}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
