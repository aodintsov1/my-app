"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./athenaeum.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const screenshots = [
  "https://alexanderodintsov.weebly.com/uploads/1/5/1/3/151373715/screenshot-7079_orig.png",
  "https://alexanderodintsov.weebly.com/uploads/1/5/1/3/151373715/screenshot-7094_orig.png",
  "https://alexanderodintsov.weebly.com/uploads/1/5/1/3/151373715/screenshot-7091_orig.png",
  "https://alexanderodintsov.weebly.com/uploads/1/5/1/3/151373715/screenshot-7082_orig.png",
  "https://alexanderodintsov.weebly.com/uploads/1/5/1/3/151373715/screenshot-7093_orig.png",
  "https://alexanderodintsov.weebly.com/uploads/1/5/1/3/151373715/screenshot-7081_orig.png",
];

export default function AthenaeumProjectPage() {
  const [current, setCurrent] = useState(0);
  const pathname = usePathname();

  const nextSlide = () =>
    setCurrent((prev) => (prev === screenshots.length - 1 ? 0 : prev + 1));
  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1));

  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <ul className={styles.menu}>
          <li>
            <Link href="/" className={pathname === "/" ? styles.active : ""}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className={pathname === "/about" ? styles.active : ""}>
              About
            </Link>
          </li>
        </ul>
      </nav>
      <h1 className={styles.title}>Athenaeum</h1>
      <p className={styles.link}>
        <a
          href="https://ethancreek.itch.io/athenaeum"
          target="_blank"
          rel="noopener noreferrer"
        >
          Itch.io
        </a>
      </p>
      <div className={styles.slideshow}>
        <button onClick={prevSlide} className={styles.arrow}>
          ◀
        </button>
        <div className={styles.imageWrapper}>
          <Image
            src={screenshots[current]}
            alt={`Athenaeum screenshot ${current + 1}`}
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
        <button onClick={nextSlide} className={styles.arrow}>
          ▶
        </button>
      </div>
      <ul className={styles.bulletList}>
        <li className={styles.bulletItem}>
          Collaborated with 27 programmers of Video Game Development Club at UCSD to develop a roguelike deck-building card game
        </li>
        <li className={styles.bulletItem}>
          Contributed as a programmer in Unity using C#
        </li>
        <li className={styles.bulletItem}>
          Implemented multiple cards, abilities, and UI highlighting based on gameplay conditions to enhance clarity
        </li>
        <li className={styles.bulletItem}>
          Game was presented to attendees at UCSD's Triton Gaming Expo 2024
        </li>
      </ul>
    </div>
  );
}
