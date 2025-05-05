"use client";

import styles from "./ShipPanel.module.css";
import ShipSystem from "../ShipSystem/ShipSystem";
import KodningReserves from "../KodningReserves/KodningReserves";

export default function ShipPanel({subsystems, selectSubSystem}) {

    // TEMP - manual list of subsystems to display in the top panel
    let subsystem_shortlist = [];
    subsystems.forEach(subsystem => {
        if(subsystem.id === 1 || subsystem.id === 2 || subsystem.id === 4 || subsystem.id === 6 || subsystem.id === 7 || subsystem.id === 8) {
            subsystem_shortlist.push(subsystem);
        }
    });
    
    return (
        <div className={styles.ShipPanel}>
            <div className={styles.subSystemDisplay}>
                {subsystem_shortlist.map(subsystem => (
                    <ShipSystem
                        key={subsystem.id}
                        selectSubSystem={selectSubSystem} 
                        type={subsystem.type}
                        systemStatus={subsystem.status}
                        id={subsystem.id}
                    />
                ))}
            </div>
            
            <KodningReserves reservePercentage='2%'/>
            <div className={styles.cornerStyle}/>
        </div>
    );
}