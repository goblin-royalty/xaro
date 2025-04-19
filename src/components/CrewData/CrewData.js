import sql from "../../db"

async function getCrew() {
    const crew_members = await sql`
        select * from crew_members ORDER BY id ASC
    `;

    return crew_members;
}

export default async function CrewData() {
    
    const test = await getCrew();
    console.log(test);

    return <h1>CrewData test</h1>
}