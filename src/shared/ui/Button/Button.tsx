"use client";

import { cn } from "@/shared/lib";
import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import styles from "./Button.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
}

export const Button: FC<ButtonProps> = ({
    variant = "primary",
    size = "md",
    className,
    children,
    ...props
}) => {
    return (
        <button
            className={cn(styles.button, styles[variant], styles[size], className)}
            {...props}
        >
            {children}
        </button>
    );
};
