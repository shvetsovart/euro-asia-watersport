// Shared configuration
export const config = {
    app: {
        name: "WaterSport App",
        version: "1.0.0",
    },
    api: {
        baseUrl: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api",
    },
} as const;
