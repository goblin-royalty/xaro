"use client";

import styles from "./ShipOverview.module.css";

import { useState, useEffect } from "react";

export default function ShipOverview({subsystems, preselectedSubsystem}) {
    const [selectedTab, setSelectedTab] = useState('');

    useEffect(() => {
        setSelectedTab(preselectedSubsystem);
    }, [preselectedSubsystem])
    
    const selectSubSystem = (event) => {
        setSelectedTab(event.currentTarget.getAttribute('subsystem'));
    }

    // TODO: move to a location where it can be accessed from both here and ShipSystem because it is used in both places
    const displayStatus = (status) => {
        let status_display = {};
        if(status === 'Online') {
            status_display = <span className={styles.online}>Online</span>;
        } else {
            status_display = <span className={styles.offline}>Offline</span>;
        }

        return status_display;
    }

    return (
        <div className={styles.ShipOverview}>
            <h1 className={styles.title}>Ship Subsystems</h1>
            {subsystems.map(subsystem => (
                <div onClick={selectSubSystem} subsystem={subsystem.id} key={subsystem.id} className={`${styles.shipSubSystem} ${subsystem.id == selectedTab ? styles.selected : ''}`}>
                    <div className={styles.basicInfo}>
                        <h2>{subsystem.type}</h2>
                        <h2>{subsystem.current}</h2>
                        <h2>{displayStatus(subsystem.status)}</h2>
                    </div>
                    <div className={styles.detailedInfo}>
                        <p>Current capability: <span>{subsystem.value}</span></p>
                        <p>{subsystem.details}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}