'use client';

import React, { useState, useEffect, useRef } from 'react';

interface TypedTextProps {
  text: string;
  typingSpeed?: number;
  showCursor?: boolean;
  cursorChar?: string;
  className?: string;
  highlightedPart?: string;
  highlightedClass?: string;
  delay?: number;
  id?: string;
  onHighlightedPartTyped?: () => void;
}

export default function TypedText({
  text,
  typingSpeed = 100,
  showCursor = true,
  cursorChar = '|',
  className = '',
  highlightedPart = '',
  highlightedClass = '',
  delay = 0,
  id = '',
  onHighlightedPartTyped = () => {}
}: TypedTextProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isHighlightedPartTyped, setIsHighlightedPartTyped] = useState(false);
  const [showCursorState, setShowCursorState] = useState(true);
  const typingTimerRef = useRef<any>(null);
  const cursorTimerRef = useRef<any>(null);

  useEffect(() => {
    // Clear timers on unmount
    return () => {
      if (typingTimerRef.current) clearTimeout(typingTimerRef.current);
      if (cursorTimerRef.current) clearInterval(cursorTimerRef.current);
    };
  }, []);

  useEffect(() => {
    // Start typing animation after delay
    if (typingTimerRef.current) clearTimeout(typingTimerRef.current);
    
    typingTimerRef.current = setTimeout(() => {
      setIsTyping(true);
      let currentIndex = 0;
      
      const typeNextChar = () => {
        if (currentIndex < text.length) {
          setDisplayedText(text.substring(0, currentIndex + 1));
          currentIndex++;
          
          // Проверяем, завершено ли выделенное слово
          if (
            highlightedPart &&
            onHighlightedPartTyped &&
            !isHighlightedPartTyped &&
            text.indexOf(highlightedPart) + highlightedPart.length === currentIndex
          ) {
            setIsHighlightedPartTyped(true);
            onHighlightedPartTyped();
          }
          
          typingTimerRef.current = setTimeout(typeNextChar, typingSpeed);
        } else {
          setIsTyping(false);
        }
      };
      
      typeNextChar();
    }, delay);
    
    // Set up cursor blinking
    if (showCursor) {
      cursorTimerRef.current = setInterval(() => {
        setShowCursorState(prev => !prev);
      }, 500);
    }
  }, [text, typingSpeed, delay, showCursor, highlightedPart, onHighlightedPartTyped, isHighlightedPartTyped]);

  const renderText = () => {
    if (!highlightedPart || !displayedText.includes(highlightedPart)) {
      return <span>{displayedText}</span>;
    }

    const parts = displayedText.split(highlightedPart);
    const beforeText = parts[0];
    const afterText = parts.slice(1).join(highlightedPart);

    return (
      <>
        {beforeText}
        <span id="digital-word" className={highlightedClass || ''}>{highlightedPart}</span>
        {afterText}
      </>
    );
  };

  return (
    <span id={id} className={`${className} inline-block`}>
      {renderText()}
      {showCursor && (isTyping || showCursorState) && <span className="animate-pulse">{cursorChar}</span>}
    </span>
  );
} 