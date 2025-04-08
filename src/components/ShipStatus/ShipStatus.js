import styles from "./ShipStatus.module.css";
import ShipSystem from "../ShipSystem/ShipSystem";
import KodningReserves from "../KodningReserves/KodningReserves";

import temp_data from '../../data/data.json';
export default function ShipStatus({changePage, objectToArray, focused}) {

    const data = objectToArray(temp_data.ship_subsystems);

    const shipStatusStyles = `
        ${styles.shipStatus}  
        ${focused === 'top' ? styles.hiddenShipStatus : ''}   
    `;

    return (
        <div className={shipStatusStyles}>
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
            
            <KodningReserves reservePercentage='0.7%'/>

            <img src="./texture_6.jfif" alt="backgroundTexture" className={styles.backgroundTexture}/>
        </div>
    );
}