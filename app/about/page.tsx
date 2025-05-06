"use client";

import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AboutPage() {
    const pathname = usePathname();
    return (
        <main className={styles.wrapper}>
            <nav className={styles.nav}>
                <ul className={styles.menu}>
                    <li>
                        <Link
                            href="/"
                            className={`${styles.menuLink} ${pathname === "/" ? styles.active : ""}`}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/about"
                            className={`${styles.menuLink} ${pathname === "/about" ? styles.active : ""}`}
                        >
                            About
                        </Link>
                    </li>
                </ul>
            </nav>

            <div className={styles.spacer} />

            <section className={styles.contentSection}>
                <div className={styles.inner}>
                    <h1 className={styles.title}>About</h1>

                    <p className={styles.intro}>
                        I’m a Software Engineer passionate about programming games
                    </p>

                    <ul className={styles.list}>
                        <li>
                            I am currently attending the University of California, San Diego
                            majoring in Cognitive Science with a Specialization in Design and
                            Interaction for a Bachelor’s Degree.
                        </li>
                        <li>
                            Companies I have worked for:
                            <ul>
                                <li>
                                    <a
                                        href="https://f84.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.link}
                                    >
                                        F84 Games
                                    </a>{" "}
                                    (Software Engineer Intern)
                                </li>
                                <li>
                                    <a
                                        href="https://mylearningtools.org/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.link}
                                    >
                                        Resilience, Inc.
                                    </a>{" "}
                                    (App Developer)
                                </li>
                            </ul>
                        </li>
                        <li>
                            Projects I have worked on:
                            <ul>
                                <li>
                                    <a
                                        href="https://ethancreek.itch.io/athenaeum"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.link}
                                    >
                                        Athenaeum
                                    </a>{" "}
                                    is a roguelike deck-building card game on Windows and MacOS
                                    where players expand their collection of cards as they
                                    venture through a mysterious library. (Programmer and Game
                                    Designer)
                                </li>
                                <li>
                                    <a
                                        href="https://aodintsov1.itch.io/green-guy"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.link}
                                    >
                                        Green Guy: ShapeShifter
                                    </a>{" "}
                                    is a stealth game on Windows developed for the TritonWare
                                    Spring 2024 game jam where players play as a shapeshifting
                                    alien trying to escape a spaceship. (Programmer and Game
                                    Designer)
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </section>
        </main>
    );
}
