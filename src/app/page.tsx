"use client";

import { Button } from "@/shared/ui";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import { PAGE_PATHNAME } from "@/shared/constants";

export default function Home() {
    const [isLogoVisible, setIsLogoVisible] = useState(false);

    useEffect(() => {
        // Небольшая задержка для плавного появления логотипа
        const timer = setTimeout(() => {
            setIsLogoVisible(true);
        }, 300);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={styles.page}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <video
                    className={styles.heroVideo}
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source src="/beach.mp4" type="video/mp4" />
                </video>
                <div className={styles.heroOverlay}></div>
                <div className={styles.heroContent}>
                    <div className={styles.heroText}>
                        <div className={styles.logoContainer}>
                            <Image
                                src="/water-sport-logo.webp"
                                alt="Euro-Asia Water Sport Logo"
                                width={600}
                                height={300}
                                className={`${styles.heroLogo} ${
                                    isLogoVisible
                                        ? styles.logoVisible
                                        : styles.logoHidden
                                }`}
                                priority
                            />
                        </div>
                        <p className={styles.heroSubtitle}>
                            The European Asia 150K Water Sport Challenge
                        </p>
                        <div className={styles.challengeButtons}>
                            <Link href={PAGE_PATHNAME.Extreme150}>
                                <Button
                                    variant="primary"
                                    size="lg"
                                    className={styles.challengeButton}
                                >
                                    EXTREME 150K SOLO
                                </Button>
                            </Link>
                            <Link href={PAGE_PATHNAME.ExtremeOdyssey}>
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className={styles.challengeButton}
                                >
                                    EXTREME ODYSSEY 150K
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
            </section>
        </div>
    );
}
