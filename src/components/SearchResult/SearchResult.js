'use client'

import styles from "./SearchResult.module.css";

import { useState, useContext } from "react";

import Button from "../Button/Button";
import InteractiveWord from "../InteractiveWord/InteractiveWord";

import { KeywordContext } from "../../context/KeywordContext";

import IsWordInteractive from "../../utils/data_functions";

export default function SearchResult({data}) {
    const { keyword, setKeyword } = useContext(KeywordContext);
    const [expanded, setExpanded] = useState(false);

    const createInteractiveText = (plainText) => {
        const textWordByWord = plainText.split(' ');

        let keyCounter = 0;
        return textWordByWord.map(word => {
            keyCounter++;
            if(word !== data.title && IsWordInteractive(word)) {
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
    
    const expandContainer = () => {
        setExpanded(!expanded);
    }

    return (
        <div className={expanded ? `${styles.SearchContainer} ${styles.ExpandedSearchContainer}`: styles.SearchContainer}>
            <h2>Search results</h2>
            <div>
                {displayedData()}
            </div>
            <div className={styles.buttonsSection}>
                <Button type={'link'} action={`\\`} text={`Back`}/>
                <Button type={'onclick'} action={expandContainer} text={`< >`}/>
            </div>
        </div>
    );
}