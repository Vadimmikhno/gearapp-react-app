"use client";

import React, { useEffect, useState } from 'react';
import HeroSection from './components/HeroSection';
import ProductsSection from './components/ServicesSection';
import ContactSection from './components/ContactSection';
import AppMarquee from './components/AppMarquee'; // Этот импорт был, но не использовался в JSX, оставляем?
import AppShowcaseSection from './components/AppShowcaseSection';
import PartnersSection from './components/PartnersSection'; // Возвращаем PartnersSection
import ValidationSection from './components/ValidationSection'; // Add import for the new component
import PartnershipSection from './components/PartnershipSection'; // Import the new section
import { useLoadingAnimations } from './hooks/useAnimations';

export default function Home() {
  const [contentVisible, setContentVisible] = useState(false);
  
  const isLoaded = useLoadingAnimations({
    scroll: true,
    parallax: true,
    hover: true,
    typing: true,
    cursor: false // Убедитесь, что настройки анимации верны
  });

  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem('hasSeenIntro');
    
    if (hasSeenIntro) {
      setContentVisible(true);
    } else {
      const timer = setTimeout(() => {
        setContentVisible(true);
      }, 5500); // Возможно, стоит настроить задержку
      
      sessionStorage.setItem('hasSeenIntro', 'true'); // Добавлено сохранение флага
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <main className={isLoaded ? 'page-loaded' : 'page-loading'}>
      <div className={`transition-opacity duration-1500 ${contentVisible ? 'opacity-100' : 'opacity-0'}`}>
        <HeroSection />
        <AppShowcaseSection />
        <ProductsSection />
        <ValidationSection />
        <PartnershipSection />
        <PartnersSection />
        <ContactSection />
      </div>
    </main>
  );
} 