"use client";

import Image from "next/image";
import styles from "./EventDescription.module.css";

export const EventDescription = () => {
    return (
        <section className={styles.eventDescription}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h2 className={styles.sectionTitle}>THE EVENT</h2>

                    <div className={styles.imageGallery}>
                        <Image
                            src="/extreme-150/a.jpeg"
                            alt="Volga River swimming"
                            width={400}
                            height={250}
                            className={styles.galleryImage}
                        />
                        <Image
                            src="/extreme-150/b.jpeg"
                            alt="Swimming preparation"
                            width={400}
                            height={250}
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

                    <div className={styles.challengeDetails}>
                        <h3 className={styles.subTitle}>THE CHALLENGE</h3>

                        <div className={styles.detailsGrid}>
                            <div className={styles.detailItem}>
                                <h4>Total Distance</h4>
                                <p>150 km of open water swimming</p>
                            </div>

                            <div className={styles.detailItem}>
                                <h4>Participation Options</h4>
                                <ul>
                                    <li>Solo swimming</li>
                                    <li>Teams of 2 swimmers (relay)</li>
                                    <li>Teams of 3 swimmers (relay)</li>
                                </ul>
                            </div>

                            <div className={styles.detailItem}>
                                <h4>Changeover Rules</h4>
                                <ul>
                                    <li>Swimmer change only in the water</li>
                                    <li>
                                        Each swimmer must swim at least 1 hour
                                    </li>
                                    <li>
                                        Resting team members stay on escort boat
                                    </li>
                                </ul>
                            </div>

                            <div className={styles.detailItem}>
                                <h4>Available Dates</h4>
                                <p>
                                    May, June, July, August
                                    <br />
                                    by individual arrangement
                                </p>
                            </div>
                        </div>

                        <div className={styles.challengeInfo}>
                            <p>
                                This long-distance swimming event is aimed at{" "}
                                <strong>experienced open water athletes</strong>{" "}
                                who want to take on an extreme physical and
                                mental challenge. The swim takes place day and
                                night, adhering to the highest safety standards.
                            </p>

                            <p>
                                You will cross open waters, relying solely on
                                your endurance, strength, and mental fortitude –
                                without artificial aids, staying true to the
                                spirit of original open water swimming. The
                                river flows at a speed of{" "}
                                <strong>3 to 3.5 km/h</strong>, and swimmers can
                                cover between{" "}
                                <strong>6 km and 7 km per hour</strong>. The
                                goal is to complete the full distance in
                                approximately <strong>25 to 30 hours</strong>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
