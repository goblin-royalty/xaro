"use client";

import Link from "next/link";

import styles from "./FormResults.module.css";

export default function FormResults({results = []}) {

    const displayResults = () => {
        const displayedResults = results.map(search_result => {
            return <Link key={search_result.id} href={`/search/${search_result.id}`} className={styles.searchResult}>{search_result.first_name}</Link>;
        });
        return displayedResults;
    }

    return (
        <div className={styles.resultsContainer}>
            {displayResults()}
        </div>
    );
}