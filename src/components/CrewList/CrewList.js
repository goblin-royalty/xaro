"use client";

import objectToArray from "../../utils/data_functions";

import { useState } from "react";

import CrewMember from "../CrewMember/CrewMember";

import temp_data from '../../data_old/data.json';

import styles from "./CrewList.module.css";

export default function CrewList({crewMembers}) {
    const [expandedMemberId, setExpandedMemberId] = useState();

    const toggleCrewMember = (id) => {
        id !== expandedMemberId ? setExpandedMemberId(id) : setExpandedMemberId();
    }
    console.log('crew members', crewMembers);
    const data = objectToArray(temp_data.crew_members);
    console.log('old data', data);

    return (
        <div className={styles.crewList}>
            {crewMembers.map((crew_member) => (
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