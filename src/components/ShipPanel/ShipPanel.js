"use client";

import objectToArray from "../../utils/data_functions";

import styles from "./ShipPanel.module.css";
import ShipSystem from "../ShipSystem/ShipSystem";
import KodningReserves from "../KodningReserves/KodningReserves";

import temp_data from '../../data_old/data.json';
export default function ShipPanel({focused}) {

    const changePage = () => {};

    const data = objectToArray(temp_data.ship_subsystems);

    const ShipPanelStyles = `
        ${styles.ShipPanel}  
        ${focused === 'top' ? styles.hiddenShipPanel : ''}   
    `;

    return (
        <div className={ShipPanelStyles}>
            <div className={styles.subSystemDisplay}>
                {data.map(subsystem => (
                    <ShipSystem
                        key={subsystem.id}
                        changePage={changePage} 
                        name={subsystem.name}
                        systemStatus={subsystem.status}
                    />
                ))}
            </div>
            
            <KodningReserves reservePercentage='2%'/>
            <div className={styles.cornerStyle}/>
        </div>
    );
}