const { sql } = require("../postgres");


async function get(id) {
    return (await sql`
        SELECT *
        FROM professors
        WHERE id = ${id};
    `)[0];
}

async function getAll(offset, limit) {
    return (await sql`
        SELECT *
        FROM professors
        OFFSET ${offset}
        LIMIT ${limit}
    `)
}

async function create(professors) {
    return (await sql`
        INSERT INTO professors (
            name,
            email,
            password,
            registration,
            department_id
        ) VALUES (
            ${professors.name},
            ${professors.email},
            ${professors.password},
            ${professors.departmentId}
        )
        RETURNING *;
    `)[0];
}

module.exports = {
    get,
    getAll,
    create
}
