'use client';

import React, { useState, useEffect } from 'react'; // Added useState, useEffect
import Image from 'next/image';
import ScrollAnimation from './ScrollAnimation';

// Array of original image paths (20 icons)
const baseImagePaths = [
  '/images/1.jpg', '/images/2.jpg', '/images/3.jpg', '/images/4.jpg',
  '/images/5.jpg', '/images/6.jpg', '/images/7.jpg', '/images/8.png',
  '/images/9.png', '/images/10.png', '/images/11.png', '/images/12.png',
  '/images/13.png', '/images/14.png', '/images/15.png', '/images/16.png',
  '/images/17.png', '/images/18.png', '/images/19.png', '/images/20.png',
];

// Fisher-Yates (Knuth) Shuffle function
function shuffleArray<T>(array: T[]): T[] {
  let currentIndex = array.length, randomIndex;
  const newArray = [...array]; 
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [newArray[currentIndex], newArray[randomIndex]] = [
      newArray[randomIndex], newArray[currentIndex]];
  }
  return newArray;
}

// Function to duplicate array
const duplicateArray = (arr: any[], times: number) => Array(times).fill([...arr]).flat();

// Base icon pool remains outside
const iconPool = duplicateArray(baseImagePaths, 4); // Pool of 80 icons

// Removed pre-generated paths from module scope

export default function GrowthSection() {
  const [row1Paths, setRow1Paths] = useState<string[]>([]);
  const [row2Paths, setRow2Paths] = useState<string[]>([]);
  const [row3Paths, setRow3Paths] = useState<string[]>([]);
  const [isClient, setIsClient] = useState(false); // Flag for client-side mount

  useEffect(() => {
    // Generate paths only on the client after mount
    const masterShuffledPaths = shuffleArray(iconPool);
    setRow1Paths(duplicateArray(masterShuffledPaths, 2));
    setRow2Paths(duplicateArray(masterShuffledPaths.slice().reverse(), 2));
    setRow3Paths(duplicateArray(shuffleArray([...masterShuffledPaths]), 2)); // Use spread to avoid modifying original shuffle for row 1/2
    setIsClient(true); // Indicate client has mounted and paths are ready
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    // Removed overflow-hidden from section
    <section id="growth-services" className="py-20 md:py-28 border-t border-[#1a2235]/50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">

          {/* Text Content Column */}
          <div>
            <ScrollAnimation animation="fadeInLeft" duration={1000}>
             {/* Headline */}
             <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                From ASO to scaling with paid traffic — we turn apps into <span className="text-gradient-brand">businesses</span>.
              </h2>
              {/* Main Text */}
              <p className="text-lg text-gray-300 mb-6">
                 At <span className="text-gray-100 font-medium">Gear</span><span className="text-gradient-brand font-medium">App</span>, we don't just build apps — we grow them.
                 Our team handles the full monetization cycle, including:
              </p>
              {/* Bullet Points */}
              <ul className="space-y-4 mb-8">
                 {[
                  { text: 'App Store Optimization (ASO)' },
                  { text: 'Motivated installs & organic boost' },
                  { text: 'Apple Search Ads management' },
                  { text: 'Data-driven creatives and A/B testing' },
                  { text: 'Subscription funnels & monetization analytics' },
                 ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-gray-400 mr-3 mt-1 flex-shrink-0 w-5 h-5">
                        {/* SVG Icons */}
                        {index === 0 && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>}
                        {index === 1 && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" /></svg>}
                        {index === 2 && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>}
                        {index === 3 && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" /></svg>}
                        {index === 4 && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.75A.75.75 0 013 4.5h.75m10.5 0v.75A.75.75 0 0015 6h.75m0 0v-.75A.75.75 0 0015 4.5h-.75M7.5 12h7.5m-7.5 3h4.5m3-1.5a.75.75 0 01-.75.75h-1.5a.75.75 0 01-.75-.75V11.25a.75.75 0 01.75-.75h1.5a.75.75 0 01.75.75v3.75z" /></svg>}
                      </span>
                      <span className="text-gray-300">{item.text}</span>
                    </li>
                  ))} 
               </ul>
               {/* CTA Text */}
               <p className="text-lg text-gray-300 mb-8">
                 Let us turn your app into a revenue engine.
               </p>
               {/* CTA Button - Apply dark button style */}
               <a 
                 href="#contact" 
                 className="btn bg-[#1C1C1C] hover:bg-[#27272A] text-white shadow-md transform"
               >
                 → Let's grow your app
               </a>
             </ScrollAnimation>

             <ScrollAnimation animation="fadeInUp" duration={1000} delay={200}>
               <p className="text-lg text-gray-400 max-w-3xl mx-auto mt-6 mb-12 leading-relaxed">
                 From ASO to passive profits - we turn apps into <span className="text-gradient-brand">businesses</span>.
               </p>
             </ScrollAnimation>
           </div>
 
           {/* --- Triple Marquee App Icons --- */}
           {/* Conditionally render marquee only on client after paths are set */}
           {isClient && (
             <div className="flex flex-col space-y-4 md:space-y-6 overflow-hidden">
               {/* Row 1 (Right) */}
               <div className="marquee-container">
                 <div className="marquee-track animation-rtl">
                   {row1Paths.map((src, index) => (
                     <div key={`r1-${index}`} className="marquee-item">
                       <Image src={src} alt={`App Icon ${index}`} width={80} height={80} className="rounded-3xl object-cover" />
                     </div>
                   ))}
                 </div>
               </div>
               {/* Row 2 (Left, Offset) */}
               <div className="marquee-container ml-8 md:ml-12"> {/* Increased Offset */}
                 <div className="marquee-track animation-ltr">
                   {row2Paths.map((src, index) => (
                     <div key={`r2-${index}`} className="marquee-item">
                       <Image src={src} alt={`App Icon ${index}`} width={80} height={80} className="rounded-3xl object-cover" />
                     </div>
                   ))}
                 </div>
               </div>
               {/* Row 3 (Right) */}
               <div className="marquee-container">
                 <div className="marquee-track animation-rtl">
                   {row3Paths.map((src, index) => (
                     <div key={`r3-${index}`} className="marquee-item">
                       <Image src={src} alt={`App Icon ${index}`} width={80} height={80} className="rounded-3xl object-cover" />
                     </div>
                   ))}
                 </div>
               </div>
             </div>
           )}
           {/* --- End Triple Marquee App Icons --- */}
 
         </div>
       </div>
        {/* CSS for Marquee Animation */}
        <style jsx>{`
          .marquee-container {
            width: 100%;
            overflow: hidden;
            mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);
            -webkit-mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);
          }
          .marquee-track {
            display: flex;
            width: max-content;
            flex-shrink: 0;
          }
          .marquee-item {
            flex-shrink: 0;
            width: 80px;
            height: 80px;
            margin-right: 1.5rem; /* Increased spacing */
            box-shadow: 0 5px 18px rgba(0,0,0,0.25); /* Enhanced shadow */
          }
 
          .animation-ltr {
             /* Slowed down animation */
             animation: scrollLTR 80s linear infinite;
          }
          .animation-rtl {
              /* Slowed down animation */
             animation: scrollRTL 80s linear infinite;
          }
 
          @keyframes scrollLTR {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); } 
          }
          @keyframes scrollRTL {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
        `}</style>
     </section>
   );
 } 