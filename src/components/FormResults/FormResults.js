"use client";

import styles from "./FormResults.module.css";

export default function FormResults({results = []}) {

    const displayResults = () => {
        const displayedResults = results.map(search_result => {
            return <div key={search_result.id} className={styles.searchResult}>{search_result.first_name}</div>;
        });
        return displayedResults;
    }

    return (
        <div className={styles.resultsContainer}>
            {displayResults()}
        </div>
    );
}