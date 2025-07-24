import { useEffect, useRef, useState } from 'react';

const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);
  const ref = useRef();

  const defaultOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -10% 0px',
    triggerOnce: true,
    ...options,
  };

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      const isElementIntersecting = entry.isIntersecting;
      setIsIntersecting(isElementIntersecting);
      
      if (isElementIntersecting && !hasIntersected) {
        setHasIntersected(true);
        if (defaultOptions.triggerOnce) {
          observer.unobserve(element);
        }
      }
    }, defaultOptions);

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [hasIntersected, defaultOptions.threshold, defaultOptions.rootMargin, defaultOptions.triggerOnce]);

  return [ref, isIntersecting, hasIntersected];
};

export default useIntersectionObserver;