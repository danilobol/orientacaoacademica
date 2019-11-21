const { sql } = require("../postgres");


async function get(id) {
    return (await sql`
        SELECT *
        FROM orientation
        WHERE id = ${id};
    `)[0];
}

async function getAll(offset, limit) {
    return (await sql`
        SELECT *
        FROM orientation
        OFFSET ${offset}
        LIMIT ${limit}
    `)
}

async function create(newHelp) {
    return (await sql`
        INSERT INTO orientations (
            created_by,
            oriented_by,
            observations,
            pending
        ) VALUES (
            ${newHelp.IdStudent},
            ${newHelp.IdOrientador},
            ${newHelp.observations},
            ${newHelp.pending}
        )
        RETURNING *;
    `)[0];
}

module.exports = {
    get,
    getAll,
    create
}
