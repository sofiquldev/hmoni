"use client";
import React, { useEffect, useRef } from "react";
import styles from "./styles/parallax-bg.module.scss";

const ParallaxBG = () => {
  const containerRef = useRef(null);
  const requestRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const images = container.querySelectorAll("img");

    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    
    const ease = 0.05; // Adjust this value for a more or less responsive effect

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      // Calculate the target positions based on easing
      targetX += (mouseX - targetX) * ease;
      targetY += (mouseY - targetY) * ease;

      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const xOffset = (targetX - centerX) / centerX;
      const yOffset = (targetY - centerY) / centerY;

      images.forEach((img, index) => {
        const movementIntensity = (index + 1) * 10; // Increase movement per layer
        const xMovement = xOffset * movementIntensity;
        const yMovement = yOffset * movementIntensity;

        img.style.transform = `translate(${xMovement}px, ${yMovement}px)`;
      });

      requestRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animate(); // Start the animation loop

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <div className={styles.comingSoon} ref={containerRef}>
      <img src="/shapes/01.svg" alt="bg-elements" />
      <img src="/shapes/02.svg" alt="bg-elements" />
      <img src="/shapes/03.svg" alt="bg-elements" />
      <img src="/shapes/04.svg" alt="bg-elements" />
      <img src="/shapes/05.svg" alt="bg-elements" />
      <img src="/shapes/06.svg" alt="bg-elements" />
      <img src="/shapes/07.svg" alt="bg-elements" />
      <img src="/shapes/08.svg" alt="bg-elements" />
      <img src="/shapes/09.svg" alt="bg-elements" />
      <img src="/shapes/10.svg" alt="bg-elements" />
    </div>
  );
};

export default ParallaxBG;
