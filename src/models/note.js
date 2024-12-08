import db from '../config/database.js';

const create = async (note) => {
    const query = 'INSERT INTO notes (title, datetime, note) VALUES (?, ?, ?)';
    const values = [note.title, note.datetime, note.note];

    return db.execute(query, values);
}

const all = async () => {
    const query = 'SELECT * FROM notes';
    return db.execute(query);
}

const findById = async (id) => {
    const query = 'SELECT * FROM notes WHERE id = ?';
    const values = [id];

    const [rows, fields] = await db.execute(query, values);
    return rows.length ? rows : false;
}

const destroy = async (id) => {
    const query = 'DELETE FROM notes WHERE id = ?';
    const values = [id];

    return db.execute(query, values);
}

const update = async (id, note) => {
    const query = 'UPDATE notes SET title = ?, datetime = ?, note = ? WHERE id = ?';
    const values = [note.title, note.datetime, note.note, id];

    return db.execute(query, values);
}

export default {
    all,
    findById,
    create,
    destroy,
    update,
}