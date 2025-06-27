import styles from "./Button.module.css";

import Link from "next/link";

import { useRouter } from 'next/navigation'

export default function Button({type = '', action = '', text, extraClass}) {
    const router = useRouter()

    const buildButton = () => {
        const classes = `${styles.DefaultButton} ${extraClass ? styles[extraClass] : ''}`;

        if(type === 'link') {
            return <Link href={action} className={classes}>{text}</Link>
        } else if(type === 'onclick') {
            return <a href="#" onClick={action} className={classes}>{text}</a>
        } else {
            return <a href="#" onClick={() => router.back()} className={classes}>{text}</a>
        }
    }

    return (
        buildButton()
    );
}