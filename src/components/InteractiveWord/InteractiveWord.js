'use client'

import styles from "./InteractiveWord.module.css";

export default function InteractiveWord({word, searchForWord}) {
    const searchForCurrentWord = () => {
        searchForWord(word);
    }

    return (
        <span onClick={searchForCurrentWord} className={styles.InteractiveWord}>
            {word}
        </span>
    );
}