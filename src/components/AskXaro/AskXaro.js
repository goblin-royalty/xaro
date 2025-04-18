"use client";

import { useState } from "react";

import styles from "./AskXaro.module.css";

import temp_data from '../../data_old/data.json';

export default function AskXaro({focused}) {
    const [xaroInput, setXaroInput] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleChange = (event) => {
        setXaroInput(event.target.value);
        globalSearch(temp_data, xaroInput);
    }

    // Recursive search in all data
    const globalSearch = (data, keyword) => {
        let result = 'not found';

        if(typeof data !== 'object') {
            return result;
        }

        result = Object.keys(data).find((data_key) => {
            if(data[data_key] === keyword) {
                return data[data_key];
            } else if(data_key === keyword) {
                return data[data_key];
            } else {
                const end_result = globalSearch(data[data_key], keyword);
                if(end_result !== 'not found') {
                    return end_result;
                }
            }
        });

        if(result !== undefined) {
            const new_result = {
                name: result,
                data: data[result]
            }

            searchResults.push(new_result);
            setSearchResults(searchResults);
        }
        return result;
    }

    const displayResults = () => {
        const results = Object.keys(searchResults).map(search_result => {
            if(typeof searchResults[search_result].data === 'object') {
                return <div key={search_result} className={styles.searchResult}>{searchResults[search_result].name}</div>;
            }
        });
        return results;
    }

    const containerStyles = `
        ${styles.askXaroContainer}
        ${focused === 'bottom' ? styles.xaroExpandedContainer : ''}
    `;

    const inputPlaceholder = focused === 'bottom' ? 'Yes?' : `Ask X'aro`;

    return (
        <div className={containerStyles}>
            <div className={styles.resultsContainer}>
                {displayResults()}
            </div>
            <input
                value={xaroInput}
                onChange={handleChange}
                type="text"
                placeholder={inputPlaceholder}
                className={styles.askXaro}>
            </input>
            <div className={styles.xaroCube}></div>
        </div>
    );
}