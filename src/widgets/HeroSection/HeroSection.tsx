"use client";

import { Button } from "@/shared/ui";
import { CountdownTimer } from "./CountdownTimer";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./HeroSection.module.css";

interface HeroSectionProps {
    title: string;
    subtitle: string;
    onRegisterClick?: () => void;
    showLogo?: boolean;
}

export const HeroSection = ({
    title,
    subtitle,
    onRegisterClick,
    showLogo = false,
}: HeroSectionProps) => {
    const [isLogoVisible, setIsLogoVisible] = useState(false);

    useEffect(() => {
        if (showLogo) {
            // Небольшая задержка для плавного появления логотипа
            const timer = setTimeout(() => {
                setIsLogoVisible(true);
            }, 300);

            return () => clearTimeout(timer);
        }
    }, [showLogo]);

    return (
        <section className={styles.hero}>
            <video className={styles.heroVideo} autoPlay muted loop playsInline>
                <source src="/beach.mp4" type="video/mp4" />
            </video>
            <div className={styles.heroOverlay}></div>
            <div className={styles.heroContent}>
                {showLogo && (
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
                )}
                <h1 className={styles.heroTitle}>{title}</h1>
                <h2 className={styles.challengeTitle}>{subtitle}</h2>
                {/* :TODO: вернуть и поработать над стилями, когда регистрация откроется*/}
                {/* <Button
                    variant="primary"
                    size="lg"
                    className={styles.registerButton}
                    onClick={onRegisterClick}
                >
                    REGISTER NOW
                </Button> */}

                <CountdownTimer />
            </div>
        </section>
    );
};
