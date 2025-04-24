"use client";

import { useState } from "react";

import CrewMember from "../CrewMember/CrewMember";

import styles from "./CrewList.module.css";

export default function CrewList({crewMembers}) {
    const [expandedMemberId, setExpandedMemberId] = useState();

    const toggleCrewMember = (id) => {
        id !== expandedMemberId ? setExpandedMemberId(id) : setExpandedMemberId();
    }

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