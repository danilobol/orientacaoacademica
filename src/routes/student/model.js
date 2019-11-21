const { sql } = require("../postgres");


async function get(id) {
    return (await sql`
        SELECT *
        FROM students
        WHERE id = ${id};
    `)[0];
}

async function getAll(offset, limit) {
    return (await sql`
        SELECT *
        FROM students
        OFFSET ${offset}
        LIMIT ${limit}
    `)
}

async function create(student) {
    return (await sql`
        INSERT INTO students (
            name,
            email,
            password,
            registration,
            course_id
        ) VALUES (
            ${student.name},
            ${student.email},
            ${student.password},
            ${student.registration},
            ${student.courseId}
        )
        RETURNING *;
    `)[0];
}

module.exports = {
    get,
    getAll,
    create
}
