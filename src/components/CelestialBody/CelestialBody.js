import styles from "./CelestialBody.module.css";

import star_icon from "../../icons/star_icon.png";
import planet_icon from "../../icons/planet_icon.png";

import system_icon from "../../icons/system_icon.png";

import Tooltip from "../Tooltip/Tooltip";

export default function CelestialBody({click, position = {}, iconStyles = {}, type, name = '', tooltip}) {
    const changeMapPage = () => {
        click(name);
    };

    const getVisual = () => {
        switch (type) {
            case 'planet':
                return <img src={planet_icon} className={styles.planet} style={iconStyles}/>
            case 'star':
                return <img src={star_icon} className={styles.star} style={iconStyles}/>
            case 'system':
                return <img src={system_icon} className={styles.system} style={iconStyles}/>
            case 'cluster':
                return <div className={styles.cluster} style={iconStyles}></div>
            default:
                console.error('CelstialBody error: invalid type');
                break;
        }
    }

    let focus_crosshairs = '';
    if(type == 'system') {
        focus_crosshairs = 
            <div className={styles.focus_container}>
                <div className={`${styles.focus_top_left} ${styles.focus_corner}`}></div>
                <div className={`${styles.focus_top_right} ${styles.focus_corner}`}></div>
                <div className={`${styles.focus_bottom_left} ${styles.focus_corner}`}></div>
                <div className={`${styles.focus_bottom_right} ${styles.focus_corner}`}></div>
            </div>;
    }

    return (
        <div style={position} className={styles.celestialBodyContainer} onClick={changeMapPage}>
            {getVisual()}
            {focus_crosshairs}
            <Tooltip content={tooltip}/>
        </div>
    );
}