"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";
import { PAGE_PATHNAME } from "@/shared/constants";

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.footerContent}>
                    {/* Logo Section */}
                    <div className={styles.logoSection}>
                        <Link href="/" className={styles.logoLink}>
                            <Image
                                src="/water-sport-logo.webp"
                                alt="WaterSport Logo"
                                width={120}
                                height={40}
                                className={styles.logo}
                                priority
                            />
                        </Link>
                        <p className={styles.logoDescription}>
                            Extreme water sports challenges for adventurous
                            souls
                        </p>
                    </div>

                    {/* Navigation Links */}
                    <div className={styles.linksSection}>
                        <h3 className={styles.sectionTitle}>Challenges</h3>
                        <ul className={styles.linksList}>
                            <li>
                                <Link
                                    href={PAGE_PATHNAME.Extreme150}
                                    className={styles.link}
                                >
                                    150KM Solo Challenge
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={PAGE_PATHNAME.ExtremeOdyssey}
                                    className={styles.link}
                                >
                                    150KM Odyssey Challenge
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className={styles.contactSection}>
                        <h3 className={styles.sectionTitle}>Contact</h3>
                        <ul className={styles.contactList}>
                            <li className={styles.contactItem}>
                                <span className={styles.contactLabel}>
                                    Email:
                                </span>
                                <a
                                    href="mailto:info@watersport.com"
                                    className={styles.contactLink}
                                >
                                    info@watersport.com
                                </a>
                            </li>
                            <li className={styles.contactItem}>
                                <span className={styles.contactLabel}>
                                    Phone:
                                </span>
                                <a
                                    href="tel:+1234567890"
                                    className={styles.contactLink}
                                >
                                    +1 (234) 567-890
                                </a>
                            </li>
                            <li className={styles.contactItem}>
                                <span className={styles.contactLabel}>
                                    Location:
                                </span>
                                <span className={styles.contactText}>
                                    Saratov, Russia
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* Legal Section */}
                    <div className={styles.legalSection}>
                        <h3 className={styles.sectionTitle}>Legal</h3>
                        <ul className={styles.linksList}>
                            <li>
                                <Link
                                    href="/privacy-policy"
                                    className={styles.link}
                                >
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/terms-of-service"
                                    className={styles.link}
                                >
                                    Terms of Service
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/cookie-policy"
                                    className={styles.link}
                                >
                                    Cookie Policy
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className={styles.bottomBar}>
                    <div className={styles.copyright}>
                        <p>&copy; 2025 WaterSport. All rights reserved.</p>
                    </div>
                    <div className={styles.socialLinks}>
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.socialLink}
                            aria-label="Facebook"
                        >
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                            </svg>
                        </a>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.socialLink}
                            aria-label="Instagram"
                        >
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                        </a>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.socialLink}
                            aria-label="Twitter"
                        >
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
