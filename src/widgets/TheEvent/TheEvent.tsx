"use client";

import { FloatingEagles, RussianFlag } from "@/shared/ui";
import Image from "next/image";
import styles from "./TheEvent.module.css";

export const TheEvent = () => {
    return (
        <section className={styles.theEvent}>
            <RussianFlag />
            <FloatingEagles count={2} size="medium" />
            <div className={styles.container}>
                <div className={styles.content}>
                    <h2 className={styles.sectionTitle}>THE EVENT</h2>

                    <div className={styles.imageGallery}>
                        <Image
                            src="/extreme-150/a.jpeg"
                            alt="Volga River swimming"
                            width={560}
                            height={300}
                            className={styles.galleryImage}
                        />
                        <Image
                            src="/extreme-150/b.jpeg"
                            alt="Swimming preparation"
                            width={560}
                            height={300}
                            className={styles.galleryImage}
                        />
                    </div>

                    <div className={styles.description}>
                        <p>
                            Experience an extraordinary swimming adventure on
                            the mighty Volga – Europe&apos;s longest river! The
                            course leads from the Russian metropolis{" "}
                            <strong>Saratov to Stepana Rasina Cliff</strong>,
                            covering a total of <strong>150 kilometers</strong>{" "}
                            of open water swimming.
                        </p>

                        <p>
                            Saratov, located on the banks of the Volgograd
                            Reservoir, with its historic old town and numerous
                            architectural highlights from various centuries,
                            offers the ideal starting point. The city lies at
                            the{" "}
                            <strong>boundary between Europe and Asia</strong>{" "}
                            and is easily accessible by car, train, or plane.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
