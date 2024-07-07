"use client";
import { useState, useEffect } from "react";

const DynamicText = () => {
  const [currentText, setCurrentText] = useState("");
  const phrases = ["DoAwesome", "DoGreat", "Innovate"];
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const currentPhrase = phrases[phraseIndex];
      setCurrentText("#We" + currentPhrase.substring(0, charIndex));

      if (!isDeleting && charIndex === currentPhrase.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
      }

      setCharIndex((prevIndex) => prevIndex + (isDeleting ? -1 : 1));
    };

    const typingSpeed = isDeleting ? 100 : 200;
    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, phrases, phraseIndex]);

  return <div className="text-3xl font-bold text-center">{currentText}</div>;
};

export default DynamicText;
