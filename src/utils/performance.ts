// Performance optimization utilities

export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
    // Set a timeout to avoid hanging
    setTimeout(() => reject(new Error('Image load timeout')), 5000);
  });
};

export const preloadImages = async (srcs: string[]): Promise<void> => {
  try {
    // Limit concurrent preloads to avoid overwhelming the browser
    const batchSize = 3;
    for (let i = 0; i < srcs.length; i += batchSize) {
      const batch = srcs.slice(i, i + batchSize);
      await Promise.allSettled(batch.map(src => preloadImage(src)));
    }
  } catch (error) {
    console.warn('Some images failed to preload:', error);
  }
};

// Critical images that should be preloaded (only the most important ones)
export const criticalImages = [
  '/PRR.jpg', // Hero background
  '/prr 098.jpg', // About section
];

// Debounce function for performance
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

// Throttle function for performance
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

// Intersection Observer utility for better performance
export const createIntersectionObserver = (
  callback: IntersectionObserverCallback,
  options: IntersectionObserverInit = {}
) => {
  const defaultOptions: IntersectionObserverInit = {
    threshold: 0.1,
    rootMargin: '50px',
    ...options,
  };
  
  return new IntersectionObserver(callback, defaultOptions);
};

// Image optimization helper
export const getOptimizedImageSrc = (src: string, width?: number, quality = 80) => {
  // In production, you would integrate with an image optimization service
  // For now, return the original src
  return src;
};
