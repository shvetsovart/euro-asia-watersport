"use client";

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
                                    d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3Z"
                                    fill="#00f5ff"
                                    stroke="#00f5ff"
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
                            Medical certificate confirming swimming fitness is
                            required for participation
                        </p>
                    </div>

                    <div className={styles.requirementItem}>
                        <div className={styles.iconWrapper}>
                            <svg
                                className={styles.icon}
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <circle
                                    cx="12"
                                    cy="12"
                                    r="8"
                                    fill="#00f5ff"
                                    stroke="#00f5ff"
                                    strokeWidth="1"
                                />
                                <path
                                    d="M8 12L11 15L16 9"
                                    stroke="#ffffff"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                        <h3>Swim Buoy Mandatory</h3>
                        <p>
                            Use of a swim buoy is mandatory for all participants
                            throughout the event
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
                                    d="M7 8H17M7 12H13"
                                    stroke="#ffffff"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                />
                                <circle cx="12" cy="7" r="1" fill="#ffffff" />
                            </svg>
                        </div>
                        <h3>Mandatory Briefing</h3>
                        <p>
                            Briefing one day before start at Cafe Kofe and
                            Shokolad, Ulitsa Moskovskaya 9, Saratov, 5 pm. All
                            event information provided
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
                                    y="3"
                                    width="18"
                                    height="18"
                                    rx="2"
                                    fill="#00f5ff"
                                    stroke="#00f5ff"
                                    strokeWidth="1"
                                />
                                <path
                                    d="M7 7H17M7 11H17M7 15H13"
                                    stroke="#ffffff"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M15 13L17 15L21 11"
                                    stroke="#00f5ff"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                        <h3>Registration Form</h3>
                        <p>
                            Complete the registration form in full and return it
                            to the organizer before the event
                        </p>
                    </div>
                </div>
            </div>

            <div className={styles.importantInfo}>
                <h2 className={styles.importantTitle}>Important Information</h2>
                <div className={styles.importantContent}>
                    <div className={styles.infoItem}>
                        <strong>Liability:</strong> The organizer assumes no
                        liability for illness, accidents, theft, or
                        weather-related cancellations – for participants or
                        accompanying persons.
                    </div>
                    <div className={styles.infoItem}>
                        <strong>Weather-Related Changes:</strong> In case of
                        storms, thunderstorms, or heavy rain, the event may be
                        altered or canceled on short notice. In such cases,
                        registration fees will not be refunded.
                    </div>
                </div>
            </div>
        </section>
    );
};
