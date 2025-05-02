'use client';

import React from 'react';
import ScrollAnimation from './ScrollAnimation';

export default function MissionSection() {
  return (
    <section id="mission" className="py-20">
      <div className="container mx-auto px-4">
        <ScrollAnimation animation="fadeInUp" duration={1000}>
          <div className="max-w-4xl mx-auto bg-[#0c1322] p-8 rounded-xl border border-[#1a2235] shadow-lg text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Our Mission</h2>
            <p className="text-gray-300">
              Developing mobile apps that bring joy to our users is our mission. We strive to produce user-friendly, intuitive, and attractive Security and Lifestyle applications to make sure our customers have a great experience. Our apps will focus on speed and efficiency, allowing our users to get the most out of their experience while using our products. Our goal is to provide users with a great mobile experience that keeps them coming back for more.
            </p>
            {/* Optional: Add introductory text about LightApps Studio below if needed */}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
} 