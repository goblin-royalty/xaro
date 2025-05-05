import styles from "./Main.module.css";

// DB operations
import {getCrew, getSubsystems} from "../../db";

// Client components
import MainPanel from "../MainPanel/MainPanel";

export default async function Main({ children }) {

    const crewMembers = await getCrew();
    const subsystems = await getSubsystems();

    return (
        <div className="App">
            <div className={styles.main}>
                <MainPanel data={{crewMembers: crewMembers, subsystems: subsystems}} children={children}/>
            </div>
        </div>
    );
}