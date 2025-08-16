"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./FloatingEagles.module.css";

interface EaglePosition {
    id: number;
    x: number;
    y: number;
    initialX: number;
    initialY: number;
}

interface FloatingEaglesProps {
    count?: number;
    size?: "small" | "medium" | "large";
}

export const FloatingEagles = ({
    count = 2,
    size = "large",
}: FloatingEaglesProps) => {
    const [eagles, setEagles] = useState<EaglePosition[]>([]);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isMouseMoving, setIsMouseMoving] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const mouseTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const container = containerRef.current;
        const rect = container.getBoundingClientRect();

        // Initialize eagles positions within the container
        const initialEagles: EaglePosition[] = Array.from(
            { length: count },
            (_, i) => {
                const x = rect.width * (0.1 + (i * 0.8) / (count - 1 || 1));
                const y = rect.height * (0.2 + Math.random() * 0.6);

                return {
                    id: i + 1,
                    x,
                    y,
                    initialX: x,
                    initialY: y,
                };
            }
        );

        setEagles(initialEagles);
    }, [count]);

    useEffect(() => {
        if (!containerRef.current) return;

        const container = containerRef.current;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = container.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Only track mouse if it's within the container
            if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
                setMousePosition({ x, y });
                setIsMouseMoving(true);

                // Clear existing timeout
                if (mouseTimeoutRef.current) {
                    clearTimeout(mouseTimeoutRef.current);
                }

                // Set timeout to stop movement after mouse stops
                mouseTimeoutRef.current = setTimeout(() => {
                    setIsMouseMoving(false);
                }, 100);
            }
        };

        const handleMouseLeave = () => {
            setIsMouseMoving(false);
        };

        container.addEventListener("mousemove", handleMouseMove);
        container.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            container.removeEventListener("mousemove", handleMouseMove);
            container.removeEventListener("mouseleave", handleMouseLeave);
            if (mouseTimeoutRef.current) {
                clearTimeout(mouseTimeoutRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (!isMouseMoving || !containerRef.current) return;

        const interval = setInterval(() => {
            setEagles((prevEagles) =>
                prevEagles.map((eagle) => {
                    // Calculate smooth movement towards mouse
                    const attractionStrength = 0.08;
                    const dx = mousePosition.x - eagle.x;
                    const dy = mousePosition.y - eagle.y;

                    const newX = eagle.x + dx * attractionStrength;
                    const newY = eagle.y + dy * attractionStrength;

                    return {
                        ...eagle,
                        x: newX,
                        y: newY,
                    };
                })
            );
        }, 16); // ~60fps

        return () => clearInterval(interval);
    }, [mousePosition, isMouseMoving]);

    // Return eagles to initial positions when mouse stops moving
    useEffect(() => {
        if (isMouseMoving) return;

        const interval = setInterval(() => {
            setEagles((prevEagles) =>
                prevEagles.map((eagle) => {
                    const returnStrength = 0.02;
                    const dx = eagle.initialX - eagle.x;
                    const dy = eagle.initialY - eagle.y;

                    // If close enough to initial position, snap to it
                    if (Math.abs(dx) < 1 && Math.abs(dy) < 1) {
                        return {
                            ...eagle,
                            x: eagle.initialX,
                            y: eagle.initialY,
                        };
                    }

                    const newX = eagle.x + dx * returnStrength;
                    const newY = eagle.y + dy * returnStrength;

                    return {
                        ...eagle,
                        x: newX,
                        y: newY,
                    };
                })
            );
        }, 16);

        return () => clearInterval(interval);
    }, [isMouseMoving]);

    const sizeClass = {
        small: styles.small,
        medium: styles.medium,
        large: styles.large,
    }[size];

    return (
        <div
            ref={containerRef}
            className={`${styles.eaglesContainer} ${sizeClass}`}
        >
            {eagles.map((eagle) => (
                <div
                    key={eagle.id}
                    className={styles.eagle}
                    style={{
                        left: `${eagle.x}px`,
                        top: `${eagle.y}px`,
                    }}
                >
                    <Image
                        src="/eagle.png"
                        alt="Flying eagle decoration"
                        width={
                            size === "large" ? 120 : size === "medium" ? 80 : 60
                        }
                        height={
                            size === "large" ? 90 : size === "medium" ? 60 : 45
                        }
                        className={styles.eagleImage}
                    />
                </div>
            ))}
        </div>
    );
};
