"use client";

import { FloatingEagles, RussianFlag } from "@/shared/ui";
import Image from "next/image";
import styles from "./TheChallenge.module.css";

export const TheChallenge = () => {
    return (
        <section className={styles.theChallenge}>
            <RussianFlag />
            <FloatingEagles count={2} size="medium" />
            <div className={styles.container}>
                <div className={styles.content}>
                    <h2 className={styles.sectionTitle}>THE CHALLENGE</h2>

                    <div className={styles.detailsGrid}>
                        <div className={styles.detailItem}>
                            <h4>Total Distance</h4>
                            <p>150 km of open water swimming</p>
                        </div>

                        <div className={styles.detailItem}>
                            <h4>Participation Options</h4>
                            <ul>
                                <li>Solo swimming</li>
                                <li>Teams of 2 swimmers (relay)</li>
                                <li>Teams of 3 swimmers (relay)</li>
                            </ul>
                        </div>

                        <div className={styles.detailItem}>
                            <h4>Changeover Rules</h4>
                            <ul>
                                <li>Swimmer change only in the water</li>
                                <li>Each swimmer must swim at least 1 hour</li>
                                <li>
                                    Resting team members stay on escort boat
                                </li>
                            </ul>
                        </div>

                        <div className={styles.detailItem}>
                            <h4>Available Dates</h4>
                            <p>
                                May, June, July, August
                                <br />
                                by individual arrangement
                            </p>
                        </div>
                    </div>

                    <div className={styles.challengeInfo}>
                        <p>
                            This long-distance swimming event is aimed at{" "}
                            <strong>experienced open water athletes</strong> who
                            want to take on an extreme physical and mental
                            challenge. The swim takes place day and night,
                            adhering to the highest safety standards.
                        </p>

                        <p>
                            You will cross open waters, relying solely on your
                            endurance, strength, and mental fortitude – without
                            artificial aids, staying true to the spirit of
                            original open water swimming. The river flows at a
                            speed of <strong>3 to 3.5 km/h</strong>, and
                            swimmers can cover between{" "}
                            <strong>6 km and 7 km per hour</strong>. The goal is
                            to complete the full distance in approximately{" "}
                            <strong>25 to 30 hours</strong>.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
