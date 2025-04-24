'use client';

import styles from "./FormInput.module.css";

import { useDebouncedCallback } from "use-debounce";

export default function FormInput({setKeyword}) {

    const debounced = useDebouncedCallback(
        (value) => {
            setKeyword(value);
        }, 500
    );

    const handleInputChange = (event) => {
        if(event.target.value.trim() !== '') {
            debounced(event.target.value);
        }
    }

    return (
        <input
            type="text"
            placeholder="Ask X'aro"
            onChange={handleInputChange}
            className={styles.askXaro}>
        </input>
    );
}