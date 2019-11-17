module.exports = {
    1: `
        CREATE EXTENSION "uuid-ossp";

        CREATE TABLE departments (
            id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
            name TEXT NOT NULL
        );

        CREATE TABLE courses (
            id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
            name TEXT NOT NULL,
            department_id UUID REFERENCES departments(id)
        );

        CREATE TABLE disciplines (
            id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
            name TEXT NOT NULL,
            code TEXT NOT NULL
        );

        CREATE TABLE classes (
            id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
            number INT NOT NULL,
            discipline_id UUID REFERENCES disciplines(id),
            year INT NOT NULL,
            semester INT NOT NULL,
            start_at TEXT NOT NULL,
            end_at TEXT NOT NULL
        );

        CREATE TABLE students (
            id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
            name TEXT NOT NULL,
            email TEXT NOT NULL,
            password TEXT NOT NULL,
            registration TEXT NOT NULL,
            course_id UUID REFERENCES courses(id)
        );

        CREATE TABLE professors (
            id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
            name TEXT NOT NULL,
            email TEXT NOT NULL,
            password TEXT NOT NULL,
            department_id UUID REFERENCES departments(id)
        );

        CREATE TABLE orientations (
            id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
            created_by UUID REFERENCES students(id),
            oriented_by UUID REFERENCES professors(id) DEFAULT NULL,
            observations TEXT DEFAULT NULL,
            pending BOOLEAN NOT NULL DEFAULT TRUE
        );

        CREATE TABLE orientations_classes (
            orientation_id UUID REFERENCES orientations(id),
            class_id UUID REFERENCES classes(id),
            approved BOOLEAN DEFAULT NULL
        );
    `
}
