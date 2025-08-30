"use client";

import { Stage } from "@/entities/Challenge";
import { RussianFlag } from "@/shared/ui";
import styles from "./StagePlan.module.css";

interface StagePlanProps {
    stages: Stage[];
}

export const StagePlan = ({ stages }: StagePlanProps) => {
    return (
        <section className={styles.stagePlan}>
            <RussianFlag />
            <h2 className={styles.sectionTitle}>STAGE PLAN</h2>
            <div className={styles.stageGrid}>
                {stages.map((stage) => (
                    <div key={stage.day} className={styles.stageItem}>
                        <span className={styles.stageDay}>DAY {stage.day}</span>
                        <span className={styles.stageDistance}>
                            {stage.distance}
                        </span>
                        <span className={styles.stageType}>{stage.type}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};
