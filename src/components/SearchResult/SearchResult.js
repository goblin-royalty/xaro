import styles from "./SearchResult.module.css";

import Button from "../Button/Button";

export default function SearchResult({data}) {
    const displayedData = () => {
        return Object.entries(data).map(([key,value]) => {
            if(key !== 'id') {
                return (
                    <p key={key}>{key} : <span>{value.toString()}</span></p>
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
            <Button buttonHref={`\\`} buttonText={`Back`}/>
        </div>
    );
}