import { useState } from "react";

import globalStyles from "./global.css";
import styles from "./Main.module.css";

import CrewList from "../CrewList/CrewList";
import CelestialBodyDetails from "../CelestialBodyDetails/CelestialBodyDetails";
import XaroStatus from "../XaroStatus/XaroStatus";
import MainPanel from "../MainPanel/MainPanel";
import ShipOverview from "../ShipOverview/ShipOverview";
import CurrentLocation from "../CurrentLocation/CurrentLocation";

import CelestialBody from "../CelestialBody/CelestialBody";

import galaxy_map_background from "../../icons/galaxy_map.jpg";

export default function Main() {
    const [currentPage, setCurrentPage] = useState('galaxy_map');
    const [currentTab, setCurrentTab] = useState('');
    const [breadCrumbPath, setBreadCrumbPath] = useState([]);
    const [currentCelestialBody, setCurrentCelestialBody] = useState('sol');
    const [currentGalaxy, setCurrentGalaxy] = useState('Milky Way');
    const [currentCluster, setCurrentCluster] = useState('');
    const [currentSystem, setCurrentSystem] = useState('');
    const [sidePanelExpanded, setSidePanelExpanded] = useState(false);

    const displayCelestialBodyDetails = (new_celestial_body) => {
        setCurrentCelestialBody(new_celestial_body);
    };

    const changePage = (new_page, new_tab = '') => {
        configureBreadCrumbPath(new_page);
        setCurrentPage(new_page);
        setCurrentTab(new_tab);
    };

    const zoomToCluster = (new_cluster) => {
        setCurrentCluster(new_cluster);
        changePage('cluster_map');
    }

    const zoomToSystem = (new_system) => {
        setCurrentSystem(new_system);
        changePage('system_map');
    }

    const configureBreadCrumbPath = (new_page) => {
        let breadCrumbPath = [
            {
                title: 'Galaxy Map',
                target: 'galaxy_map',
                level: 0
            },
            
        ];
        
        if(new_page !== 'galaxy_map') {
            breadCrumbPath.push({
                title: convertToTitle(new_page),
                target: new_page,
                level: 1
            });
        }

        setBreadCrumbPath(breadCrumbPath);
    }

    const convertToTitle = (breadcrumb_target) => {
        breadcrumb_target = breadcrumb_target.replace('_', ' ');

        return capitalizeFirstLetter(breadcrumb_target);
    }

    const toggleSidePanelExpanded = () => {
        setSidePanelExpanded(!sidePanelExpanded);
    }

    // TODO: Helper method. Should be moved to top level component
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    let page_contents = '';
    if(currentPage === 'galaxy_map') {
        page_contents = 
            <div className={styles.galaxy_map}>
                <CrewList/>
                <XaroStatus changePage={changePage}/>
                <div className={`${styles.sidePanel} ${sidePanelExpanded ? styles.expandedPanel : ''}`}>
                    <CurrentLocation click={changePage} currentPage={currentPage} currentGalaxy={currentGalaxy} currentCluster={currentCluster} currentSystem={currentSystem}/>
                    <CelestialBodyDetails/>
                    <div className={styles.mobileToggle} onClick={() => {toggleSidePanelExpanded()}}>Orbit</div>
                </div>
                

                <CelestialBody click={zoomToCluster} position={{top: '46vh', left: '32vw'}} iconStyles={{width: '4rem', height: '3rem', transform: 'rotate(71deg)'}} type="cluster" name="Sector 12" tooltip="Sector 12"/>
                <CelestialBody click={zoomToCluster} position={{top: '68vh', left: '50vw'}} iconStyles={{width: '7rem', height: '3rem', transform: 'rotate(349deg)'}} type="cluster" name="Sector 01" tooltip="Sector 01"/>
                <CelestialBody click={zoomToCluster} position={{top: '28vh', left: '61vw'}} iconStyles={{width: '4rem', height: '4rem', transform: 'rotate(300deg)'}} type="cluster" name="Sector 87" tooltip="Sector 87"/>

                <img className={styles.galaxy_map_background} src={galaxy_map_background}/>
            </div>
        ;
    } else if(currentPage === 'cluster_map') {
        page_contents = 
            <div className={styles.system_map}>
                <CrewList/>
                <XaroStatus changePage={changePage}/>
                <div className={`${styles.sidePanel} ${sidePanelExpanded ? styles.expandedPanel : ''}`}>
                    <CurrentLocation click={changePage} currentPage={currentPage} currentGalaxy={currentGalaxy} currentCluster={currentCluster} currentSystem={currentSystem}/>
                    <CelestialBodyDetails/>
                    <div className={styles.mobileToggle} onClick={() => {toggleSidePanelExpanded()}}>Orbit</div>
                </div>
                
                <CelestialBody click={zoomToSystem} position={{top: '30vh', left: '23vw'}} type="system" name="Ariansu 8209" tooltip="Ariansu 8209"/>
                <CelestialBody click={zoomToSystem} position={{top: '45vh', left: '34vw'}} type="system" name="Surebu 5628" tooltip="Surebu 5628"/>
                <CelestialBody click={zoomToSystem} position={{top: '52vh', left: '56vw'}} type="system" name="Hexa 0270" tooltip="Hexa 0270"/>
                <CelestialBody click={zoomToSystem} position={{top: '20vh', left: '62vw'}} type="system" name="Aporis 6519" tooltip="Aporis 6519"/>

                <div className={styles.cluster_map}></div>
            </div>
        ;
    } else if(currentPage === 'system_map') {
        page_contents = 
            <div className={styles.system_map}>
                <CrewList/>
                <XaroStatus changePage={changePage}/>
                <div className={`${styles.sidePanel} ${sidePanelExpanded ? styles.expandedPanel : ''}`}>
                    <CurrentLocation click={changePage} currentPage={currentPage} currentGalaxy={currentGalaxy} currentCluster={currentCluster} currentSystem={currentSystem}/>
                    <CelestialBodyDetails currentCelestialBody={currentCelestialBody} changePlanet={displayCelestialBodyDetails}/>
                    <div className={styles.mobileToggle} onClick={() => {toggleSidePanelExpanded()}}>Orbit</div>
                </div>
                
                <div className={styles.orbit_0}>
                    <CelestialBody click={displayCelestialBodyDetails} type="star" name="sol" tooltip="Sol"/>
                </div>
                <div className={styles.orbit_1}>
                    <CelestialBody click={displayCelestialBodyDetails} type="planet" name="mercury" tooltip="Mercury"/>
                </div>
                <div className={styles.orbit_2}>
                    <CelestialBody click={displayCelestialBodyDetails} type="planet" name="venus" tooltip="Venus"/>
                </div>
                <div className={styles.orbit_3}>
                    <CelestialBody click={displayCelestialBodyDetails} type="planet" name="earth" tooltip="Earth"/>
                </div>
                <div className={styles.backgroundTexture}></div>
            </div>
        ;
    } else if(currentPage === 'ship_overview') {
        page_contents = 
            <div className={styles.shipOverview}>
                <CrewList/>
                <MainPanel breadCrumbPath={breadCrumbPath} changePage={changePage}>
                    <ShipOverview tab={currentTab}/>
                </MainPanel>
                <CelestialBodyDetails/>
            </div>
        ;
    }

    return (
        <div className={styles.main}>
            {page_contents}
        </div>
    );
}