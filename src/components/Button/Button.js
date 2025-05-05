import styles from "./Button.module.css";

import Link from "next/link";

export default function Button({type, action, text}) {
    const buildButton = () => {
        if(type === 'link') {
            return <Link href={action} className={styles.DefaultButton}>{text}</Link>
        } else if(type === 'onclick') {
            return <a href="#" onClick={action} className={styles.DefaultButton}>{text}</a>
        }
    }

    return (
        buildButton()
    );
}