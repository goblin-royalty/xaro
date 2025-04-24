import styles from "./Main.module.css";

// DB operations
import {getCrew} from "../../db";

// Server components
import Form from "../Form/Form";

// Client components
import SidePanel from "../SidePanel/SidePanel";
import TopPanel from "../TopPanel/TopPanel";
import BottomPanel from "../BottomPanel/BottomPanel";

import CrewList from "../CrewList/CrewList";
import CelestialBodyDetails from "../CelestialBodyDetails/CelestialBodyDetails";

import ShipPanel from "../ShipPanel/ShipPanel";
import ShipOverview from "../ShipOverview/ShipOverview";

export default async function Main({ children }) {

    const crewMembers = await getCrew();

    // const [currentPage, setCurrentPage] = useState('galaxy_map');
    // const [currentTab, setCurrentTab] = useState('');
    // const [breadCrumbPath, setBreadCrumbPath] = useState([]);
    
    // const changePage = (new_page, new_tab = '') => {
    //     // configureBreadCrumbPath(new_page);
    //     setCurrentPage(new_page);
    //     setCurrentTab(new_tab);
    // };

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
    const currentTab = '';

    return (
        <div className="App">
            <div className={styles.main}>
                <div className={styles.galaxy_map}>
                    <TopPanel>
                        <ShipOverview tab={currentTab}/>
                    </TopPanel>
                    <SidePanel position='left'>
                        <CrewList crewMembers={crewMembers}/>
                    </SidePanel>
                    <ShipPanel/>

                    {children}

                    <BottomPanel>
                        <Form/>
                    </BottomPanel>

                    <SidePanel position='right'>
                        <CelestialBodyDetails/>
                    </SidePanel>
                </div>
            </div>
        </div>
    );
}