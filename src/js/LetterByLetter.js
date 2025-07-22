// src/components/LetterByLetter.js
import React, { useEffect, useState } from 'react';
import './LetterByLetter.css'; // 스타일은 별도 CSS로 분리

function LetterByLetter({ text, delay = 100, className = '' }) {
  const [displayedCount, setDisplayedCount] = useState(0);

  useEffect(() => {
    if (displayedCount < text.length) {
      const timer = setTimeout(() => {
        setDisplayedCount(displayedCount + 1);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [displayedCount, text, delay]);

  return (
    <p className={`letter-text ${className}`}>
      {text.split('').map((char, index) => (
        <span
          key={index}
          className={`letter ${index < displayedCount ? 'visible' : ''}`}
        >
          {char}
        </span>
      ))}
    </p>
  );
}

export default LetterByLetter;
