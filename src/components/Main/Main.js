// import { useSwipeable } from "react-swipeable";

import styles from "./Main.module.css";

//utils
// import capitalizeFirstLetter from "../../utils/string_functions";

// Page components
import ShipStatus from "../ShipStatus/ShipStatus";
// import Search from "../Search/Search";

import SidePanel from "../SidePanel/SidePanel";
import TopPanel from "../TopPanel/TopPanel";

import CrewList from "../CrewList/CrewList";
import CelestialBodyDetails from "../CelestialBodyDetails/CelestialBodyDetails";

import ShipPanel from "../ShipPanel/ShipPanel";
import AskXaro from "../AskXaro/AskXaro";
import ShipOverview from "../ShipOverview/ShipOverview";
// import CurrentLocation from "../CurrentLocation/CurrentLocation";

import sql from "../../db";

export default async function Main() {

    async function getCrew() {
        const crewMembers = await sql`
            select * from crew_members ORDER BY id ASC
        `;
    
        return crewMembers;
    }

    const crewMembers = await getCrew();
    

    // const [currentPage, setCurrentPage] = useState('galaxy_map');
    // const [currentTab, setCurrentTab] = useState('');
    // const [breadCrumbPath, setBreadCrumbPath] = useState([]);
    // const [currentGalaxy, setCurrentGalaxy] = useState('Milky Way');
    // const [currentCluster, setCurrentCluster] = useState('');
    // const [currentSystem, setCurrentSystem] = useState('');

    // const [panelFocused, setPanelFocused] = useState('');

    // const focusedPanel = (position) => {
    //     if (panelFocused !== '' && panelFocused !== position) {
    //         // if one side panel is focused as we swipe to the other side this stop the opposite panel from being focused
    //         setPanelFocused('');
    //     }
    //     else {
    //         setPanelFocused(position)
    //     }
    // }

//     const { ref: documentRef } = useSwipeable({
//         onSwipedLeft: () => {
//             focusedPanel('right');       
//         },
//         onSwipedRight: () => {
//             focusedPanel('left');
//         },
//         onSwipedDown: () => {
//             focusedPanel('top');
//         },
//         onSwipedUp: () => {
//             focusedPanel('bottom');
//         }, 
//         preventDefaultTouchmoveEvent: true,
//    });

    // attach swipeable to document
    // useEffect(() => {
    //     documentRef(document);
    //     // Clean up swipeable event listeners
    //     return () => documentRef({});
    // }); 

    // const changePage = (new_page, new_tab = '') => {
    //     // configureBreadCrumbPath(new_page);
    //     setCurrentPage(new_page);
    //     setCurrentTab(new_tab);
    // };

    // const zoomToCluster = (new_cluster) => {
    //     setCurrentCluster(new_cluster);
    //     changePage('cluster_map');
    // }

    // const configureBreadCrumbPath = (new_page) => {
    //     let breadCrumbPath = [
    //         {
    //             title: 'Galaxy Map',
    //             target: 'galaxy_map',
    //             level: 0
    //         },
            
    //     ];
        
    //     if(new_page !== 'galaxy_map') {
    //         breadCrumbPath.push({
    //             title: convertToTitle(new_page),
    //             target: new_page,
    //             level: 1
    //         });
    //     }

    //     setBreadCrumbPath(breadCrumbPath);
    // }

    // const convertToTitle = (breadcrumb_target) => {
    //     breadcrumb_target = breadcrumb_target.replace('_', ' ');

    //     return capitalizeFirstLetter(breadcrumb_target);
    // }

    // TEMP for backend integration
    const panelFocused = 'left';
    const currentTab = '';

    return (
        <div className={styles.main}>
            <div className={styles.galaxy_map}>
                <TopPanel focused={panelFocused}>
                    <ShipOverview tab={currentTab}/>
                </TopPanel>
                <SidePanel position='left' focused={panelFocused}>
                    <CrewList crewMembers={crewMembers}/>
                </SidePanel>
                <ShipPanel focused={panelFocused}/>
                <ShipStatus />
                <AskXaro focused={panelFocused}/>
                <SidePanel position='right' focused={panelFocused}>
                    <CelestialBodyDetails/>
                </SidePanel>
            </div>
        </div>
    );
}