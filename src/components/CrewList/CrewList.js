"use client";

import styles from "./CrewList.module.css";

import { useState } from "react";

import CrewMember from "../CrewMember/CrewMember";
import Button from "../Button/Button";

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
            <Button type={'link'} action={'/kodning_weapon_creator'} text={'Weapon creator'}/>
        </div>
    );
}