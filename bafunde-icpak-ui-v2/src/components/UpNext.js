import React from "react";

export default function UpNextList() {
  const upNextVideos = [
    { id: 1, title: "How to handle trauma and all all all alla ", thumbnail: "/queue1.jpeg" },
    { id: 2, title: "How to handle trauma", thumbnail: "/queue2.jpeg" },
    { id: 3, title: "How to handle trauma with many different sources", thumbnail: "/queue1.jpeg" },
    { id: 4, title: "How to handle trauma", thumbnail: "/queue2.jpeg" },
    { id: 5, title: "How to handle trauma with many different sources", thumbnail: "/queue1.jpeg" },
    { id: 6, title: "How to handle trauma", thumbnail: "/queue2.jpeg" },
  ];

  return (
    <div
      className="bg-lightBackground dark:bg-darkBackground text-lightText dark:text-darkText p-4 shadow-lg transition-colors duration-100 ease-in-out"
      style={{ height: "475px" }} // Matches Main Video height
    >
      <div className="border-2 pt-4 h-full flex flex-col">
        <h3 className="text-gold text-left font-bold text-xl mb-4">  UP NEXT</h3>
        <div className="space-y-4 overflow-y-auto">
          {upNextVideos.map((video) => (
            <div
              key={video.id}
              className="flex items-start space-x-4 hover:bg-darkerDullWhite hover:dark:bg-gray-800 p-2 cursor-pointer"
            >
              {/* Thumbnail */}
              <div className="w-[90px] flex-shrink-0">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Video Title */}
              <p className="w-full min-w-0 font-medium whitespace-nowrap overflow-hidden text-ellipsis">
                {video.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
