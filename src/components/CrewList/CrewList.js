"use client";

import styles from "./CrewList.module.css";

import { useState } from "react";
import { usePathname } from 'next/navigation'

import CrewMember from "../CrewMember/CrewMember";
import Button from "../Button/Button";

export default function CrewList({crewMembers}) {
    const [expandedMemberId, setExpandedMemberId] = useState();
    const currentPath = usePathname();

    const toggleCrewMember = (id) => {
        id !== expandedMemberId ? setExpandedMemberId(id) : setExpandedMemberId();
    }

    const buttonsSection = () => {
        const addRecordButton = currentPath.includes('/add_ship_record') ? <></> : <Button type={'link'} action={'/add_ship_record'} text={'+'} extraClass={'addRecordButton'}/>;
        const weaponCreatorButton = currentPath.includes('/kodning_weapon_creator') ? <></> : <Button type={'link'} action={'/kodning_weapon_creator'} text={'Weapon creator'} extraClass={'weaponCreatorButton'}/>;

        return <div className={styles.buttonsSection}>{addRecordButton}{weaponCreatorButton}</div>;
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
            {buttonsSection()}
        </div>
    );
}