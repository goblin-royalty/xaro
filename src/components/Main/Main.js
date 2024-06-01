import { useSwipeable } from "react-swipeable";

import { useState } from "react";
import { useEffect } from "react";

import styles from "./Main.module.css";

//utils
import capitalizeFirstLetter from "../../utils/string_functions";
import objectToArray from "../../utils/data_functions";

import SidePanel from "../SidePanel/SidePanel";
import CrewList from "../CrewList/CrewList";
import CelestialBodyDetails from "../CelestialBodyDetails/CelestialBodyDetails";

import ShipStatus from "../ShipStatus/ShipStatus";
import AskXaro from "../AskXaro/AskXaro";
import MainPanel from "../MainPanel/MainPanel";
import ShipOverview from "../ShipOverview/ShipOverview";
import CurrentLocation from "../CurrentLocation/CurrentLocation";

import CelestialBody from "../CelestialBody/CelestialBody";

export default function Main() {
    const [currentPage, setCurrentPage] = useState('galaxy_map');
    const [currentTab, setCurrentTab] = useState('');
    const [breadCrumbPath, setBreadCrumbPath] = useState([]);
    const [currentCelestialBody, setCurrentCelestialBody] = useState('sol');
    const [currentGalaxy, setCurrentGalaxy] = useState('Milky Way');
    const [currentCluster, setCurrentCluster] = useState('');
    const [currentSystem, setCurrentSystem] = useState('');

    const [panelFocused, setPanelFocused] = useState('');

    const focusedPanel = (position) => {
        if (panelFocused !== '' && panelFocused !== position) {setPanelFocused('')}
            else {setPanelFocused(position)}}

     const { ref: documentRef } = useSwipeable({
        onSwipedLeft: () => {focusedPanel('right');       
        },
        onSwipedRight: () => {focusedPanel('left');
        },
        onSwipedDown: () => {focusedPanel('top');
        },
        onSwipedUp: () => {focusedPanel('bottom');
        }, 
        preventDefaultTouchmoveEvent: true,
   });

    // attach swipeable to document
    useEffect(() => {
        documentRef(document);
        // Clean up swipeable event listeners
        return () => documentRef({});
    }); 

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

    let page_contents = '';
    if(currentPage === 'galaxy_map') {
        page_contents = 
            <div className={styles.galaxy_map}>
                <SidePanel position='left' focused={panelFocused}>
                    <CrewList objectToArray={objectToArray}/>
                </SidePanel>
                <ShipStatus objectToArray={objectToArray} changePage={changePage}/>
                <AskXaro/>
                <SidePanel position='right' focused={panelFocused}>
                    <CurrentLocation click={changePage} currentPage={currentPage} currentGalaxy={currentGalaxy} currentCluster={currentCluster} currentSystem={currentSystem}/>
                    <CelestialBodyDetails/>
                </SidePanel>
                <CelestialBody click={zoomToCluster} position={{top: '46vh', left: '32vw'}} iconStyles={{borderColor: 'white', width: '4rem', height: '3rem', transform: 'rotate(71deg)'}} type="cluster" name="Sector 12" tooltip="Sector 12"/>
                <CelestialBody click={zoomToCluster} position={{top: '68vh', left: '50vw'}} iconStyles={{borderColor: 'white', width: '7rem', height: '3rem', transform: 'rotate(349deg)'}} type="cluster" name="Sector 01" tooltip="Sector 01"/>
                <CelestialBody click={zoomToCluster} position={{top: '28vh', left: '61vw'}} iconStyles={{borderColor: 'white', width: '4rem', height: '4rem', transform: 'rotate(300deg)'}} type="cluster" name="Sector 87" tooltip="Sector 87"/>
            </div>
        ;
    } else if(currentPage === 'cluster_map') {
        page_contents = 
            <div className={styles.system_map}>
                <SidePanel position='left' focused={panelFocused}>
                    <CrewList objectToArray={objectToArray}/>
                </SidePanel>
                <ShipStatus objectToArray={objectToArray} changePage={changePage}/>
                <AskXaro/>
                <SidePanel position='right' focused={panelFocused}>
                    <CurrentLocation click={changePage} currentPage={currentPage} currentGalaxy={currentGalaxy} currentCluster={currentCluster} currentSystem={currentSystem}/>
                    <CelestialBodyDetails/>
                </SidePanel>
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
                <SidePanel position='left' focused={panelFocused}>
                    <CrewList objectToArray={objectToArray}/>
                </SidePanel>
                <ShipStatus objectToArray={objectToArray} changePage={changePage}/>
                <AskXaro/>
                <SidePanel position='right' focused={panelFocused}>
                    <CurrentLocation click={changePage} currentPage={currentPage} currentGalaxy={currentGalaxy} currentCluster={currentCluster} currentSystem={currentSystem}/>
                    <CelestialBodyDetails currentCelestialBody={currentCelestialBody} changePlanet={displayCelestialBodyDetails}/>
                </SidePanel>
                
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
                <SidePanel position='left' focused={panelFocused}>
                    <CrewList objectToArray={objectToArray}/>
                </SidePanel>
                <MainPanel breadCrumbPath={breadCrumbPath} changePage={changePage}>
                    <ShipOverview objectToArray={objectToArray} tab={currentTab}/>
                </MainPanel>
                <SidePanel position='right' focused={panelFocused}>
                    <CurrentLocation/>
                    <CelestialBodyDetails/>
                </SidePanel>
            </div>
        ;
    }

    return (
        <div className={styles.main}>
            {page_contents}
        </div>
    );
}