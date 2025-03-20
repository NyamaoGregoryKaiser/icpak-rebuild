import React, { useState, useEffect } from "react";
import CountUp from "react-countup";

export default function NumbersSpeak() {
 

  const insights = [
    { id: 1, title: "10,000+ CPD Hours Awarded", description: "That’s like attending 1,250 full-day seminars—without the coffee runs!" },
    { id: 2, title: "5,000+ Professionals Enrolled", description: "That’s enough accountants to fill an entire football stadium!" },
    { id: 3, title: "92% Course Completion Rate", description: "Higher than the average Netflix binge completion rate!" },
    { id: 4, title: "4.8/5 Average Rating", description: "Almost as good as your favorite five-star restaurant!" },
  ];

  const [isMobile, setIsMobile] = useState(false);
  const [currentInsightIndex, setCurrentInsightIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const updateScreenSize = () => setIsMobile(window.innerWidth < 768);
      updateScreenSize();
      window.addEventListener("resize", updateScreenSize);
      return () => window.removeEventListener("resize", updateScreenSize);
    }
  }, []);

  useEffect(() => {
    setAnimate(true);
  }, []);

  useEffect(() => {
    const insightInterval = setInterval(() => {
      setCurrentInsightIndex((prevIndex) => (prevIndex + 1) % insights.length);
    }, 5000);

    return () => clearInterval(insightInterval);
  }, [insights.length]);

  return (
    <section className="bg-lightBackground dark:bg-darkBackground text-lightText dark:text-darkText font-medium transition-colors duration-100 ease-in-out py-16 px-6">
      <h2 className="text-orangeGold dark:text-gold text-center font-bold text-3xl md:text-5xl mb-12">
        Numbers Overview
      </h2>

      <div className="container mx-auto max-w-[1200px] bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg">
       

        {/* Insights with Flip Animation */}

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {isMobile
              ? [insights[currentInsightIndex]].map((insight) => (
                  <div key={insight.id} className="flip-card">
                    <div className="flip-card-inner">
                      <div className="flip-card-front bg-white dark:bg-[#0e2130] !important text-gray-800 dark:text-yellow-400">
                        <h4 className="text-lg font-semibold">{insight.title}</h4>
                      </div>
                      <div className="flip-card-back bg-white dark:bg-[#0e2130] !important text-gray-800 dark:text-yellow-400">
                        <p>{insight.description}</p>
                      </div>
                    </div>
                  </div>
                ))
              : insights.map((insight) => (
                  <div key={insight.id} className="flip-card">
                    <div className="flip-card-inner">
                      <div className="flip-card-front bg-white dark:bg-[#0e2130] !important text-gray-800 dark:text-yellow-400">
                        <h4 className="text-lg font-semibold">{insight.title}</h4>
                      </div>
                      <div className="flip-card-back bg-white dark:bg-[#0e2130] !important text-gray-800 dark:text-yellow-400">
                        <p>{insight.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
          </div>
        </div>


      {/* Custom Styling */}
      <style jsx>{`
        .flip-card {
          perspective: 1000px;
          width: 100%;
          height: 150px;
        }

        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          text-align: center;
          transition: transform 1s;
          transform-style: preserve-3d;
        }

        .flip-card:hover .flip-card-inner {
          transform: rotateY(180deg);
        }

        .flip-card-front,
        .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
        }

        .flip-card-front {
          background: #fff !important;
          color: black;
        }

        .dark .flip-card-front {
          background: #0e2130 !important;
          color: #ffcc00; /* Yellow text for dark mode */
        }

        .flip-card-back {
          background: #fff !important;
          color: black;
          transform: rotateY(180deg);
        }

        .dark .flip-card-back {
          background: #0e2130 !important; /* Dark navy background in dark mode */
          color: #ffcc00 !important; /* Yellow text for readability */
        }
      `}</style>
    </section>
  );
}
