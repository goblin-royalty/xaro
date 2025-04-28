"use client";

import styles from "./BottomPanel.module.css";

export default function BottomPanel({children}) {
    return (
        <div className={styles.askXaroContainer}>
            {children}
        </div>
    );
}