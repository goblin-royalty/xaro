import { useEffect } from "react";

import styles from "./Tooltip.module.css";

export default function Tooltip({content}) {
    return (
        <div className={styles.tooltip}>
            <p>{content}</p>
        </div>
    );
}