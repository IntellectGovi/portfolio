"use client";

import { useEffect, useState } from "react";
import styles from './CustomCursor.module.css'; // Import the local CSS module

const CustomCursor: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const cursorDot = document.querySelector("[data-cursor-dot]") as HTMLElement | null;
    const cursorOutline = document.querySelector("[data-cursor-outline]") as HTMLElement | null;

    const handleMouseMove = (e: MouseEvent) => {
      if (cursorDot && cursorOutline) {
        const posX: number = e.clientX;
        const posY: number = e.clientY;

        // Set dot position instantly
        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        // Smooth animation for the outline
        cursorOutline.animate(
          {
            left: `${posX}px`,
            top: `${posY}px`,
          },
          { duration: 500, fill: "forwards" }
        );
      }
    };

    // Add mousemove event listener
    window.addEventListener("mousemove", handleMouseMove);

    // Delegate hover detection to the body
    const handleMouseEnter = (e: MouseEvent) => {
      if (e.target instanceof HTMLElement) {
        if (e.target.matches("a, button , ul , li , link , textarea")) {
          setIsHovered(true);
        }
      }
    };

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.target instanceof HTMLElement) {
        if (e.target.matches("a, button , ul , li , link , textarea")) {
          setIsHovered(false);
        }
      }
    };

    // Add event listeners to the document
    document.addEventListener("mouseenter", handleMouseEnter, true);
    document.addEventListener("mouseleave", handleMouseLeave, true);

    // Clean up on unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter, true);
      document.removeEventListener("mouseleave", handleMouseLeave, true);
    };
  }, []);

  return (
    <>
      <div
        data-cursor-dot
        className={`${styles.cursorDot} ${isHovered ? styles.cursorHoverDot : ''}`} // Add hover class dynamically
      ></div>
      <div
        data-cursor-outline
        className={`${styles.cursorOutline} ${isHovered ? styles.cursorHoverOutline : ''}`} // Add hover class dynamically
      ></div>
    </>
  );
};

export default CustomCursor;
