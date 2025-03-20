"use client";

import React, { useState } from "react";

export default function VideoActionButtons({ likes, comments }) {
  // State to manage the like and dislike counts
  const [likeCount, setLikeCount] = useState(parseInt(likes));
  const [isLiked, setIsLiked] = useState(false);

  const [commentCount, setCommentCount] = useState(parseInt(comments));
  const [isDisliked, setIsDisliked] = useState(false);

  // Handlers for like and dislike buttons
  const handleLike = () => {
    if (isLiked) {
      setLikeCount((prev) => prev - 1);
      setIsLiked(false);
    } else {
      setLikeCount((prev) => prev + 1);
      setIsLiked(true);

      // Ensure dislike is removed if already selected
      if (isDisliked) {
        setCommentCount((prev) => prev - 1);
        setIsDisliked(false);
      }
    }
  };

  const handleDislike = () => {
    if (isDisliked) {
      setCommentCount((prev) => prev - 1);
      setIsDisliked(false);
    } else {
      setCommentCount((prev) => prev + 1);
      setIsDisliked(true);

      // Ensure like is removed if already selected
      if (isLiked) {
        setLikeCount((prev) => prev - 1);
        setIsLiked(false);
      }
    }
  };

  return (
    <div className="flex items-center space-x-4 pl-0 lg:pl-14 pt-4">
      {/* Like Button */}
      <button
        onClick={handleLike}
        className={`flex items-center space-x-2 rounded-lg p-2 ${
          isLiked ? "text-gold" : "text-black"
        } bg-darkerDullWhite dark:bg-dullWhite`}
      >
        <i
          className="fa-solid fa-thumbs-up text-2xl"
          style={{ width: "24px", height: "24px" }} // Fixed size for consistency
        ></i>
        <span className="text-lg">{likeCount}</span>
      </button>

      {/* Dislike Button */}
      <button
        onClick={handleDislike}
        className={`flex items-center space-x-2 rounded-lg p-2 ${
          isDisliked ? "text-gold" : "text-black"
        } bg-darkerDullWhite dark:bg-dullWhite`}
      >
        <i
          className="fa-solid fa-thumbs-down text-2xl"
          style={{ width: "24px", height: "24px" }} // Fixed size for consistency
        ></i>
        <span className="text-lg">{commentCount}</span>
      </button>
    </div>
  );
}
