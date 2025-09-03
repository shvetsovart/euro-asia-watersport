"use client";

import { Button, RussianFlag } from "@/shared/ui";
import { useState } from "react";
import styles from "./RegistrationForm.module.css";

interface RegistrationFormProps {
    onSubmit?: (data: FormData) => void;
}

interface FormData {
    fullName: string;
    email: string;
    phone: string;
    experience: string;
}

export const RegistrationForm = ({ onSubmit }: RegistrationFormProps) => {
    const [formData, setFormData] = useState<FormData>({
        fullName: "",
        email: "",
        phone: "",
        experience: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit?.(formData);
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <section className={styles.registrationSection}>
            <RussianFlag />
            <h2 className={styles.sectionTitle}>REGISTER</h2>
            <div className={styles.formWrapper}>
                <form
                    className={styles.registrationForm}
                    onSubmit={handleSubmit}
                >
                    <input
                        type="text"
                        name="fullName"
                        placeholder="Full Name"
                        className={styles.formInput}
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        className={styles.formInput}
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        className={styles.formInput}
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                    <textarea
                        name="experience"
                        placeholder="Swimming Experience"
                        className={styles.formTextarea}
                        value={formData.experience}
                        onChange={handleChange}
                    />
                    <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        className={styles.submitButton}
                    >
                        SUBMIT APPLICATION
                    </Button>
                </form>
                <div className={styles.overlay}>
                    <span className={styles.overlayText}>
                        The registration will open in November
                    </span>
                </div>
            </div>
        </section>
    );
};
