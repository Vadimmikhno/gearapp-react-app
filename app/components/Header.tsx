"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full flex justify-center px-4 py-2">
      <div className="w-full max-w-4xl bg-black/30 backdrop-blur-sm rounded-2xl py-4 px-6 flex justify-between items-center border border-gray-700/50 relative">
        <Link href="/" className="flex items-center" onClick={closeMenu}>
          <span className="text-xl font-bold text-white">
            Gear <span className="text-gradient-brand">App</span>
          </span>
        </Link>
        
        <nav className="hidden md:flex space-x-8">
          <Link href="#hero" className="font-medium text-gray-300 hover:text-indigo-400 transition duration-300">
            Home
          </Link>
          <Link href="#growth-services" className="font-medium text-gray-300 hover:text-indigo-400 transition duration-300">
            Products
          </Link>
          <Link href="#contact" className="font-medium text-gray-300 hover:text-indigo-400 transition duration-300">
            Contacts
          </Link>
        </nav>
        
        <div className="md:hidden">
          <button onClick={toggleMenu} className="p-2 text-white" aria-label="Toggle menu">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="absolute top-full right-0 mt-2 w-56 md:hidden bg-black/60 backdrop-blur-sm rounded-lg border border-gray-700/50 p-3 shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <nav className="flex flex-col space-y-2">
                <Link href="#hero" onClick={closeMenu} className="block px-3 py-1.5 rounded-md text-base font-medium text-gray-200 hover:bg-gray-700/50 hover:text-white transition-colors duration-150 border border-gray-500/40">
                  Home
                </Link>
                <Link href="#growth-services" onClick={closeMenu} className="block px-3 py-1.5 rounded-md text-base font-medium text-gray-200 hover:bg-gray-700/50 hover:text-white transition-colors duration-150 border border-gray-500/40">
                  Products
                </Link>
                <Link href="#contact" onClick={closeMenu} className="block px-3 py-1.5 rounded-md text-base font-medium text-gray-200 hover:bg-gray-700/50 hover:text-white transition-colors duration-150 border border-gray-500/40">
                  Contacts
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
} 