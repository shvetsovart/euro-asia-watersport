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
            period: "Early booking",
            price: "358,800 ₽",
            secondGroup: "410,000 ₽",
            thirdGroup: "461,300 ₽",
        },
        {
            period: "Standard booking",
            price: "389,500 ₽",
            secondGroup: "451,000 ₽",
            thirdGroup: "492,000 ₽",
        },
        {
            period: "Late booking",
            price: "440,800 ₽",
            secondGroup: "512,600 ₽",
            thirdGroup: "533,100 ₽",
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
                showAccompanying={false}
            />

            <ParticipationRequirements />

            <div data-section="registration">
                <RegistrationForm />
            </div>
        </div>
    );
}
