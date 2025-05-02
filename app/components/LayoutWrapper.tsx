'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
// StarryBackground import is no longer needed
// import StarryBackground from './StarryBackground'; 

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  // Pathname logic can be removed if StarryBackground is the only thing using it
  // const pathname = usePathname();
  // const isHomePage = pathname === '/';

  // Removed debug logs
  // console.log('[DEBUG] LayoutWrapper - Pathname:', pathname);
  // console.log('[DEBUG] LayoutWrapper - Is Home Page:', isHomePage);

  return (
    <>
      {/* StarryBackground component removed */}
      {/* {!isHomePage && <StarryBackground />} */}
      {children}
    </>
  );
} 