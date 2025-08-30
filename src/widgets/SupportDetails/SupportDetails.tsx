"use client";

import { SupportItem } from "@/entities/Challenge";
import { RussianFlag } from "@/shared/ui";
import styles from "./SupportDetails.module.css";

interface SupportDetailsProps {
    supportItems: SupportItem[];
}

export const SupportDetails = ({ supportItems }: SupportDetailsProps) => {
    return (
        <section className={styles.supportDetails}>
            <RussianFlag />
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>SUPPORT DETAILS</h2>

                <div className={styles.supportGrid}>
                    {supportItems.map((item, index) => (
                        <div key={index} className={styles.supportItem}>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
