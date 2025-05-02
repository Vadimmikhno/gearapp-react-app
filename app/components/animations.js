"use client";

// Функции для анимаций и эффектов для веб-сайта

export function initScrollAnimations() {
  // Проверяем, находимся ли мы в браузере
  if (typeof window === 'undefined') return;

  const observerOptions = {
    root: null, // использовать viewport как область видимости
    rootMargin: '0px',
    threshold: 0.1 // элемент считается видимым, когда 10% его площади видны
  };

  const fadeElements = document.querySelectorAll('.fade-in-up');
  const staggerElements = document.querySelectorAll('.stagger-children');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  fadeElements.forEach(el => observer.observe(el));
  staggerElements.forEach(el => observer.observe(el));

  return () => {
    fadeElements.forEach(el => observer.unobserve(el));
    staggerElements.forEach(el => observer.unobserve(el));
  };
}

export function initParallaxEffect() {
  // Проверяем, находимся ли мы в браузере
  if (typeof window === 'undefined') return;

  const parallaxElements = document.querySelectorAll('.parallax');

  function handleParallax() {
    const scrollTop = window.pageYOffset;
    
    parallaxElements.forEach(element => {
      const speed = element.dataset.speed || 0.5;
      const offset = scrollTop * speed;
      element.style.transform = `translateY(${offset}px)`;
    });
  }

  window.addEventListener('scroll', handleParallax);
  
  return () => {
    window.removeEventListener('scroll', handleParallax);
  };
}

export function initHoverEffects() {
  // Проверяем, находимся ли мы в браузере
  if (typeof window === 'undefined') return;

  const hoverElements = document.querySelectorAll('.hover-effect');
  
  hoverElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      el.classList.add('hovered');
    });
    
    el.addEventListener('mouseleave', () => {
      el.classList.remove('hovered');
    });
  });

  return () => {
    hoverElements.forEach(el => {
      el.removeEventListener('mouseenter', () => {});
      el.removeEventListener('mouseleave', () => {});
    });
  };
}

export function initTypingAnimation() {
  // Проверяем, находимся ли мы в браузере
  if (typeof window === 'undefined') return;

  const typingElements = document.querySelectorAll('.typing-animation');
  
  typingElements.forEach(element => {
    const text = element.textContent;
    element.textContent = '';
    element.classList.add('cursor');
    
    let i = 0;
    const typeInterval = setInterval(() => {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
      } else {
        clearInterval(typeInterval);
        element.classList.remove('cursor');
      }
    }, 100);
  });
}

export function initAllAnimations() {
  const cleanupFunctions = [
    initScrollAnimations(),
    initParallaxEffect(),
    initHoverEffects(),
    initTypingAnimation()
  ].filter(Boolean);
  
  return () => {
    cleanupFunctions.forEach(cleanup => typeof cleanup === 'function' && cleanup());
  };
}

// Утилитарная функция для добавления класса к элементу с задержкой
export function addClassWithDelay(element, className, delay) {
  setTimeout(() => {
    element.classList.add(className);
  }, delay);
}

// Функция для создания эффекта следования за курсором
export function initCursorFollow() {
  if (typeof window === 'undefined') return;
  
  const follower = document.createElement('div');
  follower.className = 'cursor-follower';
  document.body.appendChild(follower);
  
  document.addEventListener('mousemove', (e) => {
    follower.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  });
  
  return () => {
    document.removeEventListener('mousemove', () => {});
    document.body.removeChild(follower);
  };
} 