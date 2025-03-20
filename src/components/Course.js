import React from "react";
import MainCourse from "./MainCourse";
import CourseInfo from "./CourseInfo";
import CourseDetails from "./CourseDetails";
import CourseCurriculum from "./CourseCurriculum";
import CourseCategories from "./RelatedCourses";



export default function Course() {
  return (
    <section className="bg-lightBackground dark:bg-darkBackground text-lightText dark:text-darkText  py-6 px-4 md:px-12 transition-colors duration-100 ease-in-out">
      
      <div className="container mx-auto  grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Main Video Section */}
        <div className="md:col-span-2">
          <MainCourse />
        </div>

        {/* Up Next Section */}
        <CourseInfo />
        </div>
        {/* Comment Section */}

        <div className="container mx-auto  grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
 
        <CourseDetails />
        </div>
        <CourseCategories />
        </div>
        {/* <CourseCurriculum /> */}
    
    </section>
  );
}
