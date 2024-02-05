import styles from "./Breadcrumb.module.css";

export default function Breadcrumb({path, changePage}) {

    const redirectToTarget = (event) => {
        const new_page = event.target.getAttribute('breadcrumbtarget');
        changePage(new_page);
    }

    const active_segment = path.reduce((prev, current) => (prev && prev.y > current.y) ? prev : current);

    return (
        <div className={styles.Breadcrumb}>
            {path.map(segment => (
                <span onClick={redirectToTarget} key={segment.level} className={`${styles.breadcrumbSegment} ${active_segment.level === segment.level ? styles.activeSegment : ''}`}>
                    <a breadcrumbtarget={segment.target}>{segment.title}</a>
                </span>
            ))}
        </div>
    );
}