import styles from "./ShipSystem.module.css";

export default function ShipSystem({changePage, type, systemStatus}) {
    const changePageToSystem = () => {
        changePage('ship_overview', type);
    };

    // TODO: move to a location where it can be accessed from both here and ShipOverview because it is used in both places
    const displayStatus = () => {
        let status_display = {};
        if(systemStatus === 'Online') {
            status_display = <span className={styles.online}>Online</span>;
        } else {
            status_display = <span className={styles.offline}>Offline</span>;
        }

        return status_display;
    }

    return (
        <div onClick={changePageToSystem} className={styles.shipSystem}>
            <p className={styles.title}>{type}</p>
            {displayStatus()}
        </div>
    );
}