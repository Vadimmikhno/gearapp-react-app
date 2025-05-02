'use client';

import React from 'react';
// Removed unused imports: useState, useEffect, useRef, useCallback

// Updated Key Metrics Data with value/label structure
const keyMetricsData = [
  { value: "10+", label: "Apps Scaling Concurrently" },
  { value: "5", label: "Successful App Exits" },
  { value: "1M+", label: "Total Downloads" },
  { value: "4+", label: "Growth Categories" }, // Shortened label further
  { value: "95%", label: "High-ROI Success Rate" },
  { value: "30+", label: "Monthly ASO Researches" },
];

export default function AppShowcaseSection() {
  // Duplicate metrics four times for seamless looping
  const allMetrics = [
    ...keyMetricsData,
    ...keyMetricsData,
    ...keyMetricsData,
    ...keyMetricsData
  ];

  return (
    // Removed explicit background color from section
    <section id="key-metrics" className="py-16 md:py-20 overflow-hidden w-full relative">
      {/* Added Section Headline */}
      <div className="container mx-auto px-4 text-center mb-10 md:mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Proven <span className="text-gradient-brand">Growth</span>. Tangible Results.
        </h2>
      </div>
      
      <div className="achievement-marquee-container">
        <div className="achievement-marquee">
          {allMetrics.map((metric, index) => (
            <div 
              key={index} 
              // Removed hover:scale-105 effect
              className="achievement-item flex flex-col items-center justify-center text-center p-4 sm:p-6 bg-[#1C1C1C]/80 rounded-lg border border-gray-600/50 backdrop-blur-sm mx-4 min-w-[160px] sm:min-w-[200px] shadow-lg hover:bg-[#27272A]/90 transition-all duration-300"
            >
              {/* Value (large) - adjusted size for mobile */}
              <span className="text-3xl sm:text-4xl font-bold text-white mb-2">{metric.value}</span>
              {/* Label (small) - adjusted size for mobile */}
              <span className="text-xs sm:text-sm text-gray-400 leading-tight">{metric.label}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Inline styles */}
      <style jsx>{`
        .achievement-marquee-container {
          width: 100%;
          overflow: hidden;
          position: relative;
          /* Optional: Add fading edges */
           mask-image: linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%);
           -webkit-mask-image: linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%);
        }
        .achievement-marquee {
          display: flex;
          align-items: center; /* Align items vertically center */
          width: max-content;
          animation: scrollAchievements 40s linear infinite; /* Increased speed (reduced duration from 80s) */
        }
        .achievement-item { 
           flex-shrink: 0;
        }
        @keyframes scrollAchievements {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-25%);
          }
        }
      `}</style>
    </section>
  );
} 