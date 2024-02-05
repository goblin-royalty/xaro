import styles from "./CrewMember.module.css";

export default function CrewMember({toggleCrewMember, expanded, data : {id, first_name, last_name, rank, race, type, status, expertise}}) {

    let crew_member_info;
    if(expanded) {
        crew_member_info = 
            <div className={styles.crewMemberSection}>
                <h3 onClick={() => toggleCrewMember(id)} className={styles.crewMemberTitle}>{first_name} {last_name}</h3>
                <div className={styles.crewMemberContainer}>
                    <p>Rank : <span>{rank}</span></p>
                    <p>Race : <span>{race}</span></p>
                    <p>Type : <span>{type}</span></p>
                    <p>Status : <span>{status}</span></p>
                    <p>Expertise : <span>{expertise}</span></p>
                </div>
            </div>;
    } else {
        crew_member_info = 
            <div className={styles.crewMemberSection}>
                <h3 onClick={() => toggleCrewMember(id)} className={styles.crewMemberTitle}>{first_name} {last_name}</h3>
            </div>;
    }

    return crew_member_info;
}