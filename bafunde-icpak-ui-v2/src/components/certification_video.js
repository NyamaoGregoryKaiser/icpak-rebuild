import React from "react";
import MainVideo from "./MainVideo";
import UpNext from "./UpNext";
import CommentSection from "../components/CommentSection";


export default function CertificationVideo() {
  return (
    <section className="bg-lightBackground dark:bg-darkBackground text-lightText dark:text-darkText  py-6 px-4 md:px-12 transition-colors duration-100 ease-in-out">
      <div className="container mx-auto  grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Main Video Section */}
        <div className="md:col-span-2">
          <MainVideo />
        </div>

        {/* Up Next Section */}
        <UpNext />
        </div>
        {/* Comment Section */}
        <CommentSection />

    
    </section>
  );
}
