"use client";
import React, { useState, useEffect, useRef } from "react";
import "./button-style.css";

const ScrollToTopButton = ({ containerRef }) => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (containerRef.current && containerRef.current.scrollTop > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const currentContainer = containerRef.current;
    if (currentContainer) {
      currentContainer.addEventListener("scroll", toggleVisibility);
    }
    return () => {
      if (currentContainer) {
        currentContainer.removeEventListener("scroll", toggleVisibility);
      }
    };
  }, [containerRef]);

  return (
    <div className="scroll-to-top">
      {isVisible && <button onClick={scrollToTop}>↑</button>}
    </div>
  );
};

export default ScrollToTopButton;
