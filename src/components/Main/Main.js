import styles from "./Main.module.css";

// DB operations
import {getCrew, getSubsystems} from "../../db";

// Client components
import SidePanel from "../SidePanel/SidePanel";
import TopPanel from "../TopPanel/TopPanel";
import BottomPanel from "../BottomPanel/BottomPanel";

import CrewList from "../CrewList/CrewList";
import CelestialBodyDetails from "../CelestialBodyDetails/CelestialBodyDetails";
import Form from "../Form/Form";
import ShipPanel from "../ShipPanel/ShipPanel";
import ShipOverview from "../ShipOverview/ShipOverview";

export default async function Main({ children }) {

    const crewMembers = await getCrew();
    const subsystems = await getSubsystems();

    return (
        <div className="App">
            <div className={styles.main}>
                <div className={styles.mainContainer}>
                    <TopPanel>
                        <ShipOverview subsystems={subsystems}/>
                    </TopPanel>
                    <SidePanel position='left'>
                        <CrewList crewMembers={crewMembers}/>
                    </SidePanel>
                    <ShipPanel subsystems={subsystems}/>

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