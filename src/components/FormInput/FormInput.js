'use client';

import styles from "./FormInput.module.css";

import { useEffect, useState } from "react";

import { useDebouncedCallback } from "use-debounce";

export default function FormInput({keyword, setKeyword}) {
    const [inputValue, setInputValue] = useState(keyword);

    useEffect(() => {
        setInputValue(keyword);
    }, [keyword]);

    const debounced = useDebouncedCallback(
        (value) => {
            if(value.trim() !== '') {
                setKeyword(value);
            }
        }, 500
    );

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
        debounced(event.target.value);
    }

    return (
        <input
            type="text"
            value={inputValue}
            placeholder="Ask X'aro"
            onChange={handleInputChange}
            className={styles.askXaro}>
        </input>
    );
}