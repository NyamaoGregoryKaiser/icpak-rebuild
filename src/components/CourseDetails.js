"use client";

import React, { useState, useEffect } from "react";
import CourseCurriculum from "./CourseCurriculum";

export default function CourseDetails() {
  const [activeTab, setActiveTab] = useState("about");
  const [curriculumData, setCurriculumData] = useState(null);

  // Simulate loading the curriculum data
  useEffect(() => {
    // In a real application, you might fetch this data or import it directly
    // This is a placeholder for the content from CourseCurriculum.js
    if (activeTab === "curriculum" && !curriculumData) {
      // Replace this with actual data handling logic for your app
      setCurriculumData(<CourseCurriculum />);
    }
  }, [activeTab, curriculumData]);

  return (
    <div className="bg-white dark:bg-paleBlue text-black dark:text-white max-w-[790px] p-6 rounded-md mt-0 ml-0">
      {/* Tabs with spacing */}
      <div className="flex gap-4 mb-4 flex-wrap">
        <button
          className={`py-3 px-6 font-semibold rounded-lg border-2 transition-all ${
            activeTab === "about"
              ? "bg-gold text-white border-gold"
              : "bg-gray-100 text-gray-600 border-gray-200 hover:bg-gray-200"
          }`}
          onClick={() => setActiveTab("about")}
        >
          About Course
        </button>
        <button
          className={`py-3 px-6 font-semibold rounded-lg border-2 transition-all ${
            activeTab === "objectives"
              ? "bg-gold text-white border-gold"
              : "bg-gray-100 text-gray-600 border-gray-200 hover:bg-gray-200"
          }`}
          onClick={() => setActiveTab("objectives")}
        >
          Objectives
        </button>
        <button
          className={`py-3 px-6 font-semibold rounded-lg border-2 transition-all ${
            activeTab === "curriculum"
              ? "bg-gold text-white border-gold"
              : "bg-gray-100 text-gray-600 border-gray-200 hover:bg-gray-200"
          }`}
          onClick={() => setActiveTab("curriculum")}
        >
          Curriculum
        </button>
      </div>

      {/* Tab Content */}
      <div className="p-6 border-2 dark:border-gray-700 rounded-lg text-black dark:text-white ml-0 max-w-[770px]">
        {activeTab === "about" && (
          <p>
            This course analyzes the Mental health is a crucial aspect of overall well-being, affecting how individuals think, feel, and behave in daily life. It influences how people handle stress, relate to others, and make decisions. Good mental health allows individuals to cope with challenges, build strong relationships, and lead fulfilling lives.
          </p>
        )}

        {activeTab === "objectives" && (
          <p>
            Promoting awareness and reducing stigma around mental health is essential to creating a supportive and understanding society.
          </p>
        )}
        
        {activeTab === "curriculum" && (
          <div>
            {curriculumData ? curriculumData : <p>Loading curriculum data...</p>}
          </div>
        )}
      </div>
    </div>
  );
}