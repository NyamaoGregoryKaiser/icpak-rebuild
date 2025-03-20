"use client";

import React, { useState } from "react";

export default function CommentSection() {
  const [comments, setComments] = useState([
    { id: 1, name: "James Kamau", text: "Amazing video!" },
    {
      id: 2,
      name: "Ruth Otieno",
      text: "Very informative, I enjoyed the content.",
    },
    { id: 3, name: "Annette Ndinda", text: "Well explained video, thanks." },
  ]);

  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    if (newComment.trim()) {
      const newCommentObj = {
        id: comments.length + 1,
        name: "You", // Placeholder for user name
        text: newComment,
      };
      setComments([...comments, newCommentObj]);
      setNewComment(""); // Clear the input field
    }
  };

  return (
    <div className="bg-white  dark:bg-paleBlue text-black dark:text-white max-w-[730px] p-6 rounded-md mt-8 ml-0 ">
      <h3 className="font-bold text-black dark:text-white text-lg mb-8">COMMENTS</h3>
      <div className="w-full">
        {/* Add Comment Section */}
        <div className="flex items-center pb-4 space-x-4 mb-6">
          {/* User Profile Placeholder */}
          <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
            <span className="text-sm font-bold text-black">U</span>
          </div>

          {/* Input Field */}
          <div className="flex-grow relative">
            <input
              type="text"
              placeholder="Add a comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="w-full bg-gray-100 dark:bg-gray-800 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-paleWhite"
            />
          </div>

          {/* Post Button */}
          <button
            onClick={handleAddComment}
            className="bg-gold text-white font-bold px-4 py-2 rounded-md hover:bg-orangeGold transition"
          >
            Post
          </button>
        </div>

        {/* Comments List */}
        <div className="space-y-6 mt-6">
          {comments.map((comment) => (
            <div key={comment.id} className="flex space-x-4">
              {/* User Image */}
              <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                <span className="text-sm font-bold text-black dark:text-white">
                  {comment.name.charAt(0)}
                </span>
              </div>

              {/* Comment Content */}
              <div>
                <p className="text-black dark:text-white font-bold">{comment.name}</p>
                <p className="text-black dark:text-gray-300">{comment.text}</p>

                {/* Reaction Icons */}
                <div className="flex items-center space-x-4 mt-2 text-black dark:text-gray-400">
                  <button className="hover:text-white">
                    <i className="fa-regular fa-thumbs-up"></i>
                  </button>
                  <button className="hover:text-white">
                    <i className="fa-regular fa-thumbs-down"></i>
                  </button>
                  <button className="hover:text-white">
                    <i className="fa-regular fa-flag"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
