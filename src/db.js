import postgres from 'postgres';

const sql = postgres('postgres://postgres:140911007v@localhost:5432/xaro_db', {
    host: 'localhost',
    port: 5432,
    database: 'xaro_db',
    username: 'postgres',
    password: '140911007v',
})

export default sql;