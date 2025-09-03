"use client";

import { challenge150Solo } from "@/entities/Challenge";
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

export default function Challenge150Solo() {
    const handleRegisterClick = () => {
        const registrationSection = document.querySelector(
            '[data-section="registration"]'
        );
        registrationSection?.scrollIntoView({ behavior: "smooth" });
    };

    const pricingData = [
        {
            period: "Early booking",
            price: "143,500 ₽",
            secondGroup: "199,900 ₽",
            thirdGroup: "287,000 ₽",
            accompanying: "66,600 ₽",
        },
        {
            period: "Standard booking",
            price: "174,300 ₽",
            secondGroup: "256,300 ₽",
            thirdGroup: "328,000 ₽",
            accompanying: "87,100 ₽",
        },
        {
            period: "Late booking",
            price: "215,300 ₽",
            secondGroup: "302,400 ₽",
            thirdGroup: "379,300 ₽",
            accompanying: "112,800 ₽",
        },
    ];

    return (
        <div className={styles.page}>
            <HeroSection
                title={challenge150Solo.title}
                subtitle={challenge150Solo.subtitle}
                onRegisterClick={handleRegisterClick}
                showLogo={true}
            />

            <TheEvent />

            <TheChallenge />

            <RouteMap />

            <SupportDetails supportItems={challenge150Solo.supportDetails} />

            <IncludedServices services={challenge150Solo.includedServices} />

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
