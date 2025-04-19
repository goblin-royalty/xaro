import styles from "./Search.module.css";

export default function Search() {
    return (
        <div className={styles.SearchContainer}>
            <h2>Search results</h2>
            <div className={styles.SearchBackground}>
                <h3>Ereshkigal</h3>
                <p>species: <span>unknown</span></p>
                <p>symbol : <span>moth</span></p>
                <p>danger: <span>very high</span></p>
            </div>
        </div>
    );
}