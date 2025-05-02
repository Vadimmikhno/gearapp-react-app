'use client';

import React from 'react';
import ScrollAnimation from './ScrollAnimation';

export default function HeroSection() {
  return (
    <section 
      id="hero" 
      className="relative -mt-20 pb-60 md:pb-80 bg-[url('/images/planet.jpg')] bg-cover bg-center bg-no-repeat"
    >
      {/* Dark Overlay for text readability */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Phone SVG is still commented out */}
      {/* 
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] opacity-10 transform rotate-[-15deg] pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.5} stroke="#4b5563" className="w-full h-full">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75A2.25 2.25 0 0 0 15.75 1.5h-2.25" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5" />
        </svg>
      </div>
      */}
      
      {/* Adjusted top padding: reduced mobile padding (pt-60), kept md+ padding (md:pt-96) */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center pt-60 md:pt-96">
        <div>
          <ScrollAnimation animation="fadeInDown" duration={1000} delay={0}>
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white tracking-tight leading-tight text-gradient-brand"
            >
              We turn mobile apps into businesses.
            </h1>
          </ScrollAnimation>
          
          <ScrollAnimation animation="fadeInUp" duration={1000} delay={200}>
            <p className="text-xl md:text-2xl font-normal text-gray-100 mb-10 max-w-3xl mx-auto leading-relaxed">
              We don't code. We grow. <span className="font-semibold">Gear <span className="text-gradient-brand">App</span></span> is a product company focused on scaling and monetizing mobile apps with speed and precision.
            </p>
          </ScrollAnimation>
          
          <ScrollAnimation animation="zoomIn" duration={1000} delay={400}>
            <a 
              href="#contact" 
              className="btn inline-block px-6 py-3 bg-[#1C1C1C] text-white shadow-md hover:bg-[#27272A] transition-all duration-300 font-medium text-sm"
            >
              → Get in touch
            </a>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
} 