export default defineEventHandler(async(event) => {

    const db = useDatabase("fantasyDB")

    const players = await db.sql`SELECT * FROM players`;

    return players.rows

})