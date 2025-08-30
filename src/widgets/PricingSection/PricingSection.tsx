"use client";

import { RussianFlag } from "@/shared/ui";
import styles from "./PricingSection.module.css";

interface PricingData {
    period: string;
    price: string;
    secondGroup: string;
    thirdGroup: string;
    accompanying?: string;
}

interface PricingSectionProps {
    title?: string;
    subtitle?: string;
    pricingData: PricingData[];
    showAccompanying?: boolean;
}

export function PricingSection({
    title = "Pricing",
    subtitle = "Prices depend on booking time",
    pricingData,
    showAccompanying = true,
}: PricingSectionProps) {
    return (
        <section className={styles.pricingSection}>
            <RussianFlag />
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>{title}</h2>
                    <p className={styles.subtitle}>{subtitle}</p>
                </div>

                <div className={styles.pricingGrid}>
                    {pricingData.map((pricing, index) => (
                        <div key={index} className={styles.pricingCard}>
                            <div className={styles.periodHeader}>
                                <h3 className={styles.period}>
                                    {pricing.period}
                                </h3>
                            </div>

                            <div className={styles.priceList}>
                                <div className={styles.priceItem}>
                                    <span className={styles.priceLabel}>
                                        Main price:
                                    </span>
                                    <span className={styles.priceValue}>
                                        {pricing.price}
                                    </span>
                                </div>

                                <div className={styles.priceItem}>
                                    <span className={styles.priceLabel}>
                                        2nd group:
                                    </span>
                                    <span className={styles.priceValue}>
                                        {pricing.secondGroup}
                                    </span>
                                </div>

                                <div className={styles.priceItem}>
                                    <span className={styles.priceLabel}>
                                        3rd group:
                                    </span>
                                    <span className={styles.priceValue}>
                                        {pricing.thirdGroup}
                                    </span>
                                </div>

                                {showAccompanying && pricing.accompanying && (
                                    <div
                                        className={`${styles.priceItem} ${styles.accompaniedItem}`}
                                    >
                                        <span className={styles.priceLabel}>
                                            Accompanying person
                                            <br />
                                            (non-swimmer):
                                        </span>
                                        <span className={styles.priceValue}>
                                            {pricing.accompanying}
                                        </span>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.disclaimer}>
                    <p>* Prices subject to change</p>
                </div>
            </div>
        </section>
    );
}
