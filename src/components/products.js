import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export const categories = [
  { name: "Work Life Balance", courses: 3, icon: "⚙️" },
  { name: "Corporate Governance", courses: 1, icon: "💼" },
  { name: "Taxation", courses: 1, icon: "📄" },
  { name: "Audit", courses: 3, icon: "☰" },
  { name: "Money Laundering", courses: 1, certifications: 1, icon: "💰" },
  { name: "Public Finance Management", courses: 1, icon: "📊" },
  { name: "Financial Reporting", courses: 4, certifications: 3, icon: "📈" },
  { name: "Leadership", courses: 4, icon: "👥" },
];

const Products = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedMode = localStorage.getItem("darkMode");
    if (storedMode) {
      setDarkMode(JSON.parse(storedMode));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={darkMode ? "dark bg-gray-900 text-white" : "bg-gray-100 text-black"}>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Categories</h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-4 py-2 rounded bg-gray-800 text-white dark:bg-gray-200 dark:text-black"
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
        {categories.length === 0 ? (
          <p className="text-gray-600 dark:text-gray-300">No categories found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <div key={index} className="group h-48 perspective-1000">
                <div className="relative w-full h-full transition-transform duration-500 transform-style-preserve-3d group-hover:rotate-y-180">
                  {/* Front of card */}
                  <div className="absolute w-full h-full p-6 bg-white dark:bg-blue-900 rounded-lg shadow-md backface-hidden">
                    <div className="text-4xl mb-3">{category.icon}</div>
                    <h2 className="text-xl font-semibold">{category.name}</h2>
                    <p className="text-gray-600 dark:text-gray-300">
                      {category.certifications ? `${category.certifications} Certification | ` : ""}
                      {category.courses} {category.courses === 1 ? "Course" : "Courses"}
                    </p>
                  </div>
                  
                  {/* Back of card */}
                  <div className="absolute w-full h-full p-6 bg-white dark:bg-blue-800 rounded-lg shadow-md backface-hidden rotate-y-180">
                    <h3 className="text-lg font-semibold mb-2">{category.name} Courses</h3>
                    <ul className="text-sm">
                      {category.courses > 0 ? (
                        Array(category.courses).fill(0).map((_, i) => (
                          <li key={i} className="mb-1 text-gray-700 dark:text-gray-200">
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
      <Footer />
    </div>
  );
};

export default Products;