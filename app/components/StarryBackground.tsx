'use client';

import React, { useEffect, useRef } from 'react';
import { useScriptContext } from '../context/ScriptContext'; // Adjust path if needed
// We need to load particles.js, typically via a script tag in the HTML or dynamically
// Assuming particles.js is loaded globally (e.g., via script tag in layout or _document.js)
// If not, we might need to import it differently or ensure it's loaded.

// Declare particlesJS in the window scope for TypeScript
declare global {
  interface Window {
    particlesJS: any; // Use 'any' for simplicity, or find/create specific types
    pJSDom: any[];    // particles.js stores instances here
  }
}

const StarryBackground: React.FC = () => {
  const particlesRef = useRef<HTMLDivElement>(null);
  // Get the loaded status from context
  const { particlesJsLoaded } = useScriptContext();

  useEffect(() => {
    if (particlesJsLoaded && typeof window !== 'undefined' && window.particlesJS) {
      // console.log("Initializing particles.js with realistic star options...");

      const options = {
        particles: {
          number: {
            value: 250, // More stars
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: "#ffffff"
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.6, 
            random: true, 
            anim: {
              enable: true, // Re-enable opacity animation for twinkling
              speed: 0.5,    // Speed of the twinkle
              opacity_min: 0.1, // Minimum opacity during twinkle
              sync: false    // Make twinkling asynchronous per particle
            }
          },
          size: {
            value: 2, 
            random: true, 
            size_min: 0.3, 
            anim: {
              enable: false, 
            }
          },
          line_linked: {
            enable: false
          },
          move: {
            enable: false, // Disable movement
            // speed: 0.1, 
            // direction: "none", 
            // random: true,
            // straight: false,
            // out_mode: "out", 
            // bounce: false,
          }
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: { enable: false },
            onclick: { enable: false },
            resize: true
          }
        },
        retina_detect: true
      };

      try {
        window.particlesJS('particles-container', options);
        // console.log("Realistic Starry particles.js initialized.");
      } catch (error) {
        console.error("Error initializing particles.js:", error);
      }

    } else if (particlesJsLoaded) {
        // console.warn("Script context reports loaded, but window.particlesJS is not available!");
    } else {
        // console.log("StarryBackground effect waiting for particles.js to load...");
    }

    // Cleanup function
    return () => {
       if (window.pJSDom && window.pJSDom.length > 0) {
         const pJS = window.pJSDom[0];
         if (pJS && pJS.pJS && pJS.pJS.fn && pJS.pJS.fn.vendors && pJS.pJS.fn.vendors.destory) {
            pJS.pJS.fn.vendors.destory();
            window.pJSDom = [];
            // console.log("particles.js instance destroyed on unmount.");
         } else {
              // console.warn("Could not properly destroy particles.js instance on unmount.");
         }
       }
    };
  }, [particlesJsLoaded]);

  return (
    <div 
      id="particles-container" 
      ref={particlesRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1, 
        backgroundColor: 'transparent' 
      }}
    />
  );
};

export default StarryBackground; 