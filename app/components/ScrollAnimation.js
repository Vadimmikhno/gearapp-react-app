'use client';

import React, { useEffect, useState } from 'react';
import useInView from '../hooks/useInView';

export default function ScrollAnimation({ 
  children, 
  animation = 'fadeInUp', 
  duration = 800, 
  delay = 0,
  className = '', 
  ...props 
}) {
  const [hasAnimated, setHasAnimated] = useState(false);
  const { ref, isInView } = useInView({ 
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px', // Starts animation a bit before element is in view
    once: true 
  });
  
  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  // Initial styles before element is in view
  const initialStyle = {
    opacity: 0,
    transform: 
      animation.includes('Up') ? 'translateY(30px)' : 
      animation.includes('Down') ? 'translateY(-30px)' : 
      animation.includes('Left') ? 'translateX(-30px)' : 
      animation.includes('Right') ? 'translateX(30px)' : 
      animation.includes('Zoom') ? 'scale(0.9)' : 'none',
    willChange: 'opacity, transform'
  };

  // Animation styles when element comes into view
  const animateStyle = {
    opacity: 1,
    transform: 'none',
    transition: `opacity ${duration}ms cubic-bezier(0.215, 0.61, 0.355, 1), transform ${duration}ms cubic-bezier(0.215, 0.61, 0.355, 1)`,
    transitionDelay: `${delay}ms`,
  };

  return (
    <div 
      ref={ref} 
      className={`scroll-animation ${className}`}
      style={{
        ...initialStyle,
        ...(hasAnimated ? animateStyle : {})
      }}
      {...props}
    >
      {children}
    </div>
  );
} 