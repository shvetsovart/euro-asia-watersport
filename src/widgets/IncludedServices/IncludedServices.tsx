"use client";

import { ServiceItem } from "@/entities/Challenge";
import { RussianFlag } from "@/shared/ui";
import styles from "./IncludedServices.module.css";

interface IncludedServicesProps {
    services: ServiceItem[];
}

export const IncludedServices = ({ services }: IncludedServicesProps) => {
    return (
        <section className={styles.includedServices}>
            <RussianFlag />
            <h2 className={styles.sectionTitle}>INCLUDED SERVICES</h2>
            <div className={styles.servicesGrid}>
                {services.map((service, index) => (
                    <div key={index} className={styles.serviceItem}>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};
