"use client";

import { Button } from "@/shared/ui";
import { CountdownTimer } from "./CountdownTimer";
import styles from "./HeroSection.module.css";

interface HeroSectionProps {
    title: string;
    subtitle: string;
    onRegisterClick?: () => void;
}

export const HeroSection = ({
    title,
    subtitle,
    onRegisterClick,
}: HeroSectionProps) => {
    return (
        <section className={styles.hero}>
            <video className={styles.heroVideo} autoPlay muted loop playsInline>
                <source src="/beach.mp4" type="video/mp4" />
            </video>
            <div className={styles.heroOverlay}></div>
            <div className={styles.heroContent}>
                <h1 className={styles.heroTitle}>{title}</h1>
                <h2 className={styles.challengeTitle}>{subtitle}</h2>
                <Button
                    variant="primary"
                    size="lg"
                    className={styles.registerButton}
                    onClick={onRegisterClick}
                >
                    REGISTER NOW
                </Button>

                <CountdownTimer />
            </div>
        </section>
    );
};
