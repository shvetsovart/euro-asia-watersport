"use client";

import { EVENT_DATE, useCountdown } from "@/shared/lib";
import styles from "./HeroSection.module.css";

export const CountdownTimer = () => {
    const { timeLeft, isClient } = useCountdown({ targetDate: EVENT_DATE });

    return (
        <div
            className={`${styles.countdown} ${
                isClient ? styles.countdownVisible : styles.countdownHidden
            }`}
        >
            <div className={styles.timeBlock}>
                <span className={styles.timeNumber}>
                    {isClient ? timeLeft.days : "---"}
                </span>
                <span className={styles.timeLabel}>DAYS</span>
            </div>
            <div className={styles.timeBlock}>
                <span className={styles.timeNumber}>
                    {isClient ? timeLeft.hours : "--"}
                </span>
                <span className={styles.timeLabel}>HOURS</span>
            </div>
            <div className={styles.timeBlock}>
                <span className={styles.timeNumber}>
                    {isClient ? timeLeft.minutes : "--"}
                </span>
                <span className={styles.timeLabel}>MINUTES</span>
            </div>
            <div className={styles.timeBlock}>
                <span className={styles.timeNumber}>
                    {isClient ? timeLeft.seconds : "--"}
                </span>
                <span className={styles.timeLabel}>SECONDS</span>
            </div>
        </div>
    );
};
