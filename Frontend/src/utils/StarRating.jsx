import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = ({ totalStars = 5, onRatingChange }) => {
const [hover, setHover] = useState(0);
const [rating, setRating] = useState(0);

  const handleClick = (value) => {
    setRating(value);
    if (onRatingChange) {
      onRatingChange(value);
    }
  };

  return (
    <div className="flex items-center gap-2">
      {[...Array(totalStars)].map((_, index) => {
        const value = index + 1;

        return (
          <FaStar
            key={index}
            size={30}
            style={{ cursor: "pointer" }}
            color={value <= (hover || rating) ? "gold" : "lightgray"}
            onClick={() => handleClick(value)}
            onMouseEnter={() => setHover(value)}
            onMouseLeave={() => setHover(0)}
          />
        );
      })}
    </div>
  );
};

export default StarRating;