'use client';

import React from 'react';
import ScrollAnimation from './ScrollAnimation';

// SVG Icon for the checkmark (adjust color and size as needed)
const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-green-400 flex-shrink-0 mt-1">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
);

// SVG Icon for the 'people'/'partners' header (example, replace if needed)
const PartnersIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 mr-3">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
    </svg>
);


export default function PartnersSection() {
  const benefits = [
    {
      title: "Interesting projects:",
      description: "Participate in developing applications that solve real user problems and achieve top rankings."
    },
    {
      title: "Experienced team:",
      description: "Work side-by-side with professionals, share experiences, and grow together."
    },
    {
      title: "Flexible conditions:",
      description: "Various collaboration formats and discussion of individual terms."
    },
    {
      title: "Focus on quality:",
      description: "Jointly create high-level products to be proud of."
    }
  ];

  return (
    <section id="partners" className="py-20 bg-black relative overflow-hidden">
      {/* Optional: Add similar decorative blur elements as ContactSection if desired */}
      {/* 
      <div className="absolute top-40 right-10 w-72 h-72 bg-[#2c3651]/50 rounded-full mix-blend-multiply opacity-10 filter blur-3xl"></div>
      <div className="absolute bottom-40 left-10 w-72 h-72 bg-[#3c3359]/50 rounded-full mix-blend-multiply opacity-10 filter blur-3xl"></div>
      */}

      <div className="container mx-auto px-4 relative z-10">
        <ScrollAnimation animation="fadeInUp" duration={1000}>
          {/* Wrapper div for max-width - Changed from 3xl to 5xl */}
          <div className="max-w-5xl mx-auto"> 
            {/* Container with gradient border effect restored */}
            <div className="shimmering-border-container bg-[#131b30] border border-transparent rounded-xl p-8 md:p-12 relative 
                          before:absolute before:inset-0 before:-z-10 before:rounded-[13px] 
                          before:bg-gradient-to-r before:from-teal-400 before:to-purple-500 
                          before:bg-[length:200%_auto] before:opacity-75 before:content-['']">
              
              {/* Header (Still centered) */}
              <div className="flex items-center justify-center mb-4">
                  <PartnersIcon />
                  <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-teal-300 to-purple-400 text-transparent bg-clip-text">
                      Looking for partners for joint projects!
                  </h2>
              </div>
              
              {/* Description */}
              <p className="text-gray-300 mb-10 text-lg"> 
                We are always open to collaboration and invite talented <span className="text-white font-medium">Swift</span> and <span className="text-white font-medium">Flutter</span> developers to join us in creating in-demand mobile applications.
              </p>

              {/* Why work with us? */}
              <h3 className="text-2xl md:text-3xl font-semibold text-white mb-8"> 
                Why work with us?
              </h3>

              {/* Benefits List */}
              <ul className="space-y-5"> 
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start"> 
                    <CheckIcon />
                    <div className="ml-3">
                      <span className="font-semibold text-white">{benefit.title}</span> 
                      <span className="text-gray-400 ml-1">{benefit.description}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollAnimation>
        {/* Temporarily commented out for debugging */}
        {/* 
        <style jsx>{`
          @keyframes shimmer {
            0% {
              background-position: 0% 0%;
            }
            100% {
              background-position: -100% 0%; 
            }
          }
          .shimmering-border-container::before {
            animation: shimmer 6s linear infinite;
          }
        `}</style>
        */}
      </div>
    </section>
  );
} 