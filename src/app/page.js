

"use client";

import React, { useState } from "react";
import { metadata } from "./metadata";
import Link from "next/link";

import HeroSection from "../components/hero_section"; 
import PopularCategories from "../components/popular"; 
import FeaturedVideos from "../components/FeaturedVideos"; 
import CertificationsCarousel from "../components/certifications_carousel";
import NumbersSpeak from "../components/numbers"; 
import VideoSection from "../components/video"; 
import CallToAction from "../components/start"; 
import products from "../components/products"; 




export default function HomePage() {
    const [isMenuOpen] = useState(false);

  return (
    <main>
      
      {/* Your page content */}
      {/* Hero Section */}
      <HeroSection isMenuOpen={isMenuOpen}/>

      {/* Popular Categories Section */}
      <PopularCategories />
      <FeaturedVideos />
      <CertificationsCarousel />
       <NumbersSpeak />
       <CallToAction />
        {/* Link to Videos Page */}
        <Link
          href="/course"
          className="inline-block px-6 py-3 bg-yellow-500 text-black font-semibold rounded-md hover:bg-yellow-400 transition"
        >
          Explore Video Content
        </Link>
     

    </main>

  );
}
