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

                    <div className={styles.description}>
                        <p>
                            Immerse yourself in a unique long-distance swim
                            along Europe&apos;s mightiest river –{" "}
                            <strong>the Volga</strong>. The starting point is{" "}
                            <strong>Saratov</strong>, a vibrant metropolis in
                            the European part of Russia.
                        </p>

                        <p>
                            Picturesquely located on the edge of the Volga
                            Upland, the city stretches down to the banks of the
                            river, which here forms the{" "}
                            <strong>Volgograd Reservoir</strong>. The city
                            center lies close to the river and impresses with a
                            charming old town full of historic architectural
                            ensembles from various eras.
                        </p>

                        <p>
                            <strong>A highlight:</strong> the former German
                            Street, now <strong>Ulitsa Nemetskaya</strong>,
                            <br />
                            better known as Kirov Prospect.
                        </p>
                    </div>

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
                            Saratov naturally connects{" "}
                            <strong>Europe and Asia</strong> – geographically,
                            culturally, and historically. The city is easily
                            accessible by car, train, or plane thanks to
                            excellent transport links.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
