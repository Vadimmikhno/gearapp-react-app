'use client';

import React, { useEffect } from 'react';
import Script from 'next/script';
import { useScriptContext } from '../context/ScriptContext'; // Adjust path if needed

const ScriptLoader: React.FC = () => {
  const { setParticlesJsLoaded } = useScriptContext();

  const handleScriptLoad = () => {
    console.log('particles.js script loaded via next/script onLoad.');
    // Check if particlesJS is actually available on window before setting state
    if (typeof window !== 'undefined' && window.particlesJS) {
        setParticlesJsLoaded(true);
    } else {
        console.error('particles.js script loaded, but window.particlesJS is not defined!');
        // Optionally retry or set an error state
    }
  };

  return (
    <Script 
      src="/scripts/particles.min.js" 
      strategy="lazyOnload" // Revert to lazyOnload, rely on onLoad callback
      onLoad={handleScriptLoad} 
      onError={(e) => {
        console.error('Error loading particles.js script:', e);
      }}
    />
  );
};

export default ScriptLoader; 