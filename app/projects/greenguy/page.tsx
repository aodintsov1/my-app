"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./greenguy.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const screenshots = [
  "https://alexanderodintsov.weebly.com/uploads/1/5/1/3/151373715/screenshot-7086_orig.png",
  "https://alexanderodintsov.weebly.com/uploads/1/5/1/3/151373715/screenshot-7083_orig.png",
  "https://alexanderodintsov.weebly.com/uploads/1/5/1/3/151373715/screenshot-7084_orig.png",
  "https://alexanderodintsov.weebly.com/uploads/1/5/1/3/151373715/screenshot-7100_orig.png",
  "https://alexanderodintsov.weebly.com/uploads/1/5/1/3/151373715/screenshot-7085_orig.png",
];

export default function GreenGuyProjectPage() {
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
      <h1 className={styles.title}>Green Guy: Shapeshifter</h1>
      <p className={styles.link}>
        <a
          href="https://aodintsov1.itch.io/green-guy"
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
          Worked in a team of four including an artist, writer, and sound designer to develop a stealth game in 2 weeks for the TritonWare Spring 2024 game jam held by Video Game Development Club at UCSD
        </li>
        <li className={styles.bulletItem}>
          Contributed as a programmer in Unity using C#
        </li>
        <li className={styles.bulletItem}>
          Implemented stealth gameplay mechanics and level design of game
        </li>
        <li className={styles.bulletItem}>
          Showcased and demonstrated the game to attendees at UCSD's Triton Gaming Expo 2024
        </li>
      </ul>
    </div>
  );
}
