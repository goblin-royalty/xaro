import { useState } from "react";

/* import styles from "./CrewList.module.css";
 */
import CrewMember from "../CrewMember/CrewMember";

import temp_data from '../../data/data.json';

export default function CrewList({objectToArray, expanded, position}) {
    const [expandedMemberId, setExpandedMemberId] = useState();

    const toggleCrewMember = (id) => {
        id !== expandedMemberId ? setExpandedMemberId(id) : setExpandedMemberId();
    }

    const data = objectToArray(temp_data.crew_members);

    return (
        <div /* className={`${styles.crewList} ${expanded ? styles.expandedPanel : ''}`} */>
            {data.map((crew_member) => (
                <CrewMember
                    toggleCrewMember={toggleCrewMember}
                    expanded={expandedMemberId === crew_member.id}
                    key={crew_member.id}
                    data={crew_member}
                />
            ))}
        </div>
    );
}