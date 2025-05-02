'use client';

import React, { useEffect, useState } from 'react';

interface DropChar {
  id: number;
  char: string;
  x: number;
  y: number;
  opacity: number;
  speed: number;
}

interface DigitalRainProps {
  sourceText?: string;
  sourceElementId?: string;
  maxChars?: number;
  colors?: string[];
  active?: boolean;
}

export default function DigitalRain({
  sourceText = "digital",
  sourceElementId,
  maxChars = 40,
  colors = ['#3e4c6d', '#4c5d8a', '#6e4d89', '#8064a9', '#a590c4'],
  active = true
}: DigitalRainProps) {
  const [chars, setChars] = useState<DropChar[]>([]);
  const [sourceRect, setSourceRect] = useState<DOMRect | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  // Находим координаты исходного элемента
  useEffect(() => {
    if (!isInitialized && active && typeof window !== 'undefined') {
      const findSourceElement = () => {
        if (sourceElementId) {
          const element = document.getElementById(sourceElementId);
          if (element) {
            const rect = element.getBoundingClientRect();
            setSourceRect(rect);
            setIsInitialized(true);
          }
        } else {
          // Ищем элемент, содержащий наш текст
          const elements = document.querySelectorAll('span');
          const elementsArray = Array.from(elements);
          
          for (const el of elementsArray) {
            if (el.textContent?.includes(sourceText)) {
              const rect = el.getBoundingClientRect();
              setSourceRect(rect);
              setIsInitialized(true);
              break;
            }
          }
        }
      };

      // Пробуем найти элемент сразу и повторно через задержку
      findSourceElement();
      const timer = setTimeout(findSourceElement, 1000);
      return () => clearTimeout(timer);
    }
  }, [sourceElementId, sourceText, isInitialized, active]);

  // Создаем и анимируем падающие символы
  useEffect(() => {
    if (!sourceRect || !active) return;

    // Генерируем случайный символ из набора символов
    const getRandomChar = () => {
      const possibleChars = sourceText.split('');
      // Добавим немного других символов для разнообразия
      const additionalChars = "01234567890*+×÷=.,:;!?-_~<>[]{}ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      return Math.random() < 0.6 
        ? possibleChars[Math.floor(Math.random() * possibleChars.length)]
        : additionalChars[Math.floor(Math.random() * additionalChars.length)];
    };

    // Функция для создания нового падающего символа
    const createNewChar = () => {
      if (chars.length >= maxChars) return null;
      
      // Получаем текущую позицию элемента (может меняться при скролле)
      const currentElement = sourceElementId 
        ? document.getElementById(sourceElementId)
        : null; // Без sourceElementId используем предыдущий sourceRect
      
      if (!currentElement && !sourceElementId) {
        // Если нет id, используем сохраненные координаты
        if (!sourceRect) return null;
        const x = sourceRect.x + Math.random() * sourceRect.width;
        const y = sourceRect.y + sourceRect.height;
        
        return {
          id: Date.now() + Math.random(),
          char: getRandomChar(),
          x,
          y,
          opacity: 1,
          speed: 1.5 + Math.random() * 3.5
        };
      }
      
      if (!currentElement) return null;
      
      const rect = currentElement.getBoundingClientRect();
      
      // Случайная позиция в пределах исходного элемента
      const x = rect.left + Math.random() * rect.width;
      const y = rect.top + rect.height; // Начинаем падение от нижней границы элемента
      
      return {
        id: Date.now() + Math.random(),
        char: getRandomChar(),
        x,
        y,
        opacity: 1,
        speed: 1.5 + Math.random() * 3.5
      };
    };

    // Создаем новые символы с периодичностью
    const createInterval = setInterval(() => {
      const newChar = createNewChar();
      if (newChar) {
        setChars(prev => [...prev, newChar]);
      }
    }, 100); // Чаще создаем символы

    // Обновляем положение символов с анимацией
    const animationInterval = setInterval(() => {
      setChars(prevChars => 
        prevChars
          .map(char => ({
            ...char,
            y: char.y + char.speed,
            opacity: char.opacity - 0.015
          }))
          .filter(char => {
            // Ограничиваем падение символов по вертикали (не больше 300px от исходного элемента)
            if (sourceElementId) {
              const sourceElement = document.getElementById(sourceElementId);
              if (sourceElement) {
                const sourceBottom = sourceElement.getBoundingClientRect().bottom;
                return char.opacity > 0 && char.y < sourceBottom + 300;
              }
            }
            
            // Если нет элемента, используем стандартное ограничение
            return char.opacity > 0 && char.y < window.innerHeight;
          })
      );
    }, 30); // Более плавная анимация

    return () => {
      clearInterval(createInterval);
      clearInterval(animationInterval);
    };
  }, [sourceRect, chars.length, sourceText, maxChars, active, sourceElementId]);

  if (!active) return null;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {chars.map(char => (
        <div
          key={char.id}
          style={{
            position: 'absolute',
            left: `${char.x}px`,
            top: `${char.y}px`,
            color: colors[Math.floor(Math.random() * colors.length)],
            opacity: char.opacity,
            transform: `scale(${0.9 + Math.random() * 0.6})`,
            textShadow: '0 0 8px currentColor',
            fontWeight: Math.random() > 0.5 ? 'bold' : 'normal',
            fontSize: `${16 + Math.random() * 10}px`
          }}
        >
          {char.char}
        </div>
      ))}
    </div>
  );
} 