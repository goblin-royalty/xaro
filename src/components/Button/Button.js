import styles from "./Button.module.css";

import Link from "next/link";

export default function Button({buttonHref, buttonText}) {
    return (
        <Link href={buttonHref} className={styles.DefaultButton}>{buttonText}</Link>
    );
}