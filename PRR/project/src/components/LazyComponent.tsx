import React, { Suspense } from 'react';
import { useInView } from 'react-intersection-observer';

interface LazyComponentProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  threshold?: number;
  triggerOnce?: boolean;
  className?: string;
}

const LazyComponent: React.FC<LazyComponentProps> = ({
  children,
  fallback = (
    <div className="w-full h-32 bg-gray-200 animate-pulse rounded-lg flex items-center justify-center">
      <div className="text-gray-400">Loading...</div>
    </div>
  ),
  threshold = 0.1,
  triggerOnce = true,
  className = ''
}) => {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce
  });

  return (
    <div ref={ref} className={className}>
      {inView ? (
        <Suspense fallback={fallback}>
          {children}
        </Suspense>
      ) : (
        fallback
      )}
    </div>
  );
};

export default LazyComponent;
