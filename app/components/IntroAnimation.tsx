'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function IntroAnimation() {
  const [animationStage, setAnimationStage] = useState(0);
  // 0 - начальное состояние (название посередине)
  // 1 - анимация перемещения названия в хедер
  // 2 - анимация завершена, контент отображается

  useEffect(() => {
    // Проверяем, был ли уже показан интро
    const hasSeenIntro = sessionStorage.getItem('hasSeenIntro');
    
    if (hasSeenIntro) {
      // Если интро уже был показан, пропускаем его
      setAnimationStage(2);
      return;
    }
    
    // Начинаем анимацию через небольшую задержку
    const timer1 = setTimeout(() => {
      setAnimationStage(1);
    }, 3500);

    // Завершаем анимацию
    const timer2 = setTimeout(() => {
      setAnimationStage(2);
      // Запоминаем, что интро был показан
      sessionStorage.setItem('hasSeenIntro', 'true');
    }, 5500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  // Если анимация завершена, не отображаем этот компонент
  if (animationStage === 2) return null;

  return (
    <div className="fixed inset-0 bg-[#030508] flex flex-col items-center justify-center z-[100] animate-fadeOut pointer-events-none">
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center"
      >
        <div className="text-5xl font-bold text-white mb-4">
          Gear <span className="text-gradient-brand">App</span>
        </div>
        <div className="flex justify-center space-x-2">
          <span className="h-2 w-2 bg-gray-500 rounded-full animate-pulse"></span>
          <span className="h-2 w-2 bg-gray-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></span>
          <span className="h-2 w-2 bg-gray-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></span>
        </div>
      </motion.div>
    </div>
  );
} 