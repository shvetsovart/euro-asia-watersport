"use client";

import Image from "next/image";
import { FloatingEagles, RussianFlag } from "@/shared/ui";
import styles from "./RouteMap.module.css";

export const RouteMap = () => {
    const routeStages = [
        {
            day: 1,
            route: "Grodskoy Plyazh → Podgornoye",
            distance: "22.5 km",
            description:
                "Starting point at the city beach, heading towards the first checkpoint",
            image: "/extreme-150/route/Day1-22-5km.webp",
        },
        {
            day: 2,
            route: "Podgornoye → Usmore",
            distance: "19 km",
            description:
                "Continuing through scenic river sections with moderate currents",
            image: "/extreme-150/route/Day2-19km.webp",
        },
        {
            day: 3,
            route: "Usmore → Chkalovskoye",
            distance: "35 km",
            description:
                "The longest single-day stretch through challenging open waters",
            image: "/extreme-150/route/Day3-35km.webp",
        },
        {
            day: 4,
            route: "Chkalovskoye → Rovnoye",
            distance: "32 km",
            description:
                "Technical section with varying water conditions and navigation challenges",
            image: "/extreme-150/route/Day4-32km.webp",
        },
        {
            day: 5,
            route: "Rovnoye → Stepana Rasina",
            distance: "42 km",
            description: "Final stretch to the dramatic cliff finish point",
            image: "/extreme-150/route/Day5-42km.webp",
        },
    ];

    return (
        <section className={styles.routeMap}>
            <RussianFlag />
            <FloatingEagles count={2} size="large" />
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>ROUTE MAP</h2>
                <p className={styles.subtitle}>
                    5-Day Journey Through the Volga River - 150km Challenge
                </p>

                <div className={styles.routeGrid}>
                    {routeStages.map((stage) => (
                        <div key={stage.day} className={styles.routeCard}>
                            <div className={styles.imageWrapper}>
                                <Image
                                    src={stage.image}
                                    alt={`Day ${stage.day} route map`}
                                    width={400}
                                    height={280}
                                    className={styles.routeImage}
                                    style={{ height: "auto" }}
                                />
                            </div>
                            <div className={styles.cardContent}>
                                <div className={styles.dayBadge}>
                                    Day {stage.day}
                                </div>
                                <h3 className={styles.routeTitle}>
                                    {stage.route}
                                </h3>
                                <div className={styles.distance}>
                                    {stage.distance}
                                </div>
                                <p className={styles.description}>
                                    {stage.description}
                                </p>
                            </div>
                        </div>
                    ))}

                    {/* Total Distance Card */}
                    <div className={`${styles.routeCard} ${styles.totalCard}`}>
                        <div className={styles.imageWrapper}>
                            <Image
                                src="/extreme-150/route/Total-Distance-150km.webp"
                                alt="Total distance 150km route map"
                                width={400}
                                height={280}
                                className={styles.routeImage}
                                style={{ height: "auto" }}
                            />
                        </div>
                        <div className={styles.cardContent}>
                            <div className={styles.totalBadge}>TOTAL</div>
                            <h3 className={styles.totalTitle}>
                                Complete Challenge
                            </h3>
                            <div className={styles.totalDistance}>150 km</div>
                            <p className={styles.totalDescription}>
                                Epic 5-day swimming adventure across the mighty
                                Volga River
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
