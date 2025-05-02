'use client';
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

interface ScriptContextType {
  particlesJsLoaded: boolean;
  setParticlesJsLoaded: (loaded: boolean) => void;
}

// Create context with a default undefined value
const ScriptContext = createContext<ScriptContextType | undefined>(undefined);

// Create provider component
export const ScriptProvider = ({ children }: { children: ReactNode }) => {
  const [particlesJsLoaded, setParticlesJsLoadedState] = useState(false);

  // Simplified setter
  const setParticlesJsLoaded = (loaded: boolean) => {
    // console.log('[DEBUG] ScriptProvider: Setting particlesJsLoaded to', loaded);
    setParticlesJsLoadedState(loaded);
  };

  // Removed logging effect
  // useEffect(() => {
  //   console.log('[DEBUG] ScriptProvider: particlesJsLoaded state is currently:', particlesJsLoaded);
  // }, [particlesJsLoaded]);

  return (
    <ScriptContext.Provider value={{ particlesJsLoaded, setParticlesJsLoaded }}>
      {children}
    </ScriptContext.Provider>
  );
};

// Custom hook to use the context
export const useScriptContext = () => {
  const context = useContext(ScriptContext);
  if (context === undefined) {
    throw new Error('useScriptContext must be used within a ScriptProvider');
  }
  return context;
}; 