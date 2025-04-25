import Button from "../Button/Button";
import styles from "./SearchResult.module.css";

export default function SearchResult({data}) {
    const displayedData = () => {
        return Object.entries(data).map(([key,value]) => {
            return (
                <p key={key}>{key} : <span>{value.toString()}</span></p>
            )
        })
    }

    return (
        <div className={styles.SearchContainer}>
            <h2>Search results</h2>
            <div className={styles.SearchBackground}>
                {displayedData()}
            </div>
            <Button buttonHref={`\\`} buttonText={`Back`}/>
        </div>
    );
}