import { Challenge } from "../types";

export const challenge150Solo: Challenge = {
    id: "150-solo",
    title: "EXTREME 150K",
    subtitle: "150KM OPEN WATER SWIMMING",
    distance: "150KM",
    duration: "25-30 HOURS",
    backgroundImage: "/extreme-150/L1.jpeg",
    stages: [
        { day: 1, distance: "Briefing", type: "PREPARATION DAY" },
        { day: 2, distance: "150 KM", type: "SWIM DAY/NIGHT" },
    ],
    supportDetails: [
        {
            title: "Professional Motorboat Escort",
            description:
                "Each team gets dedicated motorboat escort throughout the entire 150km swim",
        },
        {
            title: "Briefing Session",
            description:
                "Mandatory briefing at Cafe Kofe and Shokolad, Ulitsa Moskovskaya 9, Saratov one day before start",
        },
        {
            title: "Return Transport",
            description:
                "Transportation provided from finish at Stepana Rasina Cliff back to Saratov",
        },
        {
            title: "Experienced Team Support",
            description:
                "Personalized support from our experienced team throughout the challenge",
        },
        {
            title: "Safety Standards",
            description:
                "Highest safety standards maintained during day and night swimming",
        },
    ],
    includedServices: [
        {
            title: "Starter Kit",
            description:
                "Swim cap, T-shirt, and towel provided during briefing",
        },
        {
            title: "Finisher Award",
            description:
                "Trophy + free starter package for Wörthersee Swim Austria (17km)",
        },
        {
            title: "Professional Escort",
            description: "Dedicated motorboat escort for safety and navigation",
        },
        {
            title: "Support Crew",
            description:
                "1-2 additional team members may be on board for support",
        },
        {
            title: "Return Transport",
            description: "Transport from finish line back to Saratov included",
        },
        {
            title: "Event Briefing",
            description:
                "Comprehensive briefing with all necessary event information",
        },
    ],
};

export const challenge150Camp: Challenge = {
    id: "150-camp",
    title: "EXTREME 150K ODYSSEY",
    subtitle: "150KM RELAY SWIMMING",
    distance: "150KM",
    duration: "25-30 HOURS",
    backgroundImage: "/extreme-150/L4.jpeg",
    stages: [
        { day: 1, distance: "Briefing", type: "TEAM PREPARATION" },
        { day: 2, distance: "150 KM", type: "RELAY SWIM" },
    ],
    supportDetails: [
        {
            title: "Team Coordination",
            description:
                "Professional coordination for teams of 2-3 swimmers with relay changeover rules",
        },
        {
            title: "Changeover Support",
            description:
                "Swimmer changes only in water, each swimmer minimum 1 hour, resting members on escort boat",
        },
        {
            title: "Team Briefing",
            description:
                "Specialized team briefing covering relay rules and coordination strategies",
        },
        {
            title: "Multiple Escort Boats",
            description:
                "Additional escort capacity for team support and safety coordination",
        },
        {
            title: "Team Communication",
            description:
                "Communication systems for effective team coordination during the swim",
        },
    ],
    includedServices: [
        {
            title: "Team Starter Kits",
            description:
                "Complete starter kit for each team member including caps, shirts, towels",
        },
        {
            title: "Team Finisher Awards",
            description:
                "Individual trophies for each team member + team certificate",
        },
        {
            title: "Enhanced Support",
            description: "Extended support crew capacity for team coordination",
        },
        {
            title: "Relay Equipment",
            description:
                "Special equipment for safe swimmer changeovers in open water",
        },
        {
            title: "Team Transport",
            description:
                "Group transport from finish back to Saratov for entire team",
        },
        {
            title: "Team Documentation",
            description:
                "Professional documentation of team achievement and relay performance",
        },
    ],
};
