"use client";

import { Button } from "@/shared/ui";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
    return (
        <div className={styles.page}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <div className={styles.heroText}>
                        <h1 className={styles.heroTitle}>
                            EURO-ASIA <br />
                            WATER SPORT
                        </h1>
                        <p className={styles.heroSubtitle}>
                            The European Asia 150K Water Sport Challenge
                        </p>
                        <div className={styles.challengeButtons}>
                            <Link href="/extreme-150">
                                <Button
                                    variant="primary"
                                    size="lg"
                                    className={styles.challengeButton}
                                >
                                    EXTREME 150K SOLO CHALLENGE
                                </Button>
                            </Link>
                            <Link href="/extreme-150-camp">
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className={styles.challengeButton}
                                >
                                    EXTREME 150K CAMP CHALLENGE
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* Stats Section */}
                    <div className={styles.statsGrid}>
                        <div className={styles.statCard}>
                            <div className={styles.statNumber}>150K</div>
                            <div className={styles.statLabel}>Distance</div>
                        </div>
                        <div className={styles.statCard}>
                            <div className={styles.statNumber}>5</div>
                            <div className={styles.statLabel}>Days</div>
                        </div>
                        <div className={styles.statCard}>
                            <div className={styles.statNumber}>2</div>
                            <div className={styles.statLabel}>Challenges</div>
                        </div>
                    </div>
                </div>

                {/* Photo Mosaic */}
                <div className={styles.photoMosaic}>
                    <div className={styles.mosaicGrid}>
                        <div className={`${styles.mosaicItem} ${styles.large}`}>
                            <Image
                                src="/extreme-150/c.jpeg"
                                alt="Swimming challenge"
                                fill
                                className={styles.mosaicImage}
                            />
                            <div className={styles.imageOverlay}>
                                <span>Solo Challenge</span>
                            </div>
                        </div>
                        <div
                            className={`${styles.mosaicItem} ${styles.medium}`}
                        >
                            <Image
                                src="/extreme-150/a.jpeg"
                                alt="Water sport"
                                fill
                                className={styles.mosaicImage}
                            />
                            <div className={styles.imageOverlay}>
                                <span>150K Distance</span>
                            </div>
                        </div>
                        <div className={`${styles.mosaicItem} ${styles.small}`}>
                            <Image
                                src="/extreme-150/b.jpeg"
                                alt="Team challenge"
                                fill
                                className={styles.mosaicImage}
                            />
                            <div className={styles.imageOverlay}>
                                <span>Team Spirit</span>
                            </div>
                        </div>
                        <div className={`${styles.mosaicItem} ${styles.small}`}>
                            <Image
                                src="/extreme-150/d.jpeg"
                                alt="Extreme conditions"
                                fill
                                className={styles.mosaicImage}
                            />
                            <div className={styles.imageOverlay}>
                                <span>Extreme</span>
                            </div>
                        </div>
                        <div
                            className={`${styles.mosaicItem} ${styles.medium}`}
                        >
                            <Image
                                src="/extreme-150/1.jpg"
                                alt="Water adventure"
                                fill
                                className={styles.mosaicImage}
                            />
                            <div className={styles.imageOverlay}>
                                <span>Adventure</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
