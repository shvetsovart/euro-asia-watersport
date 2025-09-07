"use client";

import Image from "next/image";
import styles from "./SingleRouteMap.module.css";

export const SingleRouteMap = () => {
    return (
        <div className={styles.singleRoute}>
            <div className={styles.imageContainer}>
                <Image
                    src="/extreme-150/EXTREME-150-1.webp"
                    alt="150km solo swimming challenge route"
                    width={1000}
                    height={700}
                    className={styles.routeImage}
                    style={{ height: "auto" }}
                />
            </div>
            <div className={styles.description}>
                <p>
                    Epic solo swimming adventure across the mighty Volga River.
                    A true test of endurance and determination covering 150
                    kilometers of challenging open water. This extreme-distance
                    challenge is designed for the ultimate water sport athlete
                    who seeks to push beyond conventional limits.
                </p>
                <p>
                    The route takes swimmers through diverse sections of the
                    Volga, from urban starting points to remote wilderness
                    areas, culminating at the dramatic Stepana Rasina cliff
                    finish point.
                </p>
            </div>
        </div>
    );
};
