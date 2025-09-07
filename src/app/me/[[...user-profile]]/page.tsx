import { UserProfile } from "@clerk/nextjs";

import styles from "./page.module.css";

export default function Page() {
    return (
        <div className={styles.Container}>
            <UserProfile />
        </div>
    );
}
