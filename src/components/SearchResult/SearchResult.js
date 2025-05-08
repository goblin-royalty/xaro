'use client'

import styles from "./SearchResult.module.css";

import { useContext } from "react";

import Button from "../Button/Button";
import InteractiveWord from "../InteractiveWord/InteractiveWord";

import { KeywordContext } from "../../context/KeywordContext";

export default function SearchResult({data}) {
    const { keyword, setKeyword } = useContext(KeywordContext);

    const createInteractiveText = (plainText) => {
        const textWordByWord = plainText.split(' ');

        let keyCounter = 0;
        return textWordByWord.map(word => {
            keyCounter++;
            if(word.length > 3 && word !== data.title) {
                return <InteractiveWord key={keyCounter} word={word} searchForWord={searchForWord}/>;
            } else {
                return <span key={keyCounter} className={styles.nonInteractiveWord}>{word}</span>;
            }
        });
    }

    const searchForWord = (word) => {
        setKeyword(word);
    }

    const displayedData = () => {
        return Object.entries(data).map(([key, value]) => {
            if(key !== 'id') {
                return (
                    <p key={key}>{key.replace('_', ' ')} : <span className={styles.InteractiveText}>{createInteractiveText(value)}</span></p>
                )
            }
        })
    }

    return (
        <div className={styles.SearchContainer}>
            <h2>Search results</h2>
            <div>
                {displayedData()}
            </div>
            <Button type={'link'} action={`\\`} text={`Back`}/>
        </div>
    );
}