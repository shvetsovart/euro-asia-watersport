"use client";

import { SupportItem } from "@/entities/Challenge";
import Image from "next/image";
import styles from "./SupportDetails.module.css";

interface SupportDetailsProps {
    supportItems: SupportItem[];
}

export const SupportDetails = ({ supportItems }: SupportDetailsProps) => {
    return (
        <section className={styles.supportDetails}>
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

                <div className={styles.supportImageSection}>
                    <Image
                        src="/extreme-150/c.jpeg"
                        alt="Professional support team"
                        width={600}
                        height={400}
                        className={styles.image}
                    />
                </div>
            </div>
        </section>
    );
};
