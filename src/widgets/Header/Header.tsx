"use client";

import { Button } from "@/shared/ui";
import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "./Header.module.css";
import { PAGE_PATHNAME } from "@/shared/constants";

export function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { isSignedIn } = useUser();

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <Link href="/">
                        <Image
                            src="/water-sport-logo.webp"
                            alt="WaterSport"
                            width={150}
                            height={40}
                            className={styles.logoImage}
                            style={{ height: "auto" }}
                        />
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <nav className={styles.nav}>
                    <ul className={styles.navList}>
                        <li>
                            <Link
                                href={PAGE_PATHNAME.Extreme150}
                                className={styles.navLink}
                            >
                                Extreme 150K
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={PAGE_PATHNAME.ExtremeOdyssey}
                                className={styles.navLink}
                            >
                                Extreme Odyssey 150K
                            </Link>
                        </li>
                    </ul>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className={styles.mobileMenuButton}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <div
                        className={`${styles.hamburger} ${
                            isMobileMenuOpen ? styles.hamburgerOpen : ""
                        }`}
                    >
                        <span className={styles.hamburgerLine}></span>
                        <span className={styles.hamburgerLine}></span>
                        <span className={styles.hamburgerLine}></span>
                    </div>
                </button>

                {/* Desktop Actions */}
                <div className={styles.actions}>
                    {isSignedIn ? (
                        <UserButton />
                    ) : (
                        <>
                            <SignInButton mode="modal">
                                <Button variant="outline" size="sm">
                                    Login
                                </Button>
                            </SignInButton>
                            <SignUpButton mode="modal">
                                <Button variant="primary" size="sm">
                                    Register
                                </Button>
                            </SignUpButton>
                        </>
                    )}
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            {isMobileMenuOpen && (
                <div className={styles.mobileMenu}>
                    <nav className={styles.mobileNav}>
                        <Link
                            href="/"
                            className={styles.mobileNavLink}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Home
                        </Link>
                        <Link
                            href="/extreme-150"
                            className={styles.mobileNavLink}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Extreme 150K
                        </Link>
                        <Link
                            href="/extreme-150-camp"
                            className={styles.mobileNavLink}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Extreme 150K Camp
                        </Link>
                        <div className={styles.mobileActions}>
                            {isSignedIn ? (
                                <UserButton />
                            ) : (
                                <>
                                    <SignInButton mode="modal">
                                        <Button variant="outline" size="sm">
                                            Login
                                        </Button>
                                    </SignInButton>
                                    <SignUpButton mode="modal">
                                        <Button variant="primary" size="sm">
                                            Register
                                        </Button>
                                    </SignUpButton>
                                </>
                            )}
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
}
