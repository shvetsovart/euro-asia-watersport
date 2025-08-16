import { Footer, Header } from "@/widgets";
import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    display: "swap",
    fallback: ["system-ui", "arial"],
});

const montserrat = Montserrat({
    variable: "--font-montserrat",
    subsets: ["latin"],
    display: "swap",
    fallback: ["system-ui", "sans-serif"],
    weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
    title: "WaterSport - Extreme Water Sports Challenges",
    description:
        "Join extreme water sports challenges: 150km Solo and Camp adventures. Push your limits with professional support.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.variable} ${montserrat.variable}`}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
