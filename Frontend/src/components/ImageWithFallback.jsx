import React, { useState } from 'react';
import { HiOutlinePhoto } from 'react-icons/hi2';

/**
 * A reusable image component that automatically handles loading errors
 * by switching to a stylized 'blank card' placeholder instead of random images.
 * 
 * @param {string} src - The primary image source URL
 * @param {string} alt - Alt text for the image
 * @param {string} className - Tailwind CSS classes for styling
 */
const ImageWithFallback = ({ 
  src, 
  alt = 'Trip image', 
  className = '', 
  fallbackImages = [],
  ...props 
}) => {
  const [fallbackState, setFallbackState] = useState({
    source: src,
    image: src,
    index: 0,
    hasError: !src,
  });
  const isCurrentSource = fallbackState.source === src;
  const imgSrc = isCurrentSource ? fallbackState.image : src;
  const hasError = isCurrentSource ? fallbackState.hasError : !src;

  const handleError = () => {
    const fallbackIndex = isCurrentSource ? fallbackState.index : 0;
    if (fallbackImages && fallbackImages.length > fallbackIndex) {
      setFallbackState({
        source: src,
        image: fallbackImages[fallbackIndex],
        index: fallbackIndex + 1,
        hasError: false,
      });
    } else {
      setFallbackState({
        source: src,
        image: "",
        index: fallbackIndex,
        hasError: true,
      });
    }
  };

  // If there's an error or no source, render the 'blank image card'
  if (hasError || !imgSrc) {
    return (
      <div 
        className={`${className} bg-gray-100 flex items-center justify-center border border-gray-200`} 
        title={alt}
        {...props}
      >
        <HiOutlinePhoto className="text-gray-400 text-3xl opacity-50" />
      </div>
    );
  }

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      onError={handleError}
      {...props}
    />
  );
};

export default ImageWithFallback;
