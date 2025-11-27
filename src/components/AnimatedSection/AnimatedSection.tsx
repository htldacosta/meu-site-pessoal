import React, { useEffect, useRef, useState } from "react";
import { BaseProps } from "../../types"; // Importando o tipo que criamos
import "./AnimatedSection.css";

interface AnimatedSectionProps extends BaseProps {
  // Adicione outras props específicas se houver, ex: delay?: number
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
      if (currentElement) {
        observer.unobserve(currentElement);
      }
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
