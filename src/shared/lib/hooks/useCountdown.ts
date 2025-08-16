import { TimeLeft } from "@/entities/Challenge";
import { useEffect, useState } from "react";
import { calculateTimeLeft } from "../countdown";

interface UseCountdownProps {
    targetDate: string; // ISO string date
}

export const useCountdown = ({ targetDate }: UseCountdownProps) => {
    // Инициализируем с правильным временем для SSR
    const [timeLeft, setTimeLeft] = useState<TimeLeft>(() =>
        calculateTimeLeft(targetDate)
    );
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);

        // Сразу обновляем после гидратации
        setTimeLeft(calculateTimeLeft(targetDate));

        // Затем обновляем каждую секунду
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft(targetDate));
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    return { timeLeft, isClient };
};
