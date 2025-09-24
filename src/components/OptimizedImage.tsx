import { useState, useRef, useEffect, memo } from 'react';
import { useInView } from 'react-intersection-observer';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  quality?: number;
  placeholder?: string;
}

// Generate low-quality placeholder
const generatePlaceholder = (width: number = 400, height: number = 300) => {
  return `data:image/svg+xml;base64,${btoa(`
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#f3f4f6"/>
      <text x="50%" y="50%" font-family="Arial" font-size="14" fill="#9ca3af" text-anchor="middle" dy=".3em">Loading...</text>
    </svg>
  `)}`;
};

const OptimizedImage: React.FC<OptimizedImageProps> = memo(({
  src,
  alt,
  className = '',
  width,
  height,
  priority = false,
  placeholder
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState<string>('');
  const imgRef = useRef<HTMLImageElement>(null);

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
    skip: priority
  });

  // Generate optimized image URL (you can integrate with image optimization service)
  const getOptimizedSrc = (originalSrc: string) => {
    // For now, return original src. In production, you'd use a service like Cloudinary, ImageKit, or Next.js Image
    return originalSrc;
  };

  useEffect(() => {
    if (priority || inView) {
      const optimizedSrc = getOptimizedSrc(src);
      setCurrentSrc(optimizedSrc);
      
      const img = new Image();
      img.onload = () => {
        setIsLoaded(true);
        setHasError(false);
      };
      img.onerror = () => {
        setHasError(true);
        setIsLoaded(false);
      };
      img.src = optimizedSrc;
    }
  }, [src, inView, priority]);

  const shouldLoad = priority || inView;

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      style={{ width, height }}
    >
      {!shouldLoad ? (
        <div 
          className="w-full h-full bg-gray-200 animate-pulse flex items-center justify-center"
          style={{ width, height }}
        >
          <div className="text-gray-400 text-sm">Loading...</div>
        </div>
      ) : (
        <>
          {/* Placeholder/Blur */}
          {!isLoaded && !hasError && (
            <div 
              className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center"
              style={{ width, height }}
            >
              <div className="text-gray-400 text-sm">Loading...</div>
            </div>
          )}
          
          {/* Error State */}
          {hasError ? (
            <div 
              className="w-full h-full bg-gray-200 flex items-center justify-center"
              style={{ width, height }}
            >
              <div className="text-gray-400 text-sm">Image not available</div>
            </div>
          ) : (
            /* Main Image */
            currentSrc && (
              <img
                ref={imgRef}
                src={currentSrc}
                alt={alt}
                className={`w-full h-full object-cover transition-opacity duration-500 ${
                  isLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ width, height }}
                loading={priority ? 'eager' : 'lazy'}
                decoding="async"
                fetchPriority={priority ? 'high' : 'low'}
              />
            )
          )}
        </>
      )}
    </div>
  );
});

OptimizedImage.displayName = 'OptimizedImage';

export default OptimizedImage;
