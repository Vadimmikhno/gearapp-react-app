'use client';

import React from 'react';
import ScrollAnimation from './ScrollAnimation';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#2c3651] rounded-full mix-blend-multiply opacity-10 filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#3c3359] rounded-full mix-blend-multiply opacity-10 filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <ScrollAnimation animation="fadeInDown" duration={1000}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Values</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#2c3651] to-[#3c3359] mx-auto mt-4"></div>
            <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
              Our core values drive us to improve the world through innovative apps. We aim to be the largest app studio, leading with innovation and top-tier service.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
          <ScrollAnimation animation="fadeInLeft" duration={1000} delay={100}>
             <div className="text-center md:text-left p-6 bg-[#131b30]/50 border border-[#1a2235]/70 rounded-xl backdrop-blur-sm">
                <h3 className="text-2xl font-semibold text-white mb-3">Global Reach</h3>
                <p className="text-gray-400">
                   Our apps are available worldwide, accessible to everyone.
                </p>
             </div>
          </ScrollAnimation>
          <ScrollAnimation animation="fadeInRight" duration={1000} delay={100}>
             <div className="text-center md:text-left p-6 bg-[#131b30]/50 border border-[#1a2235]/70 rounded-xl backdrop-blur-sm">
                <h3 className="text-2xl font-semibold text-white mb-3">Feedback-Driven Improvement</h3>
                <p className="text-gray-400">
                   We value user reviews and actively use feedback to enhance our products.
                </p>
             </div>
          </ScrollAnimation>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
          <ScrollAnimation animation="fadeInUp" duration={1000} delay={200}>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#2c3651] to-[#3c3359] mb-6 shadow-lg">
                <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Quality</h3>
              <p className="text-gray-400">
                We prioritize sustainability and collaboration, creating quality products and services designed for maximum value and mutual respect.
              </p>
            </div>
          </ScrollAnimation>
          
          <ScrollAnimation animation="fadeInUp" duration={1000} delay={400}>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#2c3651] to-[#3c3359] mb-6 shadow-lg">
                <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Security</h3>
              <p className="text-gray-400">
                Our expert team develops innovative security apps, creating reliable software to protect sensitive data and transactions.
              </p>
            </div>
          </ScrollAnimation>
          
          <ScrollAnimation animation="fadeInUp" duration={1000} delay={600}>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#2c3651] to-[#3c3359] mb-6 shadow-lg">
                <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">User-friendly</h3>
              <p className="text-gray-400">
                We design for an efficient, intuitive, and enjoyable user experience, aiming to create products appreciated worldwide.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
