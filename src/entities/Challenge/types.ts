// Challenge entity types
export interface Challenge {
    id: string;
    title: string;
    subtitle: string;
    distance: string;
    duration: string;
    backgroundImage: string;
    stages: Stage[];
    supportDetails: SupportItem[];
    includedServices: ServiceItem[];
}

export interface Stage {
    day: number;
    distance: string;
    type: string;
    description?: string;
}

export interface SupportItem {
    title: string;
    description: string;
    icon?: string;
}

export interface ServiceItem {
    title: string;
    description: string;
    icon?: string;
}

export interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

export type ChallengeType = "solo" | "camp" | "extreme";
