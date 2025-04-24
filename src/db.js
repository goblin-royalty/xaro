import postgres from 'postgres';

const sql = postgres({
    host: process.env.HOST,
    port: process.env.DB_PORT,
    database: process.env.DATABASE,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD
})

// DB operations

export async function getCrew() {
    const crewMembers = await sql`
        SELECT * FROM crew_members ORDER BY id ASC
    `;

    return crewMembers;
}

export async function globalSearch(keyword) {
    const results = await sql`
        SELECT * FROM crew_members WHERE first_name ILIKE ${`%${keyword}%`}
        OR last_name ILIKE ${`%${keyword}%`}
        OR crew_rank ILIKE ${`%${keyword}%`}
        OR race ILIKE ${`%${keyword}%`}
        OR composition ILIKE ${`%${keyword}%`}
        OR current_status ILIKE ${`%${keyword}%`}
        OR expertise ILIKE ${`%${keyword}%`}
        OR (first_name || ' ' || last_name) ILIKE ${`%${keyword}%`}
    `;
    return results;
}