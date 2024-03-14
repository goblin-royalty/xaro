import { useState } from "react";

import styles from "./ShipOverview.module.css";

import temp_data from '../../data/data.json';

export default function ShipOverview({tab, objectToArray}) {
    const [selectedTab, setSelectedTab] = useState(tab);

    const selectSubSystem = (event) => {
        setSelectedTab(event.currentTarget.getAttribute('subsystem'));
    }

    // Almost duplicate with displayStatus in ShipSystem component
    const displayStatus = (status) => {
        let status_display = {};
        if(status === 'Online') {
            status_display = <span className={styles.online}>Online</span>;
        } else if(status === 'Inactive') {
            status_display = <span className={styles.inactive}>Inactive</span>;
        } else {
            status_display = <span className={styles.offline}>Offline</span>;
        }

        return status_display;
    }


    const data = objectToArray(temp_data.ship_subsystems);


    return (
        <div className={styles.ShipOverview}>
            {data.map(subsystem => (
                <div onClick={selectSubSystem} subsystem={subsystem.name} key={subsystem.id} className={`${styles.shipSubSystem} ${subsystem.name === selectedTab ? styles.selected : ''}`}>
                    <div className={styles.basicInfo}>
                        <h2>{subsystem.name}</h2>
                        <h2>{subsystem.current}</h2>
                        <h2>{subsystem.value}</h2>
                        <h2>{displayStatus(subsystem.status)}</h2>
                    </div>
                    <div className={styles.detailedInfo}>
                        <p>{subsystem.details}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}