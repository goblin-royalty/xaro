import styles from "./CurrentLocation.module.css";

import galaxy_icon from "../../icons/current_galaxy_icon.svg";
import cluster_icon from "../../icons/current_cluster_icon.png";
import star_icon from "../../icons/current_star_icon.png";

import temp_data from '../../data/data.json';

import Tooltip from "../Tooltip/Tooltip";

export default function CurrentLocation({click, currentPage, currentGalaxy, currentCluster, currentSystem}) {

    const getStateClasses = (zoom_level) => {
        if(zoom_level === currentPage) {
            return styles.currentView;
        } else if(!currentCluster && zoom_level === 'cluster_map' || !currentSystem && zoom_level === 'system_map') {
            return styles.notSelectedYet;
        }
    }

    return (
        <div className={styles.currentLocation}>
            <div className={`${styles.zoomLevelContainer} ${getStateClasses('galaxy_map')}`} onClick={() => click('galaxy_map')}>
                <img src={galaxy_icon}/>
                <Tooltip content={currentGalaxy}/>
            </div>
            <div className={`${styles.zoomLevelContainer} ${getStateClasses('cluster_map')}`} onClick={() => click('cluster_map')}>
                <img className={styles.clusterIconStyles} src={cluster_icon}/>
                <Tooltip content={currentCluster}/>
            </div>
            <div className={`${styles.zoomLevelContainer} ${getStateClasses('system_map')}`} onClick={() => click('system_map')}>
                <img src={star_icon}/>
                <Tooltip content={currentSystem}/>
            </div>
            <div className={styles.backgroundTexture}></div>
        </div>
    );
}