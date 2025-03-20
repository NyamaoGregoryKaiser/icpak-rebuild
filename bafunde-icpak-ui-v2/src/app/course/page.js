//IMPORTS ALL THE VIDEO COMPONENTS TO TOGETHER AS A PAGE
import React from "react";
import Course from "../../components/Course";

export default function CoursePage() {
  return (
    <main className="bg-lightBackground dark:bg-darkBackground text-lightText dark:text-darkText  min-h-screen transition-colors duration-100 ease-in-out">
      <div className="container mx-auto max-w-[1300px] ">
        <h1 className="text-3xl md:text-5xl font-bold text-yellow-500 mb-8">
        </h1>
        <Course />
      </div>
    </main>
  ); 
}
