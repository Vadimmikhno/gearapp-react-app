'use client';

import { useState, useEffect, useRef } from 'react';

// Custom hook to detect when an element is visible in the viewport
export default function useInView(options = {}) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);
  
  // Make sure the hook doesn't run during server-side rendering
  useEffect(() => {
    // Check if Intersection Observer is available
    if (!('IntersectionObserver' in window)) {
      setIsInView(true); // Fallback for browsers without IntersectionObserver
      return;
    }
    
    const observer = new IntersectionObserver(entries => {
      const [entry] = entries;
      // Update state when element visibility changes
      if (entry.isIntersecting) {
        setIsInView(true);
        // Once it's visible, we can stop observing if once option is true
        if (options.once !== false && ref.current) {
          observer.unobserve(ref.current);
        }
      } else if (options.once === false) {
        // If once is false, we toggle the state when element leaves viewport
        setIsInView(false);
      }
    }, {
      root: options.root || null,
      // Use a more aggressive rootMargin to trigger animations earlier
      rootMargin: options.rootMargin || '0px 0px -15% 0px',
      threshold: options.threshold || 0.1,
    });

    const currentRef = ref.current;
    
    if (currentRef) {
      // Small timeout to ensure DOM is ready
      setTimeout(() => {
        observer.observe(currentRef);
      }, 100);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options.root, options.rootMargin, options.threshold, options.once]);

  return { ref, isInView };
} 