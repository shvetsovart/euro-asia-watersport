"use client";

import { challenge150Solo } from "@/entities/Challenge";
import {
    EventDescription,
    HeroSection,
    IncludedServices,
    ParticipationRequirements,
    PhotoGallery,
    RegistrationForm,
    RouteMap,
    SupportDetails,
} from "@/widgets";
import styles from "./page.module.css";

export default function Challenge150Solo() {
    const handleRegisterClick = () => {
        const registrationSection = document.querySelector(
            '[data-section="registration"]'
        );
        registrationSection?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className={styles.page}>
            <HeroSection
                title={challenge150Solo.title}
                subtitle={challenge150Solo.subtitle}
                backgroundImage={challenge150Solo.backgroundImage}
                onRegisterClick={handleRegisterClick}
            />

            <EventDescription />

            <RouteMap />

            <SupportDetails supportItems={challenge150Solo.supportDetails} />

            <IncludedServices services={challenge150Solo.includedServices} />

            <PhotoGallery />

            <ParticipationRequirements />

            <div data-section="registration">
                <RegistrationForm />
            </div>
        </div>
    );
}
