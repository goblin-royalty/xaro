import styles from "./ShipStatus.module.css";
import ShipSystem from "../ShipSystem/ShipSystem";
import KodningReserves from "../KodningReserves/KodningReserves";

import temp_data from '../../data/data.json';
import getData from '../../utils/data_functions'
export default function ShipStatus({changePage}) {

    // TODO: make work without creating this extra array
/*     let subsystems_array = [];
    Object.keys(temp_data.ship_subsystems).forEach(subsystem_key => {
        subsystems_array.push(temp_data.ship_subsystems[subsystem_key]);
    }); */

    const data = getData(temp_data.ship_subsystems);

    return (
        <div className={styles.shipStatus}>
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