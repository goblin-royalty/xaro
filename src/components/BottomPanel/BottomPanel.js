"use client";

import styles from "./BottomPanel.module.css";

export default function BottomPanel({children}) {

    const containerStyles = `
        ${styles.askXaroContainer}
    `;

    return (
        <div className={containerStyles}>
            {children}
            <div className={styles.xaroCube}></div>
        </div>
    );
}