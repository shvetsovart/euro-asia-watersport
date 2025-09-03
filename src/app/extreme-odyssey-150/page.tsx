"use client";

import { challenge150Camp } from "@/entities/Challenge";
import {
    TheEvent,
    TheChallenge,
    HeroSection,
    IncludedServices,
    ParticipationRequirements,
    PhotoGallery,
    PricingSection,
    RegistrationForm,
    RouteMap,
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

    const pricingData = [
        {
            period: "September – December",
            price: "133,000 ₽",
            secondGroup: "185,000 ₽",
            thirdGroup: "266,000 ₽",
            accompanying: "62,000 ₽",
        },
        {
            period: "January – March",
            price: "162,000 ₽",
            secondGroup: "238,000 ₽",
            thirdGroup: "304,000 ₽",
            accompanying: "81,000 ₽",
        },
        {
            period: "April – July",
            price: "199,000 ₽",
            secondGroup: "280,000 ₽",
            thirdGroup: "352,000 ₽",
            accompanying: "105,000 ₽",
        },
    ];

    return (
        <div className={styles.page}>
            <HeroSection
                title={challenge150Camp.title}
                subtitle={challenge150Camp.subtitle}
                onRegisterClick={handleRegisterClick}
            />

            <TheEvent />

            <TheChallenge />

            <RouteMap />

            <SupportDetails supportItems={challenge150Camp.supportDetails} />

            <IncludedServices services={challenge150Camp.includedServices} />

            <PhotoGallery />

            <PricingSection
                title="Participation Cost"
                subtitle="Prices depend on booking time and number of participants"
                pricingData={pricingData}
                showAccompanying={true}
            />

            <ParticipationRequirements />

            <div data-section="registration">
                <RegistrationForm />
            </div>
        </div>
    );
}
