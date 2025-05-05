"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./athenaeum.module.css";

const screenshots = [
  "/images/athenaeum/1.png",
  "/images/athenaeum/2.png",
  "/images/athenaeum/3.png",
  "/images/athenaeum/4.png",
  "/images/athenaeum/5.png",
  "/images/athenaeum/6.png",
];

export default function AthenaeumProjectPage() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () =>
    setCurrent((prev) => (prev === screenshots.length - 1 ? 0 : prev + 1));
  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1));

  return (
    <div className={styles.container}>
      <h1>Athenaeum</h1>
      <p>
        Athenaeum is a roguelike deck-building game developed in Unity. I worked
        on implementing card functionality, UI highlights, and abilities.
      </p>

      <div className={styles.slideshow}>
        <button onClick={prevSlide} className={styles.arrow}>
          ◀
        </button>
        <div className={styles.imageWrapper}>
          <Image
            src={screenshots[current]}
            alt={`Athenaeum screenshot ${current + 1}`}
            width={500}
            height={300}
            priority
          />
        </div>
        <button onClick={nextSlide} className={styles.arrow}>
          ▶
        </button>
      </div>
    </div>
  );
}
