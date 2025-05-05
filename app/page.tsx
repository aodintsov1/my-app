"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaEnvelope, FaGithub } from "react-icons/fa";
import styles from "./page.module.css";
import { usePathname } from "next/navigation";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], weight: "600" });

export default function Page() {
  const pathname = usePathname();

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div className={`${styles.logo} ${playfair.className}`}>
          <span id="wsite-title">Alexander Odintsov</span>
        </div>

        <nav className={styles.nav}>
          <ul className={styles.menu}>
            <li>
              <Link href="/" className={pathname === "/" ? styles.active : ""}>
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/resume"
                className={pathname === "/resume" ? styles.active : ""}
              >
                Resume
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={pathname === "/about" ? styles.active : ""}
              >
                About
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section className={styles.intro}>
          <h2>Hi! I’m Alexander.</h2>
          <p>I’m a Software Engineer passionate about programming games</p>

          <div className={styles.socialIcons}>
            <a href="mailto:aodintsov4edu@gmail.com" aria-label="Email me">
              <FaEnvelope />
            </a>
            <a
              href="https://github.com/aodintsov1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my GitHub"
            >
              <FaGithub />
            </a>
          </div>
        </section>

        <section className={styles.experience}>
          <h2>Experience</h2>
          <div className={styles.cards}>
            <div>
              <a
                href="https://f84.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="https://alexanderodintsov.weebly.com/uploads/1/5/1/3/151373715/logo-2x_orig.png"
                  alt="F84 Games"
                  width={240}
                  height={80}
                />
              </a>
              <h3>F84 Games (Software Engineer Intern)</h3>
              <ul className={styles.bulletList}>
                <li className={styles.bulletItem}>
                  Contributed to a multiplayer sports game in Roblox Studio using Lua
                </li>
                <li className={styles.bulletItem}>
                  Programmed gameplay mechanics, client-server architecture, and UI components
                </li>
                <li className={styles.bulletItem}>
                  Collaborated with artists to translate assets into GUI
                </li>
              </ul>
            </div>

            <div>
              <a
                href="https://mylearningtools.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="https://alexanderodintsov.weebly.com/uploads/1/5/1/3/151373715/editor/resilience-inc-social-emotional-learning-programs-cover.jpg"
                  alt="Resilience, Inc."
                  width={240}
                  height={80}
                />
              </a>
              <h3>Resilience, Inc. (App Developer)</h3>
              <ul className={styles.bulletList}>
                <li className={styles.bulletItem}>
                  Wrote clean, efficient JS/TS code for mobile platforms with React Native
                </li>
                <li className={styles.bulletItem}>
                  Collaborated on features optimizing user experience and performance
                </li>
                <li className={styles.bulletItem}>
                  Deployed updates to App Store and Google Play
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className={styles.projects}>
          <h2>Projects</h2>
          <div className={styles.cards}>
            <div>
              <Link href="/projects/athenaeum">
                <Image
                  src="https://alexanderodintsov.weebly.com/uploads/1/5/1/3/151373715/editor/dapxcm.png"
                  alt="Athenaeum"
                  width={240}
                  height={240}
                />
              </Link>
              <h3>Athenaeum (Programmer)</h3>
              <ul className={styles.bulletList}>
                <li className={styles.bulletItem}>
                  Co-developed a roguelike deck-building game in Unity (C#)
                </li>
                <li className={styles.bulletItem}>
                  Implemented cards, abilities, and UI highlights
                </li>
                <li className={styles.bulletItem}>
                  Presented at UCSD Triton Gaming Expo 2024
                </li>
              </ul>
            </div>
            <div className={styles.slideshow}>
              {/* Slideshow goes here */}
            </div>
          </div>

          <div className={styles.cards}>
            <div>
              <a
                href="https://aodintsov1.itch.io/green-guy"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="https://alexanderodintsov.weebly.com/uploads/1/5/1/3/151373715/editor/screenshot-6534.png"
                  alt="Green Guy: Shapeshifter"
                  width={240}
                  height={240}
                />
              </a>
              <h3>Green Guy: Shapeshifter (Programmer)</h3>
              <ul className={styles.bulletList}>
                <li className={styles.bulletItem}>
                  Developed stealth game in Unity (C#) for TritonWare Spring 2024
                </li>
                <li className={styles.bulletItem}>
                  Implemented mechanics and level design
                </li>
                <li className={styles.bulletItem}>
                  Showcased at UCSD Triton Gaming Expo 2024
                </li>
              </ul>
            </div>
            <div className={styles.slideshow}>
              {/* Slideshow goes here */}
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>Powered by Weebly</p>
      </footer>
    </div>
  );
}
