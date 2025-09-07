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
            title: "Professional Captain Escort",
            description:
                "Each solo or relay team will be accompanied by an experienced motorboat captain",
        },
        {
            title: "Water-Only Changeovers",
            description:
                "Swimmer changes for the relay are only permitted in the water",
        },
        {
            title: "Minimum Swimming Duration",
            description:
                "The active swimmer must stay in the water for at least one hour (breaks are permitted) before changing",
        },
        {
            title: "Support Boat Rest Area",
            description: "Resting swimmers remain on the support boat",
        },
        {
            title: "Additional Team Accompaniment",
            description:
                "It is possible to accompany the team of swimmers (including those swimming a relay). This option can be booked additionally (accommodation in a tent and meals)",
        },
        {
            title: "Pure Swimming Challenge",
            description:
                "This extreme-distance challenge is aimed at endurance-trained open water athletes who consciously forgo technical aids and devote themselves to the original form of open water swimming",
        },
    ],
    includedServices: [
        {
            title: "Motorboat Escort",
            description: "Personal motorboat escort for the entire route",
        },
        {
            title: "Return Transport",
            description:
                "Return transport from the destination (Stepana Rasina Cliff) to Saratov",
        },
        {
            title: "Meals & Nutrition",
            description:
                "Breakfast, dinner, and snacks (e.g., energy gels, bars, isotonic drinks) provided as part of the event",
        },
        {
            title: "Tent Accommodation",
            description:
                "Tent accommodations are provided. Each participant must bring their own sleeping mat and sleeping bag",
        },
        {
            title: "Tent Sauna",
            description:
                "Tent sauna is provided. Meals are freshly prepared daily around a campfire",
        },
        {
            title: "Starter Kit",
            description:
                "The starter kit, including a swim cap, a T-shirt, and a towel, will also be handed out during this time",
        },
    ],
};
