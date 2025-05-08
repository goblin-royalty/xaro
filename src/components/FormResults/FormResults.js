import styles from "./FormResults.module.css";

import Link from "next/link";

export default function FormResults({results = []}) {
    const displayResults = () => {
        let validResults = false;
        const displayedResults = results.map(search_result => {
            if(search_result.data.length) {
                validResults = true;
                return (
                    <div key={search_result.source}>
                        {search_result.data.map(search_result_data => {
                            return <Link key={search_result_data.id} href={`/${search_result.source}/${search_result_data.id}`} className={styles.searchResult}>{search_result_data[`${search_result.displayProperty}`]}</Link>;
                        })}
                    </div>
                )
            }
        });

        if(results.length && !validResults) {
            return <div><a href='#' className={styles.searchResult}>No results</a></div>;
        } else {
            return displayedResults;
        }
    }

    return (
        <div className={styles.resultsContainer}>
            {displayResults()}
        </div>
    );
}