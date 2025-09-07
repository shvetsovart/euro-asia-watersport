"use client";

import { FloatingEagles, RussianFlag } from "@/shared/ui";
import styles from "./TheChallenge.module.css";

export const TheChallenge = () => {
    return (
        <section className={styles.theChallenge}>
            <RussianFlag />
            {/* <FloatingEagles count={2} size="medium" /> */}
            <div className={styles.container}>
                <div className={styles.content}>
                    <h2 className={styles.sectionTitle}>THE CHALLENGE</h2>

                    <div className={styles.detailsGrid}>
                        <div className={styles.detailItem}>
                            <h4>Total Distance</h4>
                            <p>150km of open water swimming</p>
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
                            <h4>Date</h4>
                            <p>4th – 8th August, 2026.</p>
                        </div>
                    </div>

                    <div className={styles.challengeInfo}>
                        <p>
                            This adventure takes you up to{" "}
                            <strong>42 km per day</strong> through pristine open
                            water, <br />
                            with overnight stays in a cozy tent camp directly on
                            the <strong>riverbank</strong>.
                        </p>

                        <p>
                            Each day ends with an{" "}
                            <strong>unforgettable view of the Volga</strong>, a
                            shared dinner around the campfire, <br />
                            and inspiring conversations with fellow swimmers
                            from around the world.
                        </p>

                        <p>
                            Our <strong>experienced team</strong> is by your
                            side throughout the entire journey, ensuring your
                            safety and unforgettable memories.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
