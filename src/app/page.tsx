"use client";

import { Button } from "@/shared/ui";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
    return (
        <div className={styles.page}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroContent}>
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
                <div className={styles.heroImage}>
                    <img
                        src="/extreme-150/c.jpeg"
                        alt="Extreme water swimming"
                    />
                </div>
            </section>
        </div>
    );
}
