'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  UserGroupIcon,
  ArrowTrendingUpIcon,
  ChartBarIcon,
  BriefcaseIcon,
  ArrowsPointingOutIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline';

const PartnershipSection = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const offerings = [
    {
      icon: UserGroupIcon,
      text: 'Revenue share & growth partnerships',
      colorClass: 'text-gray-400',
      details: 'We create win-win scenarios, sharing revenue and risk to scale promising apps together. Ideal for developers seeking resources and expertise.'
    },
    {
      icon: ArrowTrendingUpIcon,
      text: 'Go-to-market strategy & user acquisition',
      colorClass: 'text-gray-400',
      details: 'From pre-launch buzz to sustained user growth, we craft and execute data-driven marketing strategies to find your target audience.'
    },
    {
      icon: ChartBarIcon,
      text: 'App monetization & performance optimization',
      colorClass: 'text-gray-400',
      details: `Maximize your app's potential with tailored monetization models (ads, IAPs, subscriptions) and continuous performance tuning.`
    },
    {
      icon: BriefcaseIcon,
      text: 'Exit-ready product development',
      colorClass: 'text-gray-400',
      details: 'Building with the end in mind. We help refine your product, metrics, and presentation to attract buyers and achieve successful exits.'
    }
  ];

  const baseCardVariants = {
    initial: { opacity: 0, y: 20, borderColor: 'rgba(26, 34, 53, 0.7)' },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.1, type: 'spring', stiffness: 100, damping: 12 }
    }),
    hover: { 
      borderColor: 'rgba(99, 102, 241, 0.6)'
    }
  };
  
  const iconAnimationVariants = {
    initial: { scale: 1, rotate: 0, y: 0, x: 0 },
    hover: { 
      scale: 1.15, 
      rotate: 5, 
      transition: { type: 'spring', stiffness: 400, damping: 10 }
    }
  };

  const detailsVariants = {
    initial: { opacity: 0, y: 10 },
    hover: { 
      opacity: 1, 
      y: 0,
      transition: { 
        opacity: { duration: 0.3, delay: 0.15 },
        y: { type: 'spring', stiffness: 200, damping: 15, delay: 0.1 }
      }
    }
  };

  const getIconHoverAnimation = (IconComponent: React.ElementType) => {
    switch (IconComponent) {
      case ArrowTrendingUpIcon:
        return { y: -4, x: 2, scale: 1.1, rotate: 3, transition: { type: 'spring', stiffness: 400, damping: 10 } };
      case ChartBarIcon:
        return { scale: 1.15, rotate: -4, transition: { type: 'spring', stiffness: 400, damping: 10 } };
      case BriefcaseIcon:
         return { scale: 1.12, rotate: 2, transition: { type: 'spring', stiffness: 400, damping: 10 } };
      case UserGroupIcon:
        return { scale: 1.15, rotate: 5, transition: { type: 'spring', stiffness: 400, damping: 10 } };
      default:
        return { scale: 1.1, rotate: 0, transition: { type: 'spring', stiffness: 400, damping: 10 } };
    }
  };

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Optional decorative elements */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-[#3c3359] rounded-full mix-blend-screen filter blur-3xl opacity-10"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-[#2c3651] rounded-full mix-blend-screen filter blur-3xl opacity-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
          <motion.h3 
            className="text-3xl md:text-4xl font-semibold mb-6 text-white"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            We partner with developers, studios, and investors to launch and <span className="text-gradient-brand">grow</span> mobile apps.
          </motion.h3>
          <motion.p 
            className="text-lg md:text-xl text-gray-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Whether you're a solo dev with a great idea, a studio looking for a marketing partner, or an investor searching for the next breakout product — Gear App is your go-to.
          </motion.p>
        </div>

        <h4 className="text-center text-2xl font-medium text-gray-100 mb-10">We offer:</h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12 md:mb-16 relative">
          {offerings.map((offering, index) => {
            const Icon = offering.icon;
            return (
              <motion.div
                key={index}
                layoutId={`partnership-card-${index}`}
                className="group flex flex-col items-start p-6 bg-[#1C1C1C]/80 border border-gray-600/50 rounded-lg backdrop-blur-sm space-x-4 overflow-hidden cursor-pointer shadow-lg hover:bg-[#27272A]/90 hover:border-gray-500/70 transition-colors duration-300"
                custom={index}
                initial="initial"
                whileInView="animate"
                onTap={() => setSelectedIndex(index)}
                viewport={{ once: true, amount: 0.3 }}
              >
                <ArrowsPointingOutIcon 
                  className="absolute top-3 right-3 w-5 h-5 text-gray-400 opacity-30 group-hover:opacity-60 transition-opacity duration-200 pointer-events-none"
                />
                <div className="flex items-start w-full">
                  <motion.div>
                    <Icon className={`w-7 h-7 text-gray-300 flex-shrink-0 mt-1 mr-4`} />
                  </motion.div>
                  <p className="text-md text-gray-200 flex-1 font-medium">{offering.text}</p>
                </div>
              </motion.div>
            );
          })}
        
          <AnimatePresence>
            {selectedIndex !== null && (
              <motion.div
                key={`modal-container-${selectedIndex}`}
                className="fixed inset-0 z-40 flex items-center justify-center p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div 
                  className="absolute inset-0 bg-black/70" 
                  onClick={() => setSelectedIndex(null)}
                />

                <motion.div
                  key={`expanded-card-${selectedIndex}`}
                  layoutId={`partnership-card-${selectedIndex}`}
                  className="relative w-11/12 md:w-3/4 lg:w-1/2 max-w-2xl h-fit z-50 flex flex-col items-start p-8 rounded-xl backdrop-blur-md overflow-hidden shadow-2xl bg-[#27272A]/95 border border-gray-500/80"
                  transition={{ type: 'spring', stiffness: 250, damping: 25 }}
                >
                  {(() => {
                    const offering = offerings[selectedIndex];
                    const Icon = offering.icon;
                    return (
                      <>
                        <button onClick={() => setSelectedIndex(null)} className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                          </svg>
                        </button>

                        <div className="flex items-start w-full mb-4">
                          <motion.div
                            variants={{
                              initial: iconAnimationVariants.initial,
                              hover: getIconHoverAnimation(Icon)
                            }}
                            initial="initial"
                            whileHover="hover"
                          >
                            <Icon className={`w-7 h-7 text-gray-300 flex-shrink-0 mt-1 mr-4`} />
                          </motion.div>
                          <p className="text-md text-gray-100 flex-1 font-medium mr-8">{offering.text}</p>
                        </div>
                        <motion.div
                          className="pl-11 w-full overflow-hidden"
                          variants={detailsVariants}
                          initial="initial"
                          animate="hover"
                          exit="initial"
                        >
                          <p className="text-sm text-gray-400 pt-1">{offering.details}</p>
                        </motion.div>
                      </>
                    );
                  })()}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-gray-300 mb-6">
            Let's talk about how we can grow something together.
          </p>
          <a 
            href="#contact"
            className="btn inline-block px-8 py-3 bg-[#1C1C1C] hover:bg-[#27272A] text-white shadow-lg hover:scale-105 transition-all duration-300 transform font-semibold"
          >
            → Get in touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default PartnershipSection; 