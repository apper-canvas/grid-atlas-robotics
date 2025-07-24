import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import ApperIcon from '@/components/ApperIcon';

const LazyImage = ({
  src,
  alt,
  className = '',
  skeletonClassName = '',
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  priority = false,
  onLoad,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [imageSrc, setImageSrc] = useState(null);
  const imgRef = useRef();
  const [containerRef, isIntersecting] = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '50px 0px',
    triggerOnce: true,
  });

  // Convert src to optimized format with WebP support
  const getOptimizedSrc = (originalSrc) => {
    if (!originalSrc) return null;
    
    // For demo purposes, we'll use placeholder images with optimization hints
    // In production, this would integrate with your image CDN/optimization service
    const baseUrl = originalSrc.includes('placeholder') ? originalSrc : `https://picsum.photos/800/600?random=${Math.floor(Math.random() * 1000)}`;
    
    return {
      webp: `${baseUrl}&format=webp`,
      original: baseUrl,
      placeholder: `${baseUrl}&blur=20&quality=20`,
    };
  };

  const optimizedSrcs = getOptimizedSrc(src);

  // Load image when in viewport or priority is set
  useEffect(() => {
    if ((isIntersecting || priority) && optimizedSrcs && !imageSrc) {
      setImageSrc(optimizedSrcs);
    }
  }, [isIntersecting, priority, optimizedSrcs, imageSrc]);

  // Handle image loading
  const handleLoad = () => {
    setIsLoaded(true);
    if (onLoad) onLoad();
  };

  const handleError = () => {
    setHasError(true);
    setIsLoaded(true);
  };

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`} {...props}>
      {/* Skeleton/Loading State */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center ${skeletonClassName}`}
        initial={{ opacity: 1 }}
        animate={{ opacity: isLoaded ? 0 : 1 }}
        transition={{ duration: 0.3 }}
      >
        {!hasError && (
          <div className="text-center">
            <div className="relative">
              <ApperIcon 
                name="Bot" 
                size={48} 
                className="text-primary-400 mx-auto mb-3 animate-pulse" 
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-primary-600/5 rounded-full animate-pulse-glow"></div>
            </div>
            <div className="space-y-2">
              <div className="h-1.5 bg-primary-300 rounded-full w-16 mx-auto animate-pulse"></div>
              <div className="h-1.5 bg-primary-200 rounded-full w-12 mx-auto animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>
        )}
        
        {hasError && (
          <div className="text-center">
            <ApperIcon name="ImageOff" size={48} className="text-gray-400 mx-auto mb-2" />
            <p className="text-sm text-gray-500">Unable to load image</p>
          </div>
        )}
      </motion.div>

      {/* Actual Image */}
      {imageSrc && (
        <picture>
          <source srcSet={imageSrc.webp} type="image/webp" sizes={sizes} />
          <motion.img
            ref={imgRef}
            src={imageSrc.original}
            alt={alt}
            className={`w-full h-full object-cover ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 1.05 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            onLoad={handleLoad}
            onError={handleError}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            sizes={sizes}
          />
        </picture>
      )}
    </div>
  );
};

export default LazyImage;