// app/page.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export default function Page() {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Link href="/"><span id="wsite-title">Alexander Odintsov</span></Link>
        </div>
        <nav className={styles.nav}>
          <ul className={styles.menu}>
            <li className={styles.active}><Link href="/">Home</Link></li>
            <li><Link href="/resume">Resume</Link></li>
            <li><Link href="/about">About</Link></li>
          </ul>
        </nav>
      </header>

      <main className={styles.content}>
        <section className={styles.intro}>
          <h2>Hi! I’m Alexander.</h2>
          <p>I’m a Software Engineer passionate about programming games</p>
          <div className={styles.socialIcons}>
            {/* Insert your social icons here */}
          </div>
        </section>

        <section className={styles.experience}>
          <h2>Experience</h2>
          <div className={styles.cards}>
            <div>
              <a href="https://f84.com/" target="_blank" rel="noreferrer">
                <Image src="/images/logo-2x_orig.png" alt="F84 Games" width={240} height={80} />
              </a>
              <h3>F84 Games (Software Engineer Intern)</h3>
              <ul>
                <li>Contributed to a multiplayer sports game in Roblox Studio using Lua</li>
                <li>Programmed gameplay mechanics, client-server architecture, and UI components</li>
                <li>Collaborated with artists to translate assets into GUI</li>
              </ul>
            </div>

            <div>
              <a href="https://mylearningtools.org/" target="_blank" rel="noreferrer">
                <Image src="/images/resilience-inc-social-emotional-learning-programs-cover.jpg"
                       alt="Resilience, Inc." width={240} height={80} />
              </a>
              <h3>Resilience, Inc. (App Developer)</h3>
              <ul>
                <li>Wrote clean, efficient JS/TS code for mobile platforms with React Native</li>
                <li>Collaborated on features optimizing user experience and performance</li>
                <li>Deployed updates to App Store and Google Play</li>
              </ul>
            </div>
          </div>
        </section>

        <section className={styles.projects}>
          <h2>Projects</h2>
          <div className={styles.cards}>
            <div>
              <a href="https://ethancreek.itch.io/athenaeum" target="_blank" rel="noreferrer">
                <Image src="/images/DApXCM.png" alt="Athenaeum" width={240} height={240} />
              </a>
              <h3>Athenaeum (Programmer)</h3>
              <ul>
                <li>Co-developed a roguelike deck-building game in Unity (C#)</li>
                <li>Implemented cards, abilities, and UI highlights</li>
                <li>Presented at UCSD Triton Gaming Expo 2024</li>
              </ul>
            </div>
            <div className={styles.slideshow}>
              {/* Slideshow goes here */}
            </div>
          </div>

          <div className={styles.cards}>
            <div>
              <a href="https://aodintsov1.itch.io/green-guy" target="_blank" rel="noreferrer">
                <Image src="/images/screenshot-6534.png" alt="Green Guy" width={240} height={240} />
              </a>
              <h3>Green Guy: Shapeshifter (Programmer)</h3>
              <ul>
                <li>Developed stealth game in Unity (C#) for TritonWare Spring 2024</li>
                <li>Implemented mechanics and level design</li>
                <li>Showcased at UCSD Triton Gaming Expo 2024</li>
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
