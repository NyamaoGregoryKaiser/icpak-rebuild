import React from "react";
import { FaUsers, FaBook, FaClock, FaChalkboardTeacher, FaShoppingCart } from "react-icons/fa";

export default function CourseInfo() {
  const courseDetails = [
    { id: 1, icon: <FaUsers />, text: "10+ already enrolled" },
    { id: 2, icon: <FaBook />, text: "5 Topics" },
    { id: 3, icon: <FaChalkboardTeacher />, text: "13 Lectures" },
    { id: 4, icon: <FaClock />, text: "1 hour to complete" },
    { id: 5, icon: <FaChalkboardTeacher />, text: "100% online" },
  ];

  return (
    <div className="bg-lightBackground dark:bg-darkBackground text-lightText dark:text-darkText h-[417px] rounded-lg p-4 shadow-lg border-2  transition-colors duration-100 ease-in-out">
      {/* Title */}
      <h3 className="text-gold  font-bold text-xl  mb-4">Course Summary</h3>
      <div className="border-b-6 border-gray-200 mb-4 w-16"></div>

      {/* Course Details */}
      <div className="space-y-4">
        {courseDetails.map((item) => (
          <div key={item.id} className="flex items-center space-x-3 text-lightText dark:text-darkText">
            <span className="text-lg text-gold">{item.icon}</span>
            <p className="text-md">{item.text}</p>
          </div>
        ))}
      </div>

      {/* Course Price */}
      <div className="flex items-center space-x-2 mt-6 text-lg font-bold text-lightText dark:text-darkText">
        <FaShoppingCart className="text-gold" />
        <span>KES 1,500 per Video</span>
      </div>

      {/* Buy Button */}
      <button className="w-full mt-4 bg-gold text-white py-3 rounded-md font-bold hover:bg-yellow-500 transition relative">
        BUY COURSE →
      </button>
    </div>
  );
}
