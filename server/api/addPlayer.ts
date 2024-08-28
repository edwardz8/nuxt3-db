export default defineEventHandler(async(event) => {
    const requestBody = await readBody(event)

    const db = useDatabase("fantasyDB")

    await db.sql`CREATE TABLE IF NOT EXISTS players
    
    (
        Player TEXT,
        Team TEXT,
        POS TEXT,
        ATT TEXT,
        RUSHYDS TEXT,
        RUSHTDS TEXT,
        REC TEXT,
        RECYDS TEXT,
        RECTDS TEXT,
        FL TEXT,
        FPTS TEXT,
        ID INTEGER PRIMARY KEY AUTOINCREMENT
    )`;

    /* ID INTEGER PRIMARY KEY AUTOINCREMENT */

    const result = await db.sql`
    INSERT INTO players (Player, Team, POS, ATT, RUSHYDS, RUSHTDS, REC, RECYDS, RECTDS, FL, FPTS) VALUES (
    ${requestBody.Player},
    ${requestBody.Team},
    ${requestBody.POS},
    ${requestBody.ATT},
    ${requestBody.RUSHYDS},
    ${requestBody.RUSHTDS},
    ${requestBody.REC},
    ${requestBody.RECYDS},
    ${requestBody.RECTDS},
    ${requestBody.FL},
    ${requestBody.FPTS}
    )`

    console.log(result)
})



// CREATE TABLE IF NOT EXISTS flex(ID INTEGER PRIMARY KEY AUTOINCREMENT, Player TEXT, Team TEXT, Position TEXT, RushAttempts TEXT, RushYards TEXT, RushTD TEXT, Rec TEXT, RecYards TEXT, RecTD TEXT, Fl TEXT, Points TEXT);