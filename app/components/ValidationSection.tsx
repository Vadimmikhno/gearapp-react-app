import React from 'react';
import { motion } from 'framer-motion'; // Import motion
// Import necessary icons from Heroicons
import {
  ClipboardDocumentListIcon,
  LightBulbIcon,
  RocketLaunchIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';

const ValidationSection = () => {
  
  // Define card variants for hover effects
  const cardVariants = {
    initial: { scale: 1, borderColor: 'rgba(26, 34, 53, 0.8)' }, // border-[#1a2235]/80
    hover: { 
      scale: 1.03, 
      borderColor: 'rgba(63, 63, 70, 0.7)', // Changed from indigo to zinc-700 equivalent with alpha
      backgroundColor: 'rgba(19, 27, 48, 0.8)' // hover:bg-[#131b30]/80
    }
  };

  // Define benefits with specific icon animation variants
  const benefits = [
    {
      icon: ClipboardDocumentListIcon,
      text: '100+ niches researched',
      iconVariants: {
        initial: { scale: 1, rotateX: 0 },
        hover: { 
          scale: 1.15, 
          rotateX: 15, 
          transition: { type: 'spring', stiffness: 300, damping: 10 }
        }
      }
    },
    {
      icon: LightBulbIcon,
      text: 'Hypothesis → MVP → Results',
      iconVariants: {
        initial: { scale: 1, filter: 'brightness(1) drop-shadow(0 0 0px rgba(250,204,21,0))' },
        hover: { 
          scale: 1.1, 
          filter: [
            'brightness(1.5) drop-shadow(0 0 8px rgba(250,204,21,0.7))',
            'brightness(1.2) drop-shadow(0 0 4px rgba(250,204,21,0.5))',
            'brightness(1.5) drop-shadow(0 0 8px rgba(250,204,21,0.7))' // Repeat start for smooth loop
          ],
          transition: {
            scale: { type: 'spring', stiffness: 400, damping: 10 },
            filter: { repeat: Infinity, duration: 0.8, ease: 'easeInOut' }
          }
        }
      }
    },
    {
      icon: RocketLaunchIcon,
      text: 'Launch experiments in 3–5 days',
      iconVariants: {
        initial: { y: 0, rotate: 0, scale: 1 },
        hover: { 
          y: -20, 
          scale: 1.1, 
          rotate: [-2, 2, -2], // Vibration
          transition: {
            y: { type: 'spring', stiffness: 300, damping: 15 },
            scale: { type: 'spring', stiffness: 300, damping: 15 },
            rotate: { repeat: Infinity, duration: 0.15, ease: 'linear' }
          }
        }
      }
    },
    {
      icon: UserGroupIcon,
      text: 'Real users. Real data. Real outcomes.',
      iconVariants: {
        initial: { scale: 1 },
        hover: { 
          scale: [1.1, 1.12, 1.1], // Breathing
          transition: { 
            scale: { repeat: Infinity, repeatType: 'mirror', duration: 0.8, ease: 'easeInOut' }
          }
        }
      }
    }
  ];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
       {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-60 h-60 bg-[#2c3651] rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-1/4 right-10 w-60 h-60 bg-[#3c3359] rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Headline and Paragraph */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 text-white">
            From idea to <span className="text-gradient-brand">insight</span> — in days, not weeks.
          </h2>
          <p className="text-lg md:text-xl text-gray-300">
            We specialize in fast market research, niche validation, and MVP testing. 
            Whether it's your idea or ours — we know how to pressure-test it with real traffic, fast.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12 md:mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div 
                key={index} 
                className="group relative overflow-hidden rounded-xl p-8 backdrop-blur-sm bg-[#1C1C1C]/80 border border-gray-600/50 shadow-lg hover:bg-[#27272A]/90 hover:border-gray-500/70 transition-colors duration-300"
                initial="initial"
                whileHover="hover"
              >
                {/* Background Icon (Static) - adjusted opacity slightly */}
                <div className="absolute top-0 right-0 -mt-8 -mr-8 w-40 h-40">
                  <Icon className="absolute -bottom-4 -right-4 w-24 h-24 text-gray-700 opacity-10 z-0 pointer-events-none" />
                </div>
                
                {/* Foreground Content Container */}
                <div className="relative z-10">
                  {/* Animated Icon Wrapper */}
                  <motion.div
                    className="relative inline-block mb-5" // Wrapper for icon and potential effects like trail
                    variants={benefit.iconVariants} 
                    // whileHover is handled by parent
                  >
                    {/* Changed icon color */}
                    <Icon className="w-10 h-10 text-gray-300" />
                    
                    {/* Conditionally render Rocket Trail */}
                    {Icon === RocketLaunchIcon && (
                      <motion.div
                        className="absolute bottom-[-5px] left-1/2 w-2 h-0 bg-gradient-to-t from-orange-400 to-transparent origin-bottom"
                        style={{ translateX: '-50%', filter: 'blur(1px)' }}
                        variants={{
                          initial: { height: '0px', opacity: 0 },
                          hover: { height: '20px', opacity: [0, 0.8, 0] }
                        }}
                        transition={{ duration: 0.4, delay: 0.05, times: [0, 0.5, 1] }}
                      />
                    )}
                  </motion.div>
                  
                  {/* Text */}
                  <p className="text-lg font-medium text-gray-100">{benefit.text}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action part */}
        <div className="text-center">
          <p className="text-xl md:text-2xl font-semibold text-gray-100 mb-4">
            Want to test your app idea?
          </p>
          <p className="text-lg text-gray-300 mb-8">
            Let us validate it before you build it.
          </p>
          <a 
            href="#contact" 
            className="btn inline-block px-8 py-3 bg-[#1C1C1C] hover:bg-[#27272A] text-white shadow-lg hover:scale-105 transition-all duration-300 transform font-semibold"
          >
            → Validate your idea with us
          </a>
        </div>
      </div>
    </section>
  );
};

export default ValidationSection; 