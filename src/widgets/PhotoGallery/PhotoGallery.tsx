"use client";

import Image from "next/image";
import styles from "./PhotoGallery.module.css";

export const PhotoGallery = () => {
    const images = [
        "/extreme-150/1.jpg",
        "/extreme-150/2.jpg",
        "/extreme-150/3.jpeg",
        "/extreme-150/4.jpg",
        "/extreme-150/5.jpeg",
        "/extreme-150/6.jpeg",
    ];

    return (
        <section className={styles.photoGallery}>
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>GALLERY</h2>
                <p className={styles.subtitle}>
                    Explore more moments from the Volga River Extreme Challenge
                </p>
                <div className={styles.galleryGrid}>
                    {images.map((src, index) => (
                        <div key={index} className={styles.imageWrapper}>
                            <Image
                                src={src}
                                alt={`Challenge photo ${index + 1}`}
                                width={400}
                                height={300}
                                className={styles.galleryImage}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
