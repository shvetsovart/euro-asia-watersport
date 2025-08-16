"use client";

import Image from "next/image";
import styles from "./ParticipationRequirements.module.css";

export const ParticipationRequirements = () => {
    return (
        <section className={styles.requirements}>
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>
                    CONDITIONS FOR PARTICIPATION
                </h2>

                <div className={styles.requirementsGrid}>
                    <div className={styles.requirementItem}>
                        <div className={styles.iconWrapper}>
                            <span className={styles.icon}>🎯</span>
                        </div>
                        <h3>Mandatory Equipment</h3>
                        <p>
                            Swim buoy required for all participants during the
                            entire event
                        </p>
                    </div>

                    <div className={styles.requirementItem}>
                        <div className={styles.iconWrapper}>
                            <span className={styles.icon}>🏥</span>
                        </div>
                        <h3>Medical Certificate</h3>
                        <p>
                            Valid medical certificate confirming swimming
                            fitness and health clearance
                        </p>
                    </div>

                    <div className={styles.requirementItem}>
                        <div className={styles.iconWrapper}>
                            <span className={styles.icon}>⛈️</span>
                        </div>
                        <h3>Weather Conditions</h3>
                        <p>
                            Event may be adjusted or canceled due to extreme
                            weather (storm, thunderstorm)
                        </p>
                    </div>

                    <div className={styles.requirementItem}>
                        <div className={styles.iconWrapper}>
                            <span className={styles.icon}>📋</span>
                        </div>
                        <h3>Registration</h3>
                        <p>
                            Complete the attached form in full and return it to
                            the organizer
                        </p>
                    </div>
                </div>

                <div className={styles.disclaimer}>
                    <h3 className={styles.disclaimerTitle}>
                        Important Disclaimer
                    </h3>
                    <div className={styles.disclaimerContent}>
                        <p>
                            <strong>Weather Notice:</strong> In case of extreme
                            weather conditions, the entry fee is non-refundable.
                        </p>
                        <p>
                            <strong>Liability:</strong> The organizer assumes no
                            responsibility in cases of illness, accidents,
                            theft, or weather-related cancellations – neither
                            for participants nor accompanying persons.
                        </p>
                    </div>
                </div>

                <div className={styles.callToAction}>
                    <div className={styles.callToActionContent}>
                        <h3>Ready for the Adventure?</h3>
                        <p>
                            Dive into an incomparable adventure and discover the
                            allure of extreme swimming in a new dimension – on
                            the majestic Volga River.
                        </p>
                    </div>
                    <div className={styles.callToActionImage}>
                        <Image
                            src="/extreme-150/d.jpeg"
                            alt="Volga River adventure"
                            width={350}
                            height={250}
                            className={styles.adventureImage}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
