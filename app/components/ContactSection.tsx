'use client';

import React from 'react';
import ScrollAnimation from './ScrollAnimation'; // Assuming ScrollAnimation is used

export default function ContactSection() {
  return (
    <section 
      id="contact" 
      className="py-20 relative overflow-hidden bg-black"
    >
      {/* Decorative elements (kept for visual interest) */}
      <div className="absolute top-40 right-10 w-72 h-72 bg-[#2c3651]/50 rounded-full mix-blend-multiply opacity-10 filter blur-3xl"></div>
      <div className="absolute bottom-40 left-10 w-72 h-72 bg-[#3c3359]/50 rounded-full mix-blend-multiply opacity-10 filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <ScrollAnimation animation="fadeInDown" duration={1000}>
          <div className="mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Contacts</h2>
            
            {/* === UPDATED CONTENT START === */}
            {/* Card-like container - Removed perspective, centering, min-dimensions. Added overflow-hidden */}
            <div 
              className="mt-8 bg-transparent rounded-xl inline-flex justify-center items-center shadow-lg relative overflow-hidden" /* Adjusted classes for the new card */
              // Removed style={{ perspective: '1000px', perspectiveOrigin: '50% 50%' }}
            >
              {/* === NEW CARD JSX START === */}
              <div className="e-card playing"> {/* Added class playing for animation */}
                {/* Background image div removed as per user code */}
                <div className="wave" />
                <div className="wave" />
                <div className="wave" />
                <div className="infotop"> 
                  {/* === RESTORED TELEGRAM CONTENT START === */}
                  <div className="flex flex-col items-center">
                    {/* Telegram Icon */}
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      fill="currentColor" 
                      className="w-8 h-8 text-cyan-400 mb-4" /* Restored icon */
                      aria-hidden="true"
                    >
                      <path d="M23.91 3.79L20.3 20.84c-.25 1.21-.98 1.5-2 .94l-5.5-4.07-2.66 2.57c-.3.3-.55.56-1.1.56-.72 0-.6-.27-.84-.95L6.3 13.7l-5.45-1.7c-1.18-.35-1.19-1.16.26-1.75l21.26-8.2c.97-.43 1.9.24 1.53 1.73z"/>
                    </svg>
                    
                    <p className="text-xl font-semibold text-gray-100 mb-5"> {/* Restored text */}
                      Contact CEO on Telegram
                    </p>
                    <a 
                      href="https://t.me/krasnogir" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn bg-[#1C1C1C] hover:bg-[#27272A] text-white shadow-md transform inline-flex items-center px-8 py-2 rounded-lg whitespace-nowrap" /* Increased px from 4 to 8 */
                    >
                      Contact
                    </a>
                  </div>
                  {/* === RESTORED TELEGRAM CONTENT END === */}
                </div>
              </div>
              {/* === NEW CARD JSX END === */}
            </div>
            {/* === UPDATED CONTENT END === */}

          </div>
        </ScrollAnimation>
        
        {/* === REMOVED CUBE STYLES === */}
        {/* === STYLES FOR THE NEW CARD === */}
        <style jsx>{`
          /* Copied CSS from user's StyledWrapper */
          .e-card {
            /* Removed margin: 100px auto; - positioning handled by parent */
            background: transparent;
            box-shadow: 0px 8px 28px -9px rgba(0,0,0,0.45);
            position: relative; /* Keep relative for wave positioning */
            width: 240px;
            height: 330px;
            border-radius: 16px;
            overflow: hidden;
          }

          .wave {
            position: absolute;
            width: 540px;
            height: 700px;
            opacity: 0.6;
            left: 0;
            top: 0;
            margin-left: -50%;
            margin-top: -70%;
            /* Changed gradient colors to softer/darker versions of brand colors */
            background: linear-gradient(744deg, #ca8a04, #c2410c 60%, #be185d);
          }

          .icon {
            width: 3em;
            margin-top: -1em;
            padding-bottom: 1em;
            color: white; /* Ensure icon color is visible */
          }

          .infotop {
            text-align: center;
            font-size: 20px;
            position: absolute;
            top: 5.6em;
            left: 0;
            right: 0;
            color: rgb(255, 255, 255);
            font-weight: 600;
            z-index: 1; /* Ensure text is above waves */
          }

          .name {
            font-size: 14px;
            font-weight: 100;
            position: relative;
            top: 1em;
            text-transform: lowercase;
          }

          .wave:nth-child(2),
          .wave:nth-child(3) {
            top: 210px;
          }
          
          /* Applying animation based on parent class */
          .playing .wave {
            border-radius: 40%;
            animation: wave 3000ms infinite linear;
          }

          /* Default state (if not playing) - keeping it consistent */
          .wave {
             border-radius: 40%; 
             /* Consider if default animation is needed */
             /* animation: wave 55s infinite linear; */
          }

          .playing .wave:nth-child(2) {
            animation-duration: 4000ms;
          }
          
          /* Default state (if not playing) - keeping it consistent */
          /*
          .wave:nth-child(2) {
            animation-duration: 50s;
          }
          */

          .playing .wave:nth-child(3) {
            animation-duration: 5000ms;
          }

          /* Default state (if not playing) - keeping it consistent */
          /*
          .wave:nth-child(3) {
            animation-duration: 45s;
          }
          */

          @keyframes wave {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}</style>

      </div>
    </section>
  );
} 