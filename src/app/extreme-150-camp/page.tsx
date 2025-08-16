"use client";

import { challenge150Camp } from "@/entities/Challenge";
import {
    EventDescription,
    HeroSection,
    IncludedServices,
    ParticipationRequirements,
    RegistrationForm,
    SupportDetails,
} from "@/widgets";
import styles from "./page.module.css";

export default function Challenge150Camp() {
    const handleRegisterClick = () => {
        const registrationSection = document.querySelector(
            '[data-section="registration"]'
        );
        registrationSection?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className={styles.page}>
            <HeroSection
                title={challenge150Camp.title}
                subtitle={challenge150Camp.subtitle}
                backgroundImage={challenge150Camp.backgroundImage}
                onRegisterClick={handleRegisterClick}
            />

            <EventDescription />

            <SupportDetails supportItems={challenge150Camp.supportDetails} />

            <IncludedServices services={challenge150Camp.includedServices} />

            <ParticipationRequirements />

            <div data-section="registration">
                <RegistrationForm />
            </div>
        </div>
    );
}
