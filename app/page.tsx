"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
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
          <span id="wsite-title">ALEXANDER ODINTSOV</span>
        </div>

        <nav className={styles.nav}>
          <ul className={styles.menu}>
            <li>
              <Link href="/" className={pathname === "/" ? styles.active : ""}>
                Home
              </Link>
            </li>
            {/*
<li>
  <Link
    href="/resume"
    className={pathname === "/resume" ? styles.active : ""}
  >
    Resume
  </Link>
</li>
*/}

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
              href="https://www.linkedin.com/in/alexander-odintsov1/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my LinkedIn"
            >
              <FaLinkedin />
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
                  width={480}
                  height={160}
                />
              </a>
              <h3>
                <a href="https://f84.com/" target="_blank" rel="noopener noreferrer">
                  F84 Games
                </a>
                <span> (Software Engineer Intern)</span>
              </h3>
              <ul className={styles.bulletList}>
                <li className={styles.bulletItem}>
                  Contributed to the development of an unannounced multiplayer sports game for a nationally recognized sports brand in Roblox Studio using Lua
                </li>
                <li className={styles.bulletItem}>
                  Programmed gameplay mechanics, client-server architecture, and UI components to enhance player experience
                </li>
                <li className={styles.bulletItem}>
                  Worked with artists and designers to translate art assets into the game's GUI
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
                  width={480}
                  height={160}
                />
              </a>
              <h3>
                <a href="https://mylearningtools.org/" target="_blank" rel="noopener noreferrer">
                  Resilience, Inc.
                </a>
                <span> (App Developer)</span>
              </h3>
              <ul className={styles.bulletList}>
                <li className={styles.bulletItem}>
                  Write clean and efficient code for iOS and Android platforms in JavaScript and TypeScript using React
                  Native
                </li>
                <li className={styles.bulletItem}>
                  Collaborate with the App Development team to implement features for mobile platforms
                </li>
                <li className={styles.bulletItem}>
                  Implement new elements into applications that optimize user experience and app performance
                </li>
                <li className={styles.bulletItem}>
                  Deploy app updates to the App Store and Google Play, ensuring compliance with platform guidelines
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className={styles.projects}>
          <h2>Projects</h2>
          <div className={styles.cards}>
            <div>
              <a
                href="/my-app/projects/athenaeum"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="https://alexanderodintsov.weebly.com/uploads/1/5/1/3/151373715/editor/dapxcm.png"
                  alt="Athenaeum"
                  width={480}
                  height={480}
                />
              </a>
              <h3 className={styles.projectTitle}>
                <strong>Athenaeum</strong>{" "}
                <span className={styles.projectRole}>(Programmer)</span>
              </h3>
              <p className={styles.itchLink}>
                <a
                  href="https://ethancreek.itch.io/athenaeum"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Itch.io
                </a>
              </p>
            </div>

            <div>
              <a
                href="/my-app/projects/greenguy"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="https://alexanderodintsov.weebly.com/uploads/1/5/1/3/151373715/editor/screenshot-6534.png"
                  alt="Green Guy: Shapeshifter"
                  width={480}
                  height={480}
                />
              </a>
              <h3 className={styles.projectTitle}>
                <strong>Green Guy: Shapeshifter</strong>{" "}
                <span className={styles.projectRole}>(Programmer)</span>
              </h3>
              <p className={styles.itchLink}>
                <a
                  href="https://aodintsov1.itch.io/green-guy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Itch.io
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
