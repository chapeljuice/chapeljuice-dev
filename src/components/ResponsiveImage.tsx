import React from 'react';

interface ResponsiveImageProps {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  aspectRatio?: string;
  width?: number;
  height?: number;
}

const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  src,
  alt,
  className = '',
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  priority = false,
  aspectRatio,
  width,
  height
}) => {
  // Generate responsive srcSet for the current image
  const generateSrcSet = (imageSrc: string) => {
    // For now, use the same image with different sizes
    // In production, you'd generate multiple sizes
    return `${imageSrc} 1x, ${imageSrc} 2x`;
  };

  return (
    <img
      src={src}
      srcSet={generateSrcSet(src)}
      sizes={sizes}
      alt={alt}
      className={className}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
      width={width}
      height={height}
      style={aspectRatio ? { aspectRatio } : undefined}
    />
  );
};

export default ResponsiveImage;
