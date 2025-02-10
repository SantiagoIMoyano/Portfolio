'use client';

import styles from "@/app/styles/typingEffect.module.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const TypingEffect = ({ text, speed, className, fadeOutAfterTyping }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const router = useRouter();

  useEffect(() => {
    let timeout;
    if (index < text.length) {
      timeout = setTimeout(() => {
        setDisplayedText(displayedText + text[index]);
        setIndex(index + 1);
      }, speed);
    } else if (fadeOutAfterTyping) {
      timeout = setTimeout(() => {
        setFadeOut(true);
        setTimeout(() => {
          router.push("/principal");
        }, 2000); // Espera 2 segundos antes de redirigir
      }, 1000); // Espera 1 segundo antes de iniciar el desvanecimiento
    }
    return () => clearTimeout(timeout);
  }, [index, text, displayedText, speed, fadeOutAfterTyping, router]);

  return (
    <span className={`${styles["orbitron-presentation"]} ${className} ${fadeOut ? styles["fade-out"] : ""}`}>
      {displayedText}|
    </span>
  );
};

export default TypingEffect;