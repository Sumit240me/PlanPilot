import React, { useState, useEffect } from 'react';
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
  fallbackSeed: _fallbackSeed,
  fallbackImages = [],
  ...props 
}) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(!src);
  const [fallbackIndex, setFallbackIndex] = useState(0);

  useEffect(() => {
    // Reset state when the primary source changes
    setImgSrc(src);
    setHasError(!src);
    setFallbackIndex(0);
  }, [src]);

  const handleError = () => {
    if (fallbackImages && fallbackImages.length > fallbackIndex) {
      setImgSrc(fallbackImages[fallbackIndex]);
      setFallbackIndex(fallbackIndex + 1);
      setHasError(false);
    } else {
      setHasError(true);
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
