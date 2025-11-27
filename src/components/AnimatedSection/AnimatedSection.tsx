import React, { useEffect, useRef, useState, ReactNode } from "react";
import "./AnimatedSection.css";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = "",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setIsVisible(entry.isIntersecting));
    });

    const currentElement = domRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) observer.unobserve(currentElement);
    };
  }, []);

  return (
    <div
      className={`fade-in-section ${
        isVisible ? "is-visible" : ""
      } ${className}`}
      ref={domRef}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
