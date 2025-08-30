"use client";

import Image from "next/image";
import { RussianFlag } from "@/shared/ui";
import styles from "./ParticipationRequirements.module.css";

export const ParticipationRequirements = () => {
    return (
        <section className={styles.requirements}>
            <RussianFlag />
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>
                    CONDITIONS FOR PARTICIPATION
                </h2>

                <div className={styles.requirementsGrid}>
                    <div className={styles.requirementItem}>
                        <div className={styles.iconWrapper}>
                            <svg
                                className={styles.icon}
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    d="M12 2L15.09 8.26L22 9L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9L8.91 8.26L12 2Z"
                                    fill="#00f5ff"
                                    stroke="#00f5ff"
                                    strokeWidth="1"
                                />
                                <circle cx="12" cy="12" r="3" fill="#ffffff" />
                            </svg>
                        </div>
                        <h3>Mandatory Equipment</h3>
                        <p>
                            Swim buoy required for all participants during the
                            entire event
                        </p>
                    </div>

                    <div className={styles.requirementItem}>
                        <div className={styles.iconWrapper}>
                            <svg
                                className={styles.icon}
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3Z"
                                    fill="#ff1744"
                                    stroke="#ff1744"
                                    strokeWidth="1"
                                />
                                <path
                                    d="M12 7V17M7 12H17"
                                    stroke="#ffffff"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </div>
                        <h3>Medical Certificate</h3>
                        <p>
                            Valid medical certificate confirming swimming
                            fitness and health clearance
                        </p>
                    </div>

                    <div className={styles.requirementItem}>
                        <div className={styles.iconWrapper}>
                            <svg
                                className={styles.icon}
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    d="M6 19C6 16.33 8.33 14 11 14H13C15.67 14 18 16.33 18 19H6Z"
                                    fill="#ffd700"
                                />
                                <path
                                    d="M12 2L13.5 6L18 6L14.5 9L16 13L12 10L8 13L9.5 9L6 6L10.5 6L12 2Z"
                                    fill="#ffd700"
                                />
                                <path
                                    d="M8 16L10 18L16 12"
                                    stroke="#0a0e16"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                        <h3>Weather Conditions</h3>
                        <p>
                            Event may be adjusted or canceled due to extreme
                            weather (storm, thunderstorm)
                        </p>
                    </div>

                    <div className={styles.requirementItem}>
                        <div className={styles.iconWrapper}>
                            <svg
                                className={styles.icon}
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <rect
                                    x="3"
                                    y="4"
                                    width="18"
                                    height="16"
                                    rx="2"
                                    fill="#00f5ff"
                                    stroke="#00f5ff"
                                    strokeWidth="1"
                                />
                                <path
                                    d="M7 8H17M7 12H17M7 16H13"
                                    stroke="#ffffff"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                />
                                <circle cx="17" cy="16" r="2" fill="#ff1744" />
                            </svg>
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
