import { useState } from "react";

import styles from "./CrewList.module.css";

import CrewMember from "../CrewMember/CrewMember";

import temp_data from '../../data/data.json';

export default function CrewList() {
    const [expandedMemberId, setExpandedMemberId] = useState();
    const [expanded, setExpanded] = useState(false);

    // TODO: make work without creating this extra array
    let crew_member_array = [];
    Object.keys(temp_data.crew_members).forEach(crew_member_key => {
        crew_member_array.push(temp_data.crew_members[crew_member_key]);
    });

    const toggleCrewMember = (id) => {
        id !== expandedMemberId ? setExpandedMemberId(id) : setExpandedMemberId();
    }

    const toggleExpanded = () => {
        setExpanded(!expanded);
    }

    return (
        <div className={`${styles.crewList} ${expanded ? styles.expandedPanel : ''}`}>
            {crew_member_array.map((crew_member) => (
                <CrewMember
                    toggleCrewMember={toggleCrewMember}
                    expanded={expandedMemberId === crew_member.id}
                    key={crew_member.id}
                    data={crew_member}
                />
            ))}
            <div className={styles.backgroundTexture}></div>
            <div className={styles.mobileToggle} onClick={() => {toggleExpanded()}}>Crew</div>
        </div>
    );
}