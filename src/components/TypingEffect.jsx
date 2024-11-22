// src/TypingEffect.js

import React, { useState, useEffect } from 'react';
import './TypingEffect.css';  

const TypingEffect = () => {
  const lines = [
    "Hi There 👋🏻...!",
    "I'm Yash Ghavghave...😎",
    "Welcome to my portfolio! 🚀"
  ];

  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isErasing, setIsErasing] = useState(false);

  useEffect(() => {

    let timeout;
    if (!isErasing && currentText.length < lines[currentLineIndex].length) {
      timeout = setTimeout(() => {
        setCurrentText((prev) => prev + lines[currentLineIndex][prev.length]);
      }, 100); 
    } else if (isErasing && currentText.length > 0) {
      timeout = setTimeout(() => {
        setCurrentText((prev) => prev.slice(0, -1));
      }, 50); 
    } else if (currentText.length === lines[currentLineIndex].length && !isErasing) {
      timeout = setTimeout(() => {
        setIsErasing(true);
      }, 2000); 
    } else if (currentText.length === 0 && isErasing) {
      timeout = setTimeout(() => {
        setIsErasing(false);
        setCurrentLineIndex((prevIndex) => (prevIndex + 1) % lines.length); 
      }, 1000); 
    }

    return () => clearTimeout(timeout);
  }, [currentText, isErasing, currentLineIndex, lines]);

  return (
    <div className="items-center h-[80%] bg-transparent absolute left-[40vw] top-[32vh] max-sm:top-[73vh] max-sm:text-sm max-sm:left-[20vw]" >
      <div className="text-center text-2xl font-mono overflow-hidden relative">
        <span className="inline-block">{currentText}</span>
        <span className="absolute right-0 top-0 border-r-4 border-black animate-blink"></span>
      </div>
    </div>
  );
};

export default TypingEffect;
