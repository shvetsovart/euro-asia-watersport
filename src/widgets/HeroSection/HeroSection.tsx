"use client";

import { Button } from "@/shared/ui";
import { CountdownTimer } from "./CountdownTimer";
import styles from "./HeroSection.module.css";

interface HeroSectionProps {
    title: string;
    subtitle: string;
    backgroundImage: string;
    onRegisterClick?: () => void;
}

export const HeroSection = ({
    title,
    subtitle,
    backgroundImage,
    onRegisterClick,
}: HeroSectionProps) => {
    return (
        <section
            className={styles.hero}
            style={{
                backgroundImage: `linear-gradient(135deg, rgba(10, 14, 22, 0.9), rgba(16, 32, 48, 0.8)), url("${backgroundImage}")`,
            }}
        >
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
