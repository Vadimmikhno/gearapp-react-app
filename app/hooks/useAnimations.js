"use client";

import { useEffect, useState } from 'react';
import { 
  initScrollAnimations, 
  initParallaxEffect, 
  initHoverEffects, 
  initTypingAnimation,
  initCursorFollow
} from '../components/animations';

/**
 * Хук для инициализации различных анимаций на странице
 * @param {Object} options - Опции анимаций
 * @param {boolean} options.scroll - Включить анимации при скролле
 * @param {boolean} options.parallax - Включить эффект параллакса
 * @param {boolean} options.hover - Включить эффекты при наведении
 * @param {boolean} options.typing - Включить эффект печатающегося текста
 * @param {boolean} options.cursor - Включить эффект следования за курсором
 * @returns {void}
 */
export default function useAnimations({
  scroll = true,
  parallax = false, 
  hover = true,
  typing = false,
  cursor = false
} = {}) {
  useEffect(() => {
    // Массив для сбора функций очистки эффектов
    const cleanupFunctions = [];
    
    if (scroll) {
      const cleanup = initScrollAnimations();
      if (cleanup) cleanupFunctions.push(cleanup);
    }
    
    if (parallax) {
      const cleanup = initParallaxEffect();
      if (cleanup) cleanupFunctions.push(cleanup);
    }
    
    if (hover) {
      const cleanup = initHoverEffects();
      if (cleanup) cleanupFunctions.push(cleanup);
    }
    
    if (typing) {
      const cleanup = initTypingAnimation();
      if (cleanup) cleanupFunctions.push(cleanup);
    }
    
    if (cursor) {
      const cleanup = initCursorFollow();
      if (cleanup) cleanupFunctions.push(cleanup);
    }
    
    // Функция очистки, вызываемая при размонтировании компонента
    return () => {
      cleanupFunctions.forEach(cleanup => {
        if (typeof cleanup === 'function') {
          cleanup();
        }
      });
    };
  }, [scroll, parallax, hover, typing, cursor]);
}

/**
 * Хук для инициализации анимаций только после полной загрузки страницы
 * @param {Object} options - Те же опции, что и для useAnimations
 * @returns {boolean} isLoaded - Флаг, указывающий, загружена ли страница
 */
export function useLoadingAnimations(options = {}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const { scroll = true, parallax = false, hover = true, typing = false, cursor = false } = options;
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Если документ уже загружен
      if (document.readyState === 'complete') {
        setIsLoaded(true);
      } else {
        // Иначе ждем загрузки
        const handleLoad = () => setIsLoaded(true);
        window.addEventListener('load', handleLoad);
        return () => window.removeEventListener('load', handleLoad);
      }
    }
  }, []);
  
  // Инициализируем анимации напрямую здесь, а не через другой хук
  useEffect(() => {
    if (!isLoaded) return;
    
    // Массив для сбора функций очистки эффектов
    const cleanupFunctions = [];
    
    if (scroll) {
      const cleanup = initScrollAnimations();
      if (cleanup) cleanupFunctions.push(cleanup);
    }
    
    if (parallax) {
      const cleanup = initParallaxEffect();
      if (cleanup) cleanupFunctions.push(cleanup);
    }
    
    if (hover) {
      const cleanup = initHoverEffects();
      if (cleanup) cleanupFunctions.push(cleanup);
    }
    
    if (typing) {
      const cleanup = initTypingAnimation();
      if (cleanup) cleanupFunctions.push(cleanup);
    }
    
    if (cursor) {
      const cleanup = initCursorFollow();
      if (cleanup) cleanupFunctions.push(cleanup);
    }
    
    // Функция очистки, вызываемая при размонтировании компонента
    return () => {
      cleanupFunctions.forEach(cleanup => {
        if (typeof cleanup === 'function') {
          cleanup();
        }
      });
    };
  }, [isLoaded, scroll, parallax, hover, typing, cursor]);
  
  return isLoaded;
} 