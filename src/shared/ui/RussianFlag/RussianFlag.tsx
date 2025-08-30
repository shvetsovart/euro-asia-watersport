import styles from "./RussianFlag.module.css";

interface RussianFlagProps {
    className?: string;
}

export function RussianFlag({ className }: RussianFlagProps) {
    return (
        <div className={`${styles.russianFlag} ${className || ""}`}>
            <div className={styles.stripe}>
                <div className={styles.white}></div>
                <div className={styles.blue}></div>
                <div className={styles.red}></div>
            </div>
        </div>
    );
}
